export default {
    // iOS uses XCUITest - different element types
    skipButton: `~Skip`, // Accessibility ID works on iOS
    // Alternative: `-ios predicate string:label == "Skip"`
    // Alternative: `//XCUIElementTypeButton[@name="Skip"]`

    letsStartButton: `~Let's start`,
    // Alternative: `//XCUIElementTypeButton[@name="Let's start"]`

    mobileNumberInput: `//XCUIElementTypeTextField`,
    // Alternative: `-ios class chain:**/XCUIElementTypeTextField`

    continueButton: `~Continue`
    // Alternative: `//XCUIElementTypeButton[@name="Continue"]`
}

