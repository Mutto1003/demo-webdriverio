import en from './en.js';
import th from './th.js';

/**
 * Shape that all language files must satisfy.
 * Declared here as the central export point for i18n types.
 */
export type I18nStrings = {
  // Onboarding
  skipButton: string;
  letsStartButton: string;
  continueButton: string;

  // Login / OTP screen
  mobileNumberPlaceholder: string;
  otpTitle: string;
  resendOtp: string;

  // Home / Dashboard
  welcomeMessage: string;
  logoutButton: string;

  // Forgot Password
  forgotPasswordButton: string;

  // Errors
  invalidNumber: string;
  otpExpired: string;
};

export type StringKey = keyof I18nStrings;

/**
 * Supported languages
 */
export type Lang = 'en' | 'th';

const SUPPORTED_LANGS: Lang[] = ['en', 'th'];
const langMap: Record<Lang, I18nStrings> = { en, th };

/**
 * Get the current language from TEST_LANG env variable.
 * Defaults to 'en' if not set or unsupported value given.
 */
export function getLang(): Lang {
  const raw = process.env['TEST_LANG']?.toLowerCase();
  if (raw && SUPPORTED_LANGS.includes(raw as Lang)) {
    return raw as Lang;
  }
  return 'en';
}

/**
 * Get the strings for the current language.
 *
 * @example
 * const s = getStrings();
 * console.log(s.continueButton); // 'Continue' or 'ดำเนินการต่อ'
 */
export function getStrings(): I18nStrings {
  return langMap[getLang()];
}
