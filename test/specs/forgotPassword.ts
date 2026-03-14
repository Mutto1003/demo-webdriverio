import ForgotPasswordPage from "../pageobjects/forgotPassword.page.js"
import { getLocators } from "../../locs/index.js"; 
import { getLang } from '../../i18n/index.js';

describe('Forgot Password', () => {
  before(async () => {
    const lang = getLang();
    console.log(`[Test] Running with language: ${lang.toUpperCase()}`);
    await ForgotPasswordPage.skipTo();
    await ForgotPasswordPage.loginWithEmail('testwell63.dhv@outlook.com');
  })

  it('TC_WA2572_WRVA_001_Verify Email button is disabled when email field is empty', async () => {
     console.log(`[Test] 001`)
     await ForgotPasswordPage.forgotPassword();
     const loc = await getLocators();
     const isEmailEmpty = await ForgotPasswordPage.isNullOrEmpty(loc.inputYourEmail);
     console.log('[Test] isEmailEmpty',isEmailEmpty);
     await ForgotPasswordPage.wait(2000);
    
  })
})