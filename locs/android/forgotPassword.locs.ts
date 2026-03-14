import type { I18nStrings } from '../../i18n/index.js';

export default function forgotPasswordLocs(s: I18nStrings) {
  return {
    btnForgotPassword: `~${s.btnForgotPassword}`,
    btnEmailSignIn: `~${s.btnEmailSignIn}`,
    emailPlaceholder: `~${s.emailPlaceholder}`,
    inputEmail: `//android.widget.EditText`,
    btnContinue: `~${s.btnContinue}`,
    inputYourEmail: `//android.widget.EditText[@text="testwell63.dhv@outlook.com"]`,
    btnSignInToAccount: `~${s.btnSignInToAccount}`,
  } as const;
}
  