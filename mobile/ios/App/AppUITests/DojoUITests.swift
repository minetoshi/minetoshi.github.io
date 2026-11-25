import XCTest

final class DojoUITests: XCTestCase {
    func testNativeQuizShowsFeedbackOnlyAfterAnswer() {
        let app = XCUIApplication()
        app.launch()

        let start = app.buttons["dailyStartButton"]
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
    }
}
