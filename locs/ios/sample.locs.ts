import type { I18nStrings } from '../../i18n/index.js';

/**
 * iOS locators for the sample/login flow.
 * Text in Accessibility ID and XPath is injected from i18n strings
 * so selectors automatically match the app's current language.
 */
export default function sampleLocs(s: I18nStrings) {
  return {
    skipButton: `~${s.skipButton}`,

    letsStartButton: `~${s.letsStartButton}`,

    // TextField doesn't depend on language
    mobileNumberInput: `//XCUIElementTypeTextField`,

    continueButton: `~${s.continueButton}`,
  } as const;
}
