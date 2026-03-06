import { getPlatform } from '../utils/platform.js';
import { getStrings } from '../i18n/index.js';

// Import locator factory functions
import androidLocators from './android/index.js';
import iosLocators from './ios/index.js';

// Cached locators for the session
let cache: ReturnType<typeof androidLocators> | ReturnType<typeof iosLocators> | null = null;

/**
 * Get locators for the current platform and language.
 *
 * Automatically detects iOS/Android and reads TEST_LANG to
 * build XPath/Accessibility ID selectors with the correct text.
 *
 * @example
 * const locs = await getLocators();
 * await $(locs.continueButton).click();
 * // Android EN: //android.widget.Button[@content-desc="Continue"]
 * // Android TH: //android.widget.Button[@content-desc="ดำเนินการต่อ"]
 * // iOS EN:     ~Continue
 * // iOS TH:     ~ดำเนินการต่อ
 */
export async function getLocators() {
  if (cache) return cache;

  const platform = await getPlatform();
  const strings = getStrings();

  cache = platform === 'ios'
    ? iosLocators(strings)
    : androidLocators(strings);

  console.log(`[Locators] Platform: ${platform.toUpperCase()} | Language: ${process.env['TEST_LANG'] ?? 'en'}`);

  return cache;
}

// Derive LocatorKey from the shape returned by the factory (Android as reference)
export type LocatorKey = keyof ReturnType<typeof androidLocators>;
