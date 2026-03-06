import type { I18nStrings } from '../../i18n/index.js';

/**
 * Android locators for the sample/login flow.
 * Text in XPath is injected from i18n strings so selectors
 * automatically match the app's current language.
 */
export default function sampleLocs(s: I18nStrings) {
  return {
    skipButton: `//android.view.View[@content-desc="${s.skipButton}"]`,

    letsStartButton: `//android.widget.Button[@content-desc="${s.letsStartButton}"]`,

    // EditText doesn't depend on language
    mobileNumberInput: `//android.widget.EditText`,

    continueButton: `//android.widget.Button[@content-desc="${s.continueButton}"]`,
  } as const;
}
