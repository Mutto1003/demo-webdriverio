// import ForgotPasswordPage from "../pageobjects/forgotPassword.page.js"
import { getLang } from '../../i18n/index.js';

describe('Forgot Password', () => {
  before(async () => {
    const lang = getLang();
    console.log(`[Test] Running with language: ${lang.toUpperCase()}`);
  })

  it('TC_WA2572_WRVA_001_Verify Email button is disabled when email field is empty', async () => {
    await 
  })
})