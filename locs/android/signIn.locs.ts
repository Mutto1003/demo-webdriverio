import type { I18nStrings } from '../../i18n/index.js';

export default function signInLocs(s: I18nStrings) {
  return {
    // For mobile number sign in
    btnMobileSignIn: `~${s.btnMobileSignIn}`,
    mobileNumberPlaceholder: `//android.widget.EditText`,
    countryCodeBtn: `//android.view.View[@content-desc="+66"]`,
    countryCodeBrazilBtn: `//android.view.View[@content-desc="🇧🇷Brazil+55"]`,

    // For email sign in
    btnEmailSignIn: `~${s.btnEmailSignIn}`,
    emailPlaceholder: `~${s.emailPlaceholder}`,
    inputEmail: `//android.widget.EditText`,

    btnContinue: `//android.widget.Button[@content-desc="Continue"]`,
  } as const;
}