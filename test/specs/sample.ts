import SamplePage from '../pageobjects/sample.page.js';
import { getLang } from '../../i18n/index.js';

describe('Sample', () => {
  before(async () => {
    const lang = getLang();
    console.log(`[Test] Running with language: ${lang.toUpperCase()}`);
  });

  // it.skip('Sample Test', async () => {
  //   // await browser.url('https://webdriver.io/')
  //   await $(`//android.view.View[@content-desc="Skip"]`).click();
  //   await $(`//android.widget.Button[@content-desc="Let's start"]`).click();

  //   // input mobile number
  //   await $(`//android.widget.EditText`).click();
  //   await $(`//android.widget.EditText`).setValue('0995033561');

  //   // click continue
  //   await $(`//android.widget.Button[@content-desc="Continue"]`).click();
  // }),

  it('Sample Test 2', async () => {
    await SamplePage.login('0995033560');
    await browser.pause(5000);

    // Example i18n assertion:
    // const welcomeText = SamplePage.getText('welcomeMessage');
    // await expect($('~welcome')).toHaveText(welcomeText);
  })
})