export default {
    // Try multiple selectors - will use first one found
    // skipButton: `~Skip`, // Accessibility ID (simpler and faster)
    skipButton: `//android.view.View[@content-desc="Skip"]`,
    // Alternative: `//*[@content-desc="Skip"]`

    // letsStartButton: `~Let's start`,
    letsStartButton: `//android.widget.Button[@content-desc="Let's start"]`,

    mobileNumberInput: `//android.widget.EditText`,

    // continueButton: `~Continue`
    continueButton: `//android.widget.Button[@content-desc="Continue"]`
}

