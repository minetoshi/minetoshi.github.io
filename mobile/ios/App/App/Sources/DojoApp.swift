import SwiftUI
import UniformTypeIdentifiers

@main struct DojoApp: App {
    @StateObject private var store = StudyStore()

    var body: some Scene {
        WindowGroup {
            RootView()
                .environmentObject(store)
                .tint(DojoTheme.blue)
        }
    }
}

enum DojoTheme {
    static let blue = Color(red: 0.15, green: 0.37, blue: 0.88)
    static let ink = Color(red: 0.08, green: 0.15, blue: 0.28)
    static let background = Color(red: 0.96, green: 0.97, blue: 0.99)
    static let green = Color(red: 0.08, green: 0.54, blue: 0.28)
    static let red = Color(red: 0.78, green: 0.15, blue: 0.16)
}

struct RootView: View {
    @EnvironmentObject private var store: StudyStore
    @State private var selectedTab = 0

    var body: some View {
        Group {
            switch store.screen {
            case .tabs:
                TabView(selection: $selectedTab) {
                    NavigationStack { HomeView() }
                        .tabItem { Label("今日", systemImage: "house.fill") }.tag(0)
                    NavigationStack { PracticeView() }
                        .tabItem { Label("演習", systemImage: "square.grid.2x2.fill") }.tag(1)
                    NavigationStack { StudyProgressView() }
                        .tabItem { Label("進捗", systemImage: "chart.bar.fill") }.tag(2)
                    NavigationStack { SettingsView() }
                        .tabItem { Label("設定", systemImage: "gearshape.fill") }.tag(3)
                }
            case .quiz: QuizView()
            case .result: ResultView()
            }
        }
        .alert("お知らせ", isPresented: Binding(get: { store.notice != nil }, set: { if !$0 { store.dismissNotice() } })) {
            Button("閉じる") { store.dismissNotice() }
        } message: { Text(store.notice ?? "") }
    }
}

struct HomeView: View {
    @EnvironmentObject private var store: StudyStore
    @State private var showingDatePicker = false
    @State private var selectedDate = Date()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                VStack(alignment: .leading, spacing: 12) {
                    Text("DP-700 問題道場").font(.largeTitle.bold())
                    Text("試験日から逆算して、今日の学習を進める。")
                        .font(.subheadline).foregroundStyle(.white.opacity(0.9))
                    Text("独自演習\(store.all.count)問 ・ オフライン対応")
                        .font(.caption.bold())
                        .padding(.horizontal, 12).padding(.vertical, 8)
                        .background(.white.opacity(0.15), in: Capsule())
                }
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(22)
                .background(LinearGradient(colors: [DojoTheme.ink, DojoTheme.blue], startPoint: .topLeading, endPoint: .bottomTrailing), in: RoundedRectangle(cornerRadius: 22))

                VStack(alignment: .leading, spacing: 15) {
                    Label("今日の学習", systemImage: "calendar.badge.clock")
                        .font(.title2.bold())
                    HStack {
                        VStack(alignment: .leading, spacing: 4) {
                            Text("試験日（任意）").font(.caption).foregroundStyle(.secondary)
                            Text(store.examDate?.formatted(date: .abbreviated, time: .omitted) ?? "未設定")
                                .font(.headline)
                        }
                        Spacer()
                        Button(store.examDate == nil ? "設定" : "変更") {
                            selectedDate = store.examDate ?? .now
                            showingDatePicker = true
                        }
                        .buttonStyle(.bordered)
                        .accessibilityIdentifier("examDateButton")
                    }
                    Text(planText).font(.subheadline).foregroundStyle(.secondary)
                    ProgressView(value: Double(store.learned), total: Double(store.all.count))
                    Text("経験済み \(store.learned)/\(store.all.count)問  ・  今日 \(store.todayCount)問")
                        .font(.subheadline.bold())
                    Text("期限 \(store.due.count)問  ・  保存 \(store.saved.count)問  ・  間違い \(store.wrong.count)問  ・  未着手 \(store.unseen)問")
                        .font(.caption).foregroundStyle(.secondary)
                    Button(dailyTitle) { store.start(dailyMode) }
                        .buttonStyle(PrimaryButtonStyle())
                        .accessibilityIdentifier("dailyStartButton")

                    if !store.saved.isEmpty && dailyMode != "saved" {
                        Button("保存した問題を復習（\(min(25, store.saved.count))問）") { store.start("saved") }
                            .buttonStyle(.bordered)
                    }

                    if let weak = store.weakDomain {
                        Divider()
                        Text("次に鍛える分野").font(.headline)
                        let progress = store.domainProgress(weak)
                        Text("\(weak) ・ \(progress.learned)/\(progress.total)問経験")
                            .font(.subheadline).foregroundStyle(.secondary)
                        Button("この分野を20問") { store.start("domain", filter: weak) }
                            .buttonStyle(.borderedProminent)
                    }
                }
                .cardStyle()

                VStack(alignment: .leading, spacing: 12) {
                    Text("次に学ぶテーマ").font(.title2.bold())
                    Text("未着手と要復習のテーマを優先して表示します。")
                        .font(.caption).foregroundStyle(.secondary)
                    ForEach(store.focusObjectives, id: \.id) { objective in
                        Divider()
                        HStack(alignment: .top) {
                            VStack(alignment: .leading, spacing: 4) {
                                Text(objective.title).font(.subheadline.bold())
                                Text("\(objective.learned)/\(objective.total)問経験 ・ \(objective.learned == 0 ? "未着手" : "正答率\(objective.rate)%")")
                                    .font(.caption).foregroundStyle(.secondary)
                            }
                            Spacer(minLength: 8)
                            Button("解く") { store.start("objective", filter: objective.id) }
                                .buttonStyle(.bordered)
                        }
                    }
                    NavigationLink("49テーマの学習状況をすべて見る") { ObjectiveMapView() }
                        .font(.subheadline.bold())
                        .accessibilityIdentifier("objectiveMapLink")
                }
                .cardStyle()
            }
            .padding(16)
        }
        .background(DojoTheme.background)
        .navigationTitle("今日")
        .sheet(isPresented: $showingDatePicker) {
            NavigationStack {
                VStack(spacing: 24) {
                    DatePicker("試験日", selection: $selectedDate, in: Date()..., displayedComponents: .date)
                        .datePickerStyle(.graphical)
                    Text("未着手問題を一度解くための目安です。合格を保証する指標ではありません。")
                        .font(.footnote).foregroundStyle(.secondary)
                    Spacer()
                }
                .padding()
                .navigationTitle("試験日")
                .toolbar {
                    ToolbarItem(placement: .cancellationAction) { Button("キャンセル") { showingDatePicker = false } }
                    ToolbarItem(placement: .confirmationAction) { Button("保存") { store.setExamDate(selectedDate); showingDatePicker = false } }
                    if store.examDate != nil {
                        ToolbarItem(placement: .bottomBar) { Button("試験日を削除", role: .destructive) { store.setExamDate(nil); showingDatePicker = false } }
                    }
                }
            }
        }
    }

    private var planText: String {
        guard let days = store.daysThroughExam else { return "試験日を設定すると、未着手問題を終えるための1日あたりの目安を表示します。" }
        if days < 1 { return "試験日が過ぎています。新しい日付を設定してください。" }
        if store.unseen == 0 { return "試験日まで\(days)日。全問を一度経験済みです。期限復習を続けましょう。" }
        let target = Int(ceil(Double(store.unseen) / Double(days)))
        return "試験日まで\(days)日。未着手\(store.unseen)問を一周する目安は1日\(target)問。" + (target > 50 ? "1回最大50問で分けて進められます。" : "")
    }
    private var dailyMode: String { !store.due.isEmpty ? "due" : !store.saved.isEmpty ? "saved" : !store.wrong.isEmpty ? "wrong" : "focus10" }
    private var dailyTitle: String {
        if !store.due.isEmpty { return "期限復習を始める（\(min(25, store.due.count))問）" }
        if !store.saved.isEmpty { return "保存した問題を復習する（\(min(25, store.saved.count))問）" }
        if !store.wrong.isEmpty { return "間違いを復習する（\(min(25, store.wrong.count))問）" }
        return store.unseen > 0 ? "未着手から\(store.dailyUnseenCount)問を始める" : "定着確認の10問を始める"
    }
}

struct PracticeView: View {
    @EnvironmentObject private var store: StudyStore
    var body: some View {
        List {
            Section("段階的に学ぶ") {
                mode("初級・15問", "basic15", "1.circle.fill")
                mode("中級・15問", "mid15", "2.circle.fill")
                mode("上級・30問", "adv15", "3.circle.fill")
                mode("最上級・18問", "bridge9", "4.circle.fill")
            }
            Section("短時間で解く") {
                mode("10問クイック", "quick10", "bolt.fill")
                mode("20問演習", "train20", "square.stack.fill")
                mode("全問を解く（\(store.all.count)問）", "allQuestions", "books.vertical.fill")
            }
            Section("模試・応用") {
                mode("45問模試・100分", "mock45", "timer")
                mode("コード問題・20問", "code", "chevron.left.forwardslash.chevron.right")
                mode("難問・25問", "hard25", "flame.fill")
            }
            Section("復習") {
                mode("期限復習・\(store.due.count)問", "due", "calendar.badge.clock")
                mode("保存した問題・\(store.saved.count)問", "saved", "bookmark.fill")
                mode("間違い復習・\(store.wrong.count)問", "wrong", "arrow.counterclockwise")
            }
            Section("分野別") {
                ForEach(store.domains, id: \.self) { domain in
                    Button { store.start("domain", filter: domain) } label: {
                        VStack(alignment: .leading, spacing: 4) {
                            Text(domain).foregroundStyle(DojoTheme.ink)
                            let progress = store.domainProgress(domain)
                            Text("\(progress.learned)/\(progress.total)問経験")
                                .font(.caption).foregroundStyle(.secondary)
                        }
                    }
                }
            }
        }
        .navigationTitle("演習を選ぶ")
    }
    private func mode(_ title: String, _ key: String, _ symbol: String) -> some View {
        Button { store.start(key) } label: {
            Label(title, systemImage: symbol).foregroundStyle(DojoTheme.ink)
        }
        .accessibilityIdentifier("mode-\(key)")
    }
}

struct QuizView: View {
    @EnvironmentObject private var store: StudyStore
    @State private var showingQuit = false
    var body: some View {
        NavigationStack {
            if let session = store.session {
                ScrollView {
                    VStack(alignment: .leading, spacing: 16) {
                        HStack {
                            Text("\(session.index + 1) / \(session.questions.count)").font(.headline)
                            Spacer()
                            if let deadline = session.deadline {
                                Text(deadline, style: .timer).monospacedDigit().foregroundStyle(DojoTheme.red)
                            }
                        }
                        ProgressView(value: Double(session.index + (session.answered ? 1 : 0)), total: Double(session.questions.count))
                        HStack {
                            Text(session.current.domain)
                            Spacer()
                            Text(session.current.id)
                        }
                        .font(.caption).foregroundStyle(.secondary)
                        Text(session.current.typeLabel).font(.caption.bold()).foregroundStyle(DojoTheme.blue)
                        Text(session.current.question).font(.title3.bold()).fixedSize(horizontal: false, vertical: true)
                        if let caseText = session.current.caseText {
                            Text(caseText).font(.subheadline).padding().frame(maxWidth: .infinity, alignment: .leading)
                                .background(Color(.secondarySystemBackground), in: RoundedRectangle(cornerRadius: 12))
                        }
                        if let code = session.current.code {
                            ScrollView(.horizontal) {
                                Text(code).font(.system(.subheadline, design: .monospaced))
                                    .textSelection(.enabled).padding()
                            }
                            .background(DojoTheme.ink.opacity(0.07), in: RoundedRectangle(cornerRadius: 12))
                            Text("コードは左右にスクロールできます。")
                                .font(.caption).foregroundStyle(.secondary)
                        }
                        Text(session.current.type == "order" ? "正しい順に並べ替えてください。" : "\(session.current.requiredSelection)つ選んでください。")
                            .font(.subheadline).foregroundStyle(.secondary)

                        if session.current.type == "order" { orderOptions(session) }
                        else { choiceOptions(session) }

                        if session.answered { feedback(session) }
                        if session.answered {
                            Button(session.index + 1 == session.questions.count ? "結果を見る" : "次へ") { store.next() }
                                .buttonStyle(PrimaryButtonStyle())
                                .accessibilityIdentifier("nextButton")
                        } else {
                            Button("回答する") { store.answer() }
                                .buttonStyle(PrimaryButtonStyle())
                                .disabled(session.current.type != "order" && session.selected.count != session.current.requiredSelection)
                                .accessibilityIdentifier("answerButton")
                        }
                    }
                    .padding(16)
                }
                .background(DojoTheme.background)
                .navigationTitle(session.title)
                .navigationBarTitleDisplayMode(.inline)
                .toolbar { ToolbarItem(placement: .topBarLeading) { Button("終了") { showingQuit = true } } }
                .confirmationDialog("この演習を終了しますか？", isPresented: $showingQuit) {
                    Button("演習を終了", role: .destructive) { store.quit() }
                }
                .onReceive(Timer.publish(every: 1, on: .main, in: .common).autoconnect()) { _ in
                    if let deadline = store.session?.deadline, Date() >= deadline { store.finish(timedOut: true) }
                }
            }
        }
    }

    private func choiceOptions(_ session: QuizSession) -> some View {
        VStack(spacing: 10) {
            ForEach(Array(session.order.enumerated()), id: \.offset) { displayIndex, originalIndex in
                let isAnswer = session.current.answers?.contains(originalIndex) ?? false
                let isSelected = session.selected.contains(originalIndex)
                let card = HStack(alignment: .top, spacing: 10) {
                    Text("\(String(UnicodeScalar(65 + displayIndex)!)).")
                        .fontWeight(.bold)
                    Text(session.current.options[originalIndex]).frame(maxWidth: .infinity, alignment: .leading)
                    if session.answered && isAnswer { Image(systemName: "checkmark.circle.fill") }
                    else if session.answered && isSelected { Image(systemName: "xmark.circle.fill") }
                }
                .font(.body)
                .foregroundStyle(session.answered && isAnswer ? DojoTheme.green : session.answered && isSelected ? DojoTheme.red : DojoTheme.ink)
                .padding(14).frame(maxWidth: .infinity, alignment: .leading)
                .background(session.answered && isAnswer ? DojoTheme.green.opacity(0.12) : session.answered && isSelected ? DojoTheme.red.opacity(0.12) : isSelected ? DojoTheme.blue.opacity(0.1) : .white,
                            in: RoundedRectangle(cornerRadius: 14))
                .overlay(RoundedRectangle(cornerRadius: 14).stroke(session.answered && isAnswer ? DojoTheme.green : session.answered && isSelected ? DojoTheme.red : isSelected ? DojoTheme.blue : Color(.separator), lineWidth: isSelected || session.answered && isAnswer ? 2 : 1))
                if session.answered {
                    card.accessibilityIdentifier("choice-\(displayIndex)")
                } else {
                    Button { store.toggleChoice(originalIndex) } label: { card }
                        .buttonStyle(.plain)
                        .accessibilityIdentifier("choice-\(displayIndex)")
                }
            }
        }
    }
    private func orderOptions(_ session: QuizSession) -> some View {
        VStack(spacing: 10) {
            ForEach(Array(session.order.enumerated()), id: \.offset) { index, originalIndex in
                HStack(spacing: 12) {
                    Text("\(index + 1). ").fontWeight(.bold)
                    Text(session.current.options[originalIndex]).frame(maxWidth: .infinity, alignment: .leading)
                    if session.answered {
                        Image(systemName: index == originalIndex ? "checkmark.circle.fill" : "xmark.circle.fill")
                    } else {
                        Button { store.moveOrder(index, by: -1) } label: { Image(systemName: "arrow.up") }
                            .disabled(index == 0).accessibilityLabel("上へ移動")
                        Button { store.moveOrder(index, by: 1) } label: { Image(systemName: "arrow.down") }
                            .disabled(index == session.order.count - 1).accessibilityLabel("下へ移動")
                    }
                }
                .padding(14)
                .background(session.answered ? (index == originalIndex ? DojoTheme.green.opacity(0.12) : DojoTheme.red.opacity(0.12)) : .white,
                            in: RoundedRectangle(cornerRadius: 14))
            }
        }
    }
    private func feedback(_ session: QuizSession) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            Label(session.isCorrect ? "正解" : "不正解", systemImage: session.isCorrect ? "checkmark.circle.fill" : "xmark.circle.fill")
                .font(.title3.bold())
                .foregroundStyle(session.isCorrect ? DojoTheme.green : DojoTheme.red)
                .accessibilityIdentifier("answerFeedback")
            Text("正解：" + (session.current.type == "order" ? session.current.options.joined(separator: " → ") : (session.current.answers ?? []).map { session.current.options[$0] }.joined(separator: " / ")))
                .font(.subheadline.bold())
            Text(session.current.explanation).font(.body)
            Link(destination: session.current.source) {
                Label("Microsoft Learnで仕様を確認", systemImage: "arrow.up.right.square")
            }
            .font(.subheadline)
            Button {
                store.toggleSaved(session.current)
            } label: {
                Label(store.stat(session.current).savedForReview ? "保存済み・解除する" : "後で復習するため保存", systemImage: store.stat(session.current).savedForReview ? "bookmark.fill" : "bookmark")
            }
            .buttonStyle(.bordered)
            .accessibilityIdentifier("saveQuestionButton")
        }
        .padding(16)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(session.isCorrect ? DojoTheme.green.opacity(0.07) : DojoTheme.red.opacity(0.07), in: RoundedRectangle(cornerRadius: 14))
    }
}

struct ResultView: View {
    @EnvironmentObject private var store: StudyStore
    var body: some View {
        NavigationStack {
            if let result = store.summary {
                ScrollView {
                    VStack(alignment: .leading, spacing: 18) {
                        VStack(spacing: 10) {
                            Image(systemName: "chart.bar.fill").font(.largeTitle).foregroundStyle(DojoTheme.blue)
                            Text("\(result.rate)%").font(.system(size: 54, weight: .bold, design: .rounded))
                            Text("\(result.correct) / \(result.total) 問正解")
                            Text(result.timedOut ? "時間切れです。未回答は不正解として集計しました。" : "この結果は本試験の合否を保証しません。")
                                .font(.footnote).foregroundStyle(.secondary).multilineTextAlignment(.center)
                        }
                        .frame(maxWidth: .infinity).cardStyle()
                        VStack(alignment: .leading, spacing: 12) {
                            Text("分野別").font(.headline)
                            ForEach(Array(Set(result.results.map(\.domain))).sorted(), id: \.self) { domain in
                                let rows = result.results.filter { $0.domain == domain }
                                Text("\(domain)  \(rows.filter(\.correct).count)/\(rows.count)")
                                    .font(.subheadline)
                            }
                            Divider()
                            Text("形式別").font(.headline)
                            ForEach(Array(Set(result.results.map(\.type))).sorted(), id: \.self) { type in
                                let rows = result.results.filter { $0.type == type }
                                Text("\(type)  \(rows.filter(\.correct).count)/\(rows.count)")
                                    .font(.subheadline)
                            }
                        }
                        .frame(maxWidth: .infinity, alignment: .leading).cardStyle()
                        if !result.wrongIDs.isEmpty {
                            Button("この演習の間違いを復習") { store.start("wrong", explicitIDs: result.wrongIDs) }
                                .buttonStyle(PrimaryButtonStyle())
                        }
                        if let next = ["basic15": "mid15", "mid15": "adv15", "adv15": "bridge9", "bridge9": "hard25"][result.mode] {
                            Button("次のステップへ") { store.start(next) }.buttonStyle(.borderedProminent)
                        }
                        Button("ホームへ戻る") { store.returnHome() }.buttonStyle(.bordered)
                    }
                    .padding(16)
                }
                .background(DojoTheme.background)
                .navigationTitle("演習結果")
            }
        }
    }
}

struct StudyProgressView: View {
    @EnvironmentObject private var store: StudyStore
    var body: some View {
        List {
            Section("学習状況") {
                LabeledContent("経験済み", value: "\(store.learned) / \(store.all.count)問")
                LabeledContent("総回答数", value: "\(store.history.totalAttempts)問")
                LabeledContent("正答率", value: store.history.totalAttempts == 0 ? "—" : "\(Int((Double(store.history.totalCorrect) / Double(store.history.totalAttempts) * 100).rounded()))%")
                LabeledContent("期限復習", value: "\(store.due.count)問")
                LabeledContent("保存した問題", value: "\(store.saved.count)問")
            }
            Section("49テーマの学習状況") {
                Text("経験した問題数と回答履歴をテーマごとに確認できます。正答率は演習中の記録で、合格予測ではありません。")
                    .font(.footnote).foregroundStyle(.secondary)
                NavigationLink("すべてのテーマを見る") { ObjectiveMapView() }
                    .accessibilityIdentifier("objectiveMapProgressLink")
            }
            Section("分野別") {
                ForEach(store.domains, id: \.self) { domain in
                    let progress = store.domainProgress(domain)
                    VStack(alignment: .leading, spacing: 6) {
                        Text(domain).font(.subheadline.bold())
                        ProgressView(value: Double(progress.learned), total: Double(progress.total))
                        Text("\(progress.learned)/\(progress.total)問経験 ・ 正答率\(progress.learned == 0 ? "—" : "\(progress.rate)%")")
                            .font(.caption).foregroundStyle(.secondary)
                    }.padding(.vertical, 4)
                }
            }
            Section("最近の演習") {
                ForEach(Array(store.history.sessions.prefix(10).enumerated()), id: \.offset) { _, record in
                    VStack(alignment: .leading) {
                        Text(store.title(for: record.mode)).font(.subheadline.bold())
                        Text("\(record.correct)/\(record.total)問 ・ \(record.rate)% ・ \(Date(timeIntervalSince1970: Double(record.at) / 1000).formatted(date: .abbreviated, time: .shortened))")
                            .font(.caption).foregroundStyle(.secondary)
                    }
                }
            }
        }
        .navigationTitle("進捗")
    }
}

private enum ObjectiveMapFilter: String, CaseIterable, Identifiable {
    case all = "すべて"
    case untouched = "未着手"
    case review = "要復習"
    case inProgress = "学習中"
    case completed = "一周済み"
    var id: Self { self }
}

struct ObjectiveMapView: View {
    @EnvironmentObject private var store: StudyStore
    @State private var selection: ObjectiveMapFilter = .all
    @State private var searchText = ""

    private var visible: [ObjectiveProgress] {
        store.objectiveProgress.filter { objective in
            let matchesSearch = searchText.isEmpty || objective.title.localizedCaseInsensitiveContains(searchText) || objective.id.localizedCaseInsensitiveContains(searchText)
            let matchesFilter: Bool
            switch selection {
            case .all: matchesFilter = true
            case .untouched: matchesFilter = objective.learned == 0
            case .review: matchesFilter = objective.needsReview
            case .inProgress: matchesFilter = objective.learned > 0 && objective.learned < objective.total && !objective.needsReview
            case .completed: matchesFilter = objective.learned == objective.total && !objective.needsReview
            }
            return matchesSearch && matchesFilter
        }
    }

    var body: some View {
        List {
            Section {
                Text("DP-700の学習範囲を参照した49テーマ。経験数と回答履歴を確認し、任意のテーマから演習できます。段階演習とコード・並べ替え問題は別枠です。")
                    .font(.footnote).foregroundStyle(.secondary)
                Picker("表示", selection: $selection) {
                    ForEach(ObjectiveMapFilter.allCases) { filter in
                        Text(filter.rawValue).tag(filter)
                    }
                }
                .accessibilityIdentifier("objectiveFilter")
                LabeledContent("表示中", value: "\(visible.count) / \(store.objectiveProgress.count)テーマ")
            }
            ForEach(store.domains, id: \.self) { domain in
                let rows = visible.filter { $0.domain == domain }
                if !rows.isEmpty {
                    Section(domain) {
                        ForEach(rows) { objective in
                            Button { store.start("objective", filter: objective.id) } label: {
                                HStack(alignment: .center, spacing: 12) {
                                    VStack(alignment: .leading, spacing: 5) {
                                        Text("\(objective.id)  \(objective.title)")
                                            .font(.subheadline.bold())
                                            .foregroundStyle(DojoTheme.ink)
                                        Text(detail(for: objective))
                                            .font(.caption).foregroundStyle(Color(uiColor: .secondaryLabel))
                                    }
                                    Spacer(minLength: 4)
                                    Image(systemName: "chevron.right").font(.caption.bold()).foregroundStyle(DojoTheme.blue)
                                }
                                .padding(.vertical, 4)
                            }
                            .accessibilityIdentifier("objective-\(objective.id)")
                        }
                    }
                }
            }
            if visible.isEmpty {
                ContentUnavailableView.search(text: searchText)
            }
        }
        .searchable(text: $searchText, prompt: "テーマ名・IDを検索")
        .navigationTitle("49テーマ")
    }

    private func detail(for objective: ObjectiveProgress) -> String {
        let status = objective.learned == 0 ? "未着手" : objective.needsReview ? "要復習" : objective.learned == objective.total ? "一周済み" : "学習中"
        let accuracy = objective.attempts == 0 ? "" : " ・ 正答率\(objective.rate)%"
        return "\(status) ・ \(objective.learned)/\(objective.total)問経験\(accuracy)"
    }
}

struct SettingsView: View {
    @EnvironmentObject private var store: StudyStore
    @State private var exportURL: URL?
    @State private var importing = false
    @State private var pendingImport: URL?
    @State private var confirmImport = false
    @State private var confirmReset = false
    @State private var confirmRestore = false
    @State private var message: String?

    var body: some View {
        List {
            Section("学習履歴") {
                Button("学習履歴を保存") {
                    do { exportURL = try store.exportURL() }
                    catch { message = "保存用ファイルを作成できませんでした。" }
                }
                if let exportURL { ShareLink("JSONファイルを共有", item: exportURL) }
                Button("学習履歴を読み込む") { importing = true }
                if store.hasBackup { Button("直前の履歴を復元") { confirmRestore = true } }
                Button("履歴リセット", role: .destructive) { confirmReset = true }
            }
            Section("Web版から引き継ぐ") {
                Text("旧iPhone版の端末内履歴は初回起動時に自動でコピーします。Web版の履歴は、Web版を閉じる前に「学習履歴を保存」からJSONを書き出し、ここで読み込んでください。読み込み前のアプリ履歴と試験日は自動でバックアップします。")
                    .font(.footnote)
                Link("Web版を開く", destination: URL(string: "https://minetoshi.github.io/dp700/")!)
            }
            Section("アプリについて") {
                Text("独自演習\(store.all.count)問を端末に収録。広告・アカウント・アプリ内課金はありません。Microsoft公式アプリではありません。")
                    .font(.footnote)
                NavigationLink("サポート") { SupportView() }
                NavigationLink("プライバシー") { PrivacyView() }
            }
        }
        .navigationTitle("設定")
        .fileImporter(isPresented: $importing, allowedContentTypes: [.json]) { result in
            switch result {
            case .success(let url): pendingImport = url; confirmImport = true
            case .failure: message = "ファイルを選択できませんでした。"
            }
        }
        .alert("履歴を読み込みますか？", isPresented: $confirmImport) {
            Button("読み込む") {
                guard let pendingImport else { return }
                do { try store.importHistory(from: pendingImport); message = "履歴と試験日を読み込みました。" }
                catch { message = "履歴JSONを読み込めませんでした。" }
                self.pendingImport = nil
            }
            Button("キャンセル", role: .cancel) { pendingImport = nil }
        } message: { Text("現在の履歴と試験日をバックアップしてから置き換えます。") }
        .alert("直前の履歴に戻しますか？", isPresented: $confirmRestore) {
            Button("復元") { do { try store.restoreBackup() } catch { message = "復元できませんでした。" } }
            Button("キャンセル", role: .cancel) {}
        }
        .alert("履歴を削除しますか？", isPresented: $confirmReset) {
            Button("削除", role: .destructive) { store.reset() }
            Button("キャンセル", role: .cancel) {}
        } message: { Text("端末内の履歴、試験日、復元用バックアップを削除します。書き出したJSONは削除されません。") }
        .alert("お知らせ", isPresented: Binding(get: { message != nil }, set: { if !$0 { message = nil } })) {
            Button("閉じる") { message = nil }
        } message: { Text(message ?? "") }
    }
}

struct SupportView: View {
    var body: some View {
        List {
            Section("お問い合わせ") {
                Text("問題内容の指摘には、演習画面の問題IDを添えてください。")
                Link("fitmo.app@gmail.com", destination: URL(string: "mailto:fitmo.app@gmail.com")!)
            }
            Section("履歴") {
                Text("履歴は端末内に保存します。Web版からはJSONファイルを読み込めます。アプリを削除する前に履歴を書き出してください。")
            }
            Section("オフライン") {
                Text("問題と解説は通信なしで利用できます。Microsoft Learnなどの外部資料には通信が必要です。")
            }
        }.navigationTitle("サポート")
    }
}

struct PrivacyView: View {
    var body: some View {
        List {
            Section("端末内のデータ") {
                Text("回答履歴、復習予定、任意の試験日は端末内に保存します。運営者のサーバーには送信しません。JSONファイルの共有先は利用者が選択します。")
            }
            Section("外部リンクと決済") {
                Text("Microsoft Learnを開いた場合は、リンク先のプライバシーポリシーが適用されます。アプリの購入と決済はAppleが処理します。")
            }
            Section("分析・広告") {
                Text("広告、分析SDK、アカウント、通知権限はありません。")
            }
        }.navigationTitle("プライバシー")
    }
}

struct PrimaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.headline)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 16)
            .foregroundStyle(.white)
            .background(DojoTheme.blue.opacity(configuration.isPressed ? 0.7 : 1), in: RoundedRectangle(cornerRadius: 14))
    }
}

private struct CardStyle: ViewModifier {
    func body(content: Content) -> some View {
        content.padding(18).background(.white, in: RoundedRectangle(cornerRadius: 18))
            .overlay(RoundedRectangle(cornerRadius: 18).stroke(Color(.separator).opacity(0.5)))
    }
}
private extension View { func cardStyle() -> some View { modifier(CardStyle()) } }
