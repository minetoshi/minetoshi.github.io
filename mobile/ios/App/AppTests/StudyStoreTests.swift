import XCTest
@testable import App

@MainActor final class StudyStoreTests: XCTestCase {
    func testMultiChoiceScoringAndHistoryPersistence() {
        let store = StudyStore()
        store.reset()
        let question = try! XCTUnwrap(store.all.first { $0.type == "multi" })
        store.start("test", explicitIDs: [question.id])
        XCTAssertEqual(store.session?.questions.count, 1)
        for answer in question.answers ?? [] { store.toggleChoice(answer) }
        store.answer()
        XCTAssertTrue(store.session?.isCorrect == true)
        store.next()
        XCTAssertEqual(store.summary?.rate, 100)
        XCTAssertEqual(store.history.items[question.id]?.correct, 1)
        XCTAssertEqual(StudyStore().history.items[question.id]?.attempts, 1)
    }

    func testWrongAnswerAndOrderQuestion() {
        let store = StudyStore()
        store.reset()
        let single = try! XCTUnwrap(store.all.first { $0.type == "single" })
        store.start("test", explicitIDs: [single.id])
        let wrong = try! XCTUnwrap(single.choices?.indices.first { !(single.answers ?? []).contains($0) })
        store.toggleChoice(wrong)
        store.answer()
        XCTAssertFalse(store.session?.isCorrect == true)
        store.next()
        XCTAssertEqual(store.summary?.rate, 0)
        XCTAssertEqual(store.wrong.map(\.id), [single.id])

        let order = try! XCTUnwrap(store.all.first { $0.type == "order" })
        store.start("test", explicitIDs: [order.id])
        for target in order.options.indices {
            while let position = store.session?.order.firstIndex(of: target), position > target {
                store.moveOrder(position, by: -1)
            }
        }
        XCTAssertEqual(store.session?.order, Array(order.options.indices))
        store.answer()
        XCTAssertTrue(store.session?.isCorrect == true)
    }

    func testExamPlanAndHistoryImportRestore() throws {
        let store = StudyStore()
        store.reset()
        let date = Calendar.current.date(byAdding: .day, value: 9, to: Date())!
        store.setExamDate(date)
        XCTAssertEqual(store.dailyUnseenCount, 30)
        store.start("focus10")
        XCTAssertEqual(store.session?.questions.count, 30)
        store.quit()

        let file = FileManager.default.temporaryDirectory.appendingPathComponent("dp700-test-import.json")
        let json = #"{"items":{"WEB-ONLY":{"attempts":1,"correct":1}},"totalAttempts":1,"totalCorrect":1,"sessions":[]}"#
        try Data(json.utf8).write(to: file, options: .atomic)
        try store.importHistory(from: file)
        XCTAssertNil(store.examDate)
        XCTAssertEqual(store.history.items["WEB-ONLY"]?.attempts, 1)
        XCTAssertTrue(store.hasBackup)
        try store.restoreBackup()
        XCTAssertNotNil(store.examDate)
        XCTAssertNil(store.history.items["WEB-ONLY"])
        XCTAssertFalse(store.hasBackup)
        store.reset()
        XCTAssertNil(store.examDate)
        XCTAssertFalse(store.hasBackup)
    }

    func testMockAndCodeModes() {
        let store = StudyStore()
        XCTAssertTrue(store.focusObjectives.allSatisfy { store.bank.objectiveLabels[$0.id] != nil })
        store.start("mock45")
        XCTAssertEqual(store.session?.questions.count, 45)
        XCTAssertNotNil(store.session?.deadline)
        store.quit()
        store.start("code")
        XCTAssertTrue(store.session?.questions.allSatisfy { $0.type == "code" } == true)
    }

    func testSavedReviewPersistsAndSurvivesHistoryRestore() throws {
        let store = StudyStore()
        store.reset()
        let question = try XCTUnwrap(store.all.first { $0.bank == "basic" })
        store.start("test", explicitIDs: [question.id])
        store.toggleSaved(question)
        XCTAssertTrue(store.saved.isEmpty, "回答前には保存操作を受け付けない")
        store.toggleChoice(0)
        store.answer()
        store.toggleSaved(question)
        XCTAssertEqual(store.saved.map(\.id), [question.id])
        XCTAssertEqual(StudyStore().saved.map(\.id), [question.id])
        store.start("saved")
        XCTAssertEqual(store.session?.questions.map(\.id), [question.id])
        store.quit()

        let file = FileManager.default.temporaryDirectory.appendingPathComponent("dp700-test-old-history.json")
        let oldJSON = #"{"items":{},"totalAttempts":0,"totalCorrect":0,"sessions":[]}"#
        try Data(oldJSON.utf8).write(to: file, options: .atomic)
        try store.importHistory(from: file)
        XCTAssertTrue(store.saved.isEmpty)
        try store.restoreBackup()
        XCTAssertEqual(store.saved.map(\.id), [question.id])
        store.reset()
        XCTAssertTrue(store.saved.isEmpty)
    }

    func testAll49ObjectivesHaveMappedQuestions() {
        let store = StudyStore()
        let objectives = store.objectiveProgress
        XCTAssertEqual(objectives.count, 49)
        XCTAssertEqual(Set(objectives.map(\.id)), Set(store.bank.objectiveLabels.keys))
        XCTAssertTrue(objectives.allSatisfy { $0.total > 0 && store.domains.contains($0.domain) })
        XCTAssertEqual(objectives.reduce(0) { $0 + $1.total }, 173)
    }
}
