import Foundation
import SwiftUI
import SQLite3

struct QuestionBank: Decodable {
    let version: Int
    let questions: [Question]
    let objectiveLabels: [String: String]
}

struct Question: Decodable, Identifiable {
    let id: String
    let bank: String
    let objectiveId: String?
    let domain: String
    let group: String?
    let difficulty: String?
    let type: String
    let question: String
    let choices: [String]?
    let answers: [Int]?
    let selectCount: Int?
    let caseText: String?
    let code: String?
    let orderItems: [String]?
    let explanation: String
    let source: URL

    var options: [String] { type == "order" ? orderItems ?? [] : choices ?? [] }
    var requiredSelection: Int { type == "multi" ? (selectCount ?? answers?.count ?? 1) : 1 }
    var typeLabel: String { ["single": "単一選択", "multi": "複数選択", "case": "ケース", "code": "コード", "order": "並べ替え"][type] ?? type }
}

struct ItemStat: Codable {
    var attempts: Int = 0
    var correct: Int = 0
    var streak: Int = 0
    var lastWrong: Bool = false
    var nextReview: Int64 = 0
    var lastAttempt: Int64 = 0
    var savedForReview: Bool = false

    init() {}
    init(from decoder: Decoder) throws {
        let box = try decoder.container(keyedBy: CodingKeys.self)
        attempts = try box.decodeIfPresent(Int.self, forKey: .attempts) ?? 0
        correct = try box.decodeIfPresent(Int.self, forKey: .correct) ?? 0
        streak = try box.decodeIfPresent(Int.self, forKey: .streak) ?? 0
        lastWrong = try box.decodeIfPresent(Bool.self, forKey: .lastWrong) ?? false
        nextReview = try box.decodeIfPresent(Int64.self, forKey: .nextReview) ?? 0
        lastAttempt = try box.decodeIfPresent(Int64.self, forKey: .lastAttempt) ?? 0
        savedForReview = try box.decodeIfPresent(Bool.self, forKey: .savedForReview) ?? false
    }
}

struct ObjectiveProgress: Identifiable {
    let id: String
    let title: String
    let domain: String
    let learned: Int
    let total: Int
    let attempts: Int
    let correct: Int
    let wrong: Int
    let due: Int

    var rate: Int { attempts == 0 ? 0 : Int((Double(correct) / Double(attempts) * 100).rounded()) }
    var needsReview: Bool { wrong > 0 || due > 0 || (attempts > 0 && rate < 80) }
}

struct SessionRecord: Codable {
    let at: Int64
    let mode: String
    let total: Int
    let correct: Int
    let rate: Int
    let durationSec: Int
}

struct StudyPlan: Codable { var examDate: String }

struct StudyHistory: Codable {
    var items: [String: ItemStat] = [:]
    var totalAttempts = 0
    var totalCorrect = 0
    var sessions: [SessionRecord] = []
    var studyPlan: StudyPlan? = nil

    init() {}
    init(from decoder: Decoder) throws {
        let box = try decoder.container(keyedBy: CodingKeys.self)
        items = try box.decodeIfPresent([String: ItemStat].self, forKey: .items) ?? [:]
        totalAttempts = try box.decodeIfPresent(Int.self, forKey: .totalAttempts) ?? 0
        totalCorrect = try box.decodeIfPresent(Int.self, forKey: .totalCorrect) ?? 0
        sessions = try box.decodeIfPresent([SessionRecord].self, forKey: .sessions) ?? []
        studyPlan = try box.decodeIfPresent(StudyPlan.self, forKey: .studyPlan)
    }
}

struct QuestionResult: Identifiable {
    let id: String
    let domain: String
    let type: String
    let correct: Bool
}

struct QuizSession {
    let mode: String
    let title: String
    let questions: [Question]
    let startedAt: Date
    let deadline: Date?
    var index = 0
    var order: [Int] = []
    var selected: Set<Int> = []
    var answered = false
    var isCorrect = false
    var results: [QuestionResult] = []
    var current: Question { questions[index] }
}

struct QuizSummary {
    let mode: String
    let title: String
    let results: [QuestionResult]
    let timedOut: Bool
    var correct: Int { results.filter(\.correct).count }
    var total: Int { results.count }
    var rate: Int { total == 0 ? 0 : Int((Double(correct) / Double(total) * 100).rounded()) }
    var wrongIDs: [String] { results.filter { !$0.correct }.map(\.id) }
}

@MainActor final class StudyStore: ObservableObject {
    enum Screen { case tabs, quiz, result }
    @Published private(set) var history: StudyHistory
    @Published private(set) var session: QuizSession?
    @Published private(set) var summary: QuizSummary?
    @Published private(set) var hasBackup = false
    @Published var screen: Screen = .tabs
    @Published var notice: String?

    let bank: QuestionBank
    private let historyURL: URL
    private let backupURL: URL
    private let migrationMarkerURL: URL
    private var previousFirst: [String: String] = [:]
    private var previousChoices: [String: [Int]] = [:]

    init() {
        guard let url = Bundle.main.url(forResource: "questions", withExtension: "json"),
              let data = try? Data(contentsOf: url),
              let decoded = try? JSONDecoder().decode(QuestionBank.self, from: data),
              decoded.questions.count == 220 else { fatalError("販売用問題データを読み込めません") }
        bank = decoded
        let support = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
        try? FileManager.default.createDirectory(at: support, withIntermediateDirectories: true)
        historyURL = support.appendingPathComponent("study-history.json")
        backupURL = support.appendingPathComponent("study-history-backup.json")
        migrationMarkerURL = support.appendingPathComponent("legacy-migration-disabled")
        if !FileManager.default.fileExists(atPath: historyURL.path) && !FileManager.default.fileExists(atPath: migrationMarkerURL.path) {
            switch LegacyHistoryImporter.copyIfPresent(to: historyURL, backup: backupURL) {
            case .failed: notice = "旧版の履歴を自動で移せませんでした。旧版またはWeb版で保存したJSONを設定画面から読み込んでください。"
            case .copied, .notFound: break
            }
        }
        history = (try? JSONDecoder().decode(StudyHistory.self, from: Data(contentsOf: historyURL))) ?? StudyHistory()
        hasBackup = FileManager.default.fileExists(atPath: backupURL.path)
    }

    var all: [Question] { bank.questions }
    var core: [Question] { all.filter { $0.bank == "core" } }
    var domains: [String] {
        let order = ["分析ソリューションの実装と管理", "データの取り込みと変換", "分析ソリューションの監視と最適化"]
        let available = Set(all.map(\.domain))
        return order.filter { available.contains($0) }
    }
    var learned: Int { all.filter { stat($0).attempts > 0 }.count }
    var unseen: Int { all.count - learned }
    var wrong: [Question] { all.filter { stat($0).lastWrong } }
    var due: [Question] { all.filter { stat($0).nextReview > 0 && stat($0).nextReview <= nowMS } }
    var saved: [Question] { all.filter { stat($0).savedForReview } }
    var todayCount: Int { all.filter { stat($0).lastAttempt > 0 && Calendar.current.isDate(Date(timeIntervalSince1970: Double(stat($0).lastAttempt) / 1000), inSameDayAs: .now) }.count }
    var hasHistory: Bool { FileManager.default.fileExists(atPath: historyURL.path) }
    var examDate: Date? {
        guard let value = history.studyPlan?.examDate else { return nil }
        return Self.dateFormatter.date(from: value)
    }
    var daysThroughExam: Int? {
        guard let examDate else { return nil }
        return (Calendar.current.dateComponents([.day], from: Calendar.current.startOfDay(for: .now), to: examDate).day ?? -1) + 1
    }
    var dailyUnseenCount: Int {
        guard unseen > 0 else { return 10 }
        guard let daysThroughExam, daysThroughExam > 0 else { return min(10, unseen) }
        return min(50, unseen, Int(ceil(Double(unseen) / Double(daysThroughExam))))
    }

    func stat(_ question: Question) -> ItemStat { history.items[question.id] ?? ItemStat() }
    func domainProgress(_ domain: String) -> (learned: Int, total: Int, rate: Int) {
        let questions = all.filter { $0.domain == domain }
        let attempts = questions.reduce(0) { $0 + stat($1).attempts }
        let correct = questions.reduce(0) { $0 + stat($1).correct }
        return (questions.filter { stat($0).attempts > 0 }.count, questions.count, attempts == 0 ? 0 : Int((Double(correct) / Double(attempts) * 100).rounded()))
    }
    var weakDomain: String? {
        domains.min { a, b in
            let x = domainProgress(a), y = domainProgress(b)
            if (x.learned == 0) != (y.learned == 0) { return x.learned == 0 }
            if x.rate != y.rate { return x.rate < y.rate }
            return x.learned < y.learned
        }
    }
    var objectiveProgress: [ObjectiveProgress] {
        let grouped = Dictionary(grouping: core.filter {
            let id = $0.objectiveId ?? ""
            return id.count > 1 && id.first == "O" && id.dropFirst().allSatisfy(\.isNumber)
        }, by: { $0.objectiveId ?? "" })
        return bank.objectiveLabels.keys.sorted().compactMap { id in
            guard let questions = grouped[id], let domain = questions.first?.domain else { return nil }
            let attempts = questions.reduce(0) { $0 + stat($1).attempts }
            let correct = questions.reduce(0) { $0 + stat($1).correct }
            return ObjectiveProgress(id: id, title: bank.objectiveLabels[id] ?? id, domain: domain,
                                     learned: questions.filter { stat($0).attempts > 0 }.count,
                                     total: questions.count, attempts: attempts, correct: correct,
                                     wrong: questions.filter { stat($0).lastWrong }.count,
                                     due: questions.filter { stat($0).nextReview > 0 && stat($0).nextReview <= nowMS }.count)
        }
    }
    var focusObjectives: [ObjectiveProgress] {
        Array(objectiveProgress.sorted { a, b in
            let ap = a.needsReview ? 0 : a.learned < a.total ? 1 : 2
            let bp = b.needsReview ? 0 : b.learned < b.total ? 1 : 2
            return ap != bp ? ap < bp : a.rate != b.rate ? a.rate < b.rate : a.id < b.id
        }.prefix(3))
    }

    func toggleSaved(_ question: Question) {
        guard session?.answered == true, session?.current.id == question.id else { return }
        var entry = stat(question)
        entry.savedForReview.toggle()
        history.items[question.id] = entry
        save()
    }

    func setExamDate(_ date: Date?) {
        history.studyPlan = date.map { StudyPlan(examDate: Self.dateFormatter.string(from: $0)) }
        save()
    }

    func start(_ mode: String, filter: String? = nil, explicitIDs: [String]? = nil) {
        let questions: [Question]
        if let explicitIDs {
            let ids = Set(explicitIDs)
            questions = all.filter { ids.contains($0.id) }
        } else {
            switch mode {
            case "basic15": questions = all.filter { $0.bank == "basic" }
            case "mid15": questions = all.filter { $0.bank == "intermediate" }
            case "adv15": questions = all.filter { $0.bank == "advanced" }
            case "bridge9": questions = all.filter { $0.bank == "bridge" }
            case "allQuestions": questions = all
            case "quick10": questions = Array(core.shuffled().prefix(10))
            case "train20": questions = Array(core.shuffled().prefix(20))
            case "focus10":
                let unseenQuestions = all.filter { stat($0).attempts == 0 }
                questions = unseenQuestions.isEmpty ? Array(all.shuffled().sorted { mastery($0) < mastery($1) }.prefix(10)) : Array(unseenQuestions.shuffled().prefix(dailyUnseenCount))
            case "mock45":
                let domains = Array(Set(core.map(\.domain))).sorted()
                let each = 45 / domains.count
                questions = domains.enumerated().flatMap { index, domain in
                    Array(core.filter { $0.domain == domain }.shuffled().prefix(each + (index < 45 % domains.count ? 1 : 0)))
                }
            case "code": questions = Array(core.filter { $0.type == "code" }.shuffled().prefix(20))
            case "wrong": questions = Array(wrong.shuffled().prefix(25))
            case "due": questions = Array(due.shuffled().prefix(25))
            case "saved": questions = Array(saved.shuffled().prefix(25))
            case "domain": questions = Array(core.filter { $0.domain == filter }.shuffled().prefix(20))
            case "domainAll": questions = core.filter { $0.domain == filter }
            case "objective": questions = core.filter { $0.objectiveId == filter }
            case "hard25": questions = Array(core.filter { $0.difficulty == "Hard" || ["case", "multi", "code", "order"].contains($0.type) }.shuffled().prefix(25))
            default: questions = []
            }
        }
        guard !questions.isEmpty else { notice = "この演習の対象問題はありません。"; return }
        var shuffled = questions.shuffled()
        let key = "\(mode):\(filter ?? "")"
        if shuffled.count > 1 && shuffled[0].id == previousFirst[key] { shuffled.swapAt(0, 1) }
        previousFirst[key] = shuffled[0].id
        session = QuizSession(mode: mode, title: title(for: mode), questions: shuffled, startedAt: .now,
                              deadline: mode == "mock45" ? Date().addingTimeInterval(100 * 60) : nil)
        prepareQuestion()
        screen = .quiz
    }

    func toggleChoice(_ index: Int) {
        guard var session, !session.answered else { return }
        if session.current.type == "multi" {
            if session.selected.contains(index) { session.selected.remove(index) }
            else if session.selected.count < session.current.requiredSelection { session.selected.insert(index) }
        } else { session.selected = [index] }
        self.session = session
    }
    func moveOrder(_ index: Int, by delta: Int) {
        guard var session, !session.answered, session.current.type == "order" else { return }
        let destination = index + delta
        guard session.order.indices.contains(index), session.order.indices.contains(destination) else { return }
        session.order.swapAt(index, destination)
        self.session = session
    }
    func answer() {
        guard var session, !session.answered else { return }
        let question = session.current
        guard question.type == "order" || session.selected.count == question.requiredSelection else { return }
        let correct = question.type == "order" ? session.order == Array(question.options.indices) : session.selected == Set(question.answers ?? [])
        session.answered = true
        session.isCorrect = correct
        session.results.append(QuestionResult(id: question.id, domain: question.domain, type: question.type, correct: correct))
        self.session = session
        record(question, correct: correct)
    }
    func next() {
        guard var session, session.answered else { return }
        if session.index + 1 == session.questions.count { finish(timedOut: false); return }
        session.index += 1
        self.session = session
        prepareQuestion()
    }
    func finish(timedOut: Bool) {
        guard var session else { return }
        if timedOut {
            for question in session.questions.dropFirst(session.index + (session.answered ? 1 : 0)) {
                session.results.append(QuestionResult(id: question.id, domain: question.domain, type: question.type, correct: false))
            }
        }
        let result = QuizSummary(mode: session.mode, title: session.title, results: session.results, timedOut: timedOut)
        history.sessions.insert(SessionRecord(at: nowMS, mode: session.mode, total: result.total,
                                              correct: result.correct, rate: result.rate,
                                              durationSec: Int(Date().timeIntervalSince(session.startedAt))), at: 0)
        history.sessions = Array(history.sessions.prefix(40))
        save()
        summary = result
        self.session = nil
        screen = .result
    }
    func quit() { session = nil; screen = .tabs }
    func returnHome() { summary = nil; screen = .tabs }
    func dismissNotice() { notice = nil }

    func exportURL() throws -> URL {
        let url = FileManager.default.temporaryDirectory.appendingPathComponent("DP700-study-history.json")
        try JSONEncoder().encode(history).write(to: url, options: .atomic)
        return url
    }
    func importHistory(from url: URL) throws {
        let granted = url.startAccessingSecurityScopedResource()
        defer { if granted { url.stopAccessingSecurityScopedResource() } }
        let data = try Data(contentsOf: url)
        guard data.count <= 5_000_000 else { throw HistoryError.invalid }
        let decoded = try JSONDecoder().decode(StudyHistory.self, from: data)
        guard decoded.totalAttempts >= 0, decoded.totalCorrect >= 0,
              decoded.items.values.allSatisfy({ $0.attempts >= 0 && $0.correct >= 0 && $0.correct <= $0.attempts }) else { throw HistoryError.invalid }
        let current = try JSONEncoder().encode(history)
        try current.write(to: backupURL, options: .atomic)
        hasBackup = true
        history = decoded
        save()
    }
    func restoreBackup() throws {
        let data = try Data(contentsOf: backupURL)
        history = try JSONDecoder().decode(StudyHistory.self, from: data)
        save()
        try FileManager.default.removeItem(at: backupURL)
        hasBackup = false
    }
    func reset() {
        let clearedLegacy = LegacyHistoryImporter.clear()
        history = StudyHistory()
        try? FileManager.default.removeItem(at: historyURL)
        try? FileManager.default.removeItem(at: backupURL)
        try? Data().write(to: migrationMarkerURL, options: .atomic)
        hasBackup = false
        if !clearedLegacy { notice = "旧版の履歴を削除できませんでした。サポートへご連絡ください。" }
    }

    private func prepareQuestion() {
        guard var session else { return }
        let question = session.current
        var order = Array(question.options.indices).shuffled()
        if order.count > 1 && order == previousChoices[question.id] { order.swapAt(0, 1) }
        previousChoices[question.id] = order
        session.order = order
        session.selected = []
        session.answered = false
        session.isCorrect = false
        self.session = session
    }
    private func record(_ question: Question, correct: Bool) {
        var entry = stat(question)
        entry.attempts += 1
        history.totalAttempts += 1
        if correct {
            entry.correct += 1
            history.totalCorrect += 1
            entry.streak += 1
            entry.lastWrong = false
            let intervals = [1, 3, 7, 14, 30]
            entry.nextReview = nowMS + Int64(intervals[min(entry.streak - 1, 4)]) * 86_400_000
        } else {
            entry.streak = 0
            entry.lastWrong = true
            entry.nextReview = nowMS + 86_400_000
        }
        entry.lastAttempt = nowMS
        history.items[question.id] = entry
        save()
    }
    private func mastery(_ question: Question) -> Double {
        let entry = stat(question)
        return Double(entry.correct) / Double(max(entry.attempts, 1)) + Double(entry.streak) * 0.001
    }
    private func save() {
        do { try JSONEncoder().encode(history).write(to: historyURL, options: .atomic) }
        catch { notice = "学習履歴を保存できませんでした。" }
    }
    private var nowMS: Int64 { Int64(Date().timeIntervalSince1970 * 1000) }
    private static let dateFormatter: DateFormatter = {
        let value = DateFormatter()
        value.locale = Locale(identifier: "en_US_POSIX")
        value.calendar = Calendar(identifier: .gregorian)
        value.dateFormat = "yyyy-MM-dd"
        return value
    }()
    func title(for mode: String) -> String {
        ["basic15": "初級ステップ", "mid15": "中級ステップ", "adv15": "上級ステップ", "bridge9": "最上級ステップ",
         "allQuestions": "全問演習", "quick10": "10問クイック", "train20": "20問演習", "focus10": "今日の優先演習",
         "mock45": "45問模試", "code": "コード問題", "wrong": "間違い復習", "due": "期限復習", "saved": "保存した問題",
         "domain": "分野別20問", "domainAll": "分野別全問", "objective": "テーマ別演習", "hard25": "難問25問"][mode] ?? "演習"
    }
}

enum HistoryError: Error { case invalid }

private enum LegacyHistoryImporter {
    enum Result { case copied, notFound, failed }

    static func copyIfPresent(to destination: URL, backup: URL) -> Result {
        var foundHistory = false
        for dbURL in databases() {
            guard contains(dbURL, key: "dp700-dojo-v2") else { continue }
            foundHistory = true
            guard let history = read(dbURL, key: "dp700-dojo-v2"),
                  let data = try? JSONEncoder().encode(history) else { continue }
            do {
                try data.write(to: destination, options: .atomic)
                if let oldBackup = read(dbURL, key: "dp700-dojo-v2-backup"),
                   let backupData = try? JSONEncoder().encode(oldBackup) {
                    try backupData.write(to: backup, options: .atomic)
                }
                return .copied
            } catch { return .failed }
        }
        return foundHistory ? .failed : .notFound
    }

    static func clear() -> Bool {
        for url in databases() {
            var database: OpaquePointer?
            guard sqlite3_open_v2(url.path, &database, SQLITE_OPEN_READWRITE, nil) == SQLITE_OK else {
                if database != nil { sqlite3_close(database) }
                return false
            }
            let status = sqlite3_exec(database, "DELETE FROM ItemTable WHERE key IN ('dp700-dojo-v2', 'dp700-dojo-v2-backup')", nil, nil, nil)
            sqlite3_close(database)
            if status != SQLITE_OK { return false }
        }
        return true
    }

    private static func databases() -> [URL] {
        let library = FileManager.default.urls(for: .libraryDirectory, in: .userDomainMask)[0]
        let root = library.appendingPathComponent("WebKit/com.minetoshi.dp700dojo/WebsiteData/Default")
        guard let files = FileManager.default.enumerator(at: root, includingPropertiesForKeys: nil) else { return [] }
        return files.compactMap { item -> URL? in
            guard let dbURL = item as? URL, dbURL.lastPathComponent == "localstorage.sqlite3" else { return nil }
            let originURL = dbURL.deletingLastPathComponent().deletingLastPathComponent().appendingPathComponent("origin")
            guard let originData = try? Data(contentsOf: originURL),
                  let origin = String(data: originData, encoding: .isoLatin1),
                  origin.contains("capacitor"), origin.contains("localhost") else { return nil }
            return dbURL
        }
    }

    private static func read(_ url: URL, key: String) -> StudyHistory? {
        var database: OpaquePointer?
        guard sqlite3_open_v2(url.path, &database, SQLITE_OPEN_READONLY, nil) == SQLITE_OK else {
            if database != nil { sqlite3_close(database) }
            return nil
        }
        defer { sqlite3_close(database) }
        var statement: OpaquePointer?
        let query = "SELECT value FROM ItemTable WHERE key='\(key)'"
        guard sqlite3_prepare_v2(database, query, -1, &statement, nil) == SQLITE_OK else { return nil }
        defer { sqlite3_finalize(statement) }
        guard sqlite3_step(statement) == SQLITE_ROW,
              let bytes = sqlite3_column_blob(statement, 0) else { return nil }
        let value = Data(bytes: bytes, count: Int(sqlite3_column_bytes(statement, 0)))
        guard let json = String(data: value, encoding: .utf16LittleEndian)?.data(using: .utf8) else { return nil }
        return try? JSONDecoder().decode(StudyHistory.self, from: json)
    }

    private static func contains(_ url: URL, key: String) -> Bool {
        var database: OpaquePointer?
        guard sqlite3_open_v2(url.path, &database, SQLITE_OPEN_READONLY, nil) == SQLITE_OK else {
            if database != nil { sqlite3_close(database) }
            return false
        }
        defer { sqlite3_close(database) }
        var statement: OpaquePointer?
        let query = "SELECT 1 FROM ItemTable WHERE key='\(key)' LIMIT 1"
        guard sqlite3_prepare_v2(database, query, -1, &statement, nil) == SQLITE_OK else { return false }
        defer { sqlite3_finalize(statement) }
        return sqlite3_step(statement) == SQLITE_ROW
    }
}
