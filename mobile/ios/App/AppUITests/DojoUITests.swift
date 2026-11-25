import XCTest

final class DojoUITests: XCTestCase {
    func testNativeQuizShowsFeedbackOnlyAfterAnswer() {
        let app = XCUIApplication()
        app.launch()

        app.tabBars.buttons["演習"].tap()
        let start = app.buttons["mode-basic15"]
        XCTAssertTrue(start.waitForExistence(timeout: 10))
        start.tap()

        let feedback = app.descendants(matching: .any)["answerFeedback"]
        XCTAssertFalse(feedback.exists)
        let choice = app.buttons["choice-0"]
        XCTAssertTrue(choice.waitForExistence(timeout: 5))
        choice.tap()
        let answer = app.buttons["answerButton"]
        XCTAssertTrue(answer.isEnabled)
        answer.tap()

        XCTAssertTrue(feedback.waitForExistence(timeout: 5))
        XCTAssertTrue(app.buttons["nextButton"].exists)
        let save = app.buttons["saveQuestionButton"]
        XCTAssertTrue(save.exists)
        save.tap()
        XCTAssertTrue(app.staticTexts["保存済み・解除する"].exists)

        app.buttons["終了"].tap()
        app.buttons["演習を終了"].tap()
        for _ in 0..<4 where !app.buttons["mode-saved"].exists { app.swipeUp() }
        XCTAssertTrue(app.buttons["mode-saved"].waitForExistence(timeout: 5))
        app.buttons["mode-saved"].tap()
        XCTAssertTrue(app.buttons["choice-0"].waitForExistence(timeout: 5))
    }

    func testObjectiveMapShowsAllTopics() {
        let app = XCUIApplication()
        app.launch()
        app.tabBars.buttons["進捗"].tap()
        let link = app.buttons["objectiveMapProgressLink"]
        XCTAssertTrue(link.waitForExistence(timeout: 10))
        link.tap()
        XCTAssertTrue(app.staticTexts["表示中、49 / 49テーマ"].waitForExistence(timeout: 5))
        XCTAssertTrue(app.buttons["objective-O01"].exists)
    }
}
