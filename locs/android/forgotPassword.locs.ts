import type { I18nStrings } from '../../i18n/index.js';

export default function forgotPasswordLocs(s: I18nStrings) {
  return {
    btnForgotPassword: `~${s.btnForgotPassword}`,
    btnSignInToAccount: `~${s.btnSignInToAccount}`,
    inputYourEmail: `//android.widget.EditText[@text="testwell63.dhv@outlook.com"]`,
  } as const;
}