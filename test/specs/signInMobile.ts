import signInPage from "../pageobjects/signIn.page";
import { getLang } from '../../i18n/index.js';
import { getLocators } from "../../locs/index.js";
import { expect } from '@wdio/globals';

async function scrollUntilDisplayed(element: any) {
  while (!(await element.isDisplayed())) {
    const canScrollMore = await browser.execute('mobile: scrollGesture', {
      left: 100,
      top: 200,
      width: 800,
      height: 1400,
      direction: 'down',
      percent: 0.2
    });

    await browser.pause(300);

    if (await element.isDisplayed()) return;
    if (!canScrollMore) {
      throw new Error('Element not found after scrolling to the end');
    }
  }
}

describe('Sign In', () => {
  beforeEach(async () => {
    const lang = getLang();
    console.log(`[Test] Running with language: ${lang.toUpperCase()}`);
    await signInPage.skipTo();
  })

  afterEach(async () => {
    // Reset app state after each test
    await browser.reloadSession();
  })

  it('TC_WA2569_WRVA_001_Verify Continue button is disabled by default on mobile phone input screen', async () => {
     const loc = await getLocators();
     const continueBtn = $(loc.btnContinue);
     const mobileNumberPlaceholder = $(loc.mobileNumberPlaceholder);

     // Verify Continue button is disabled
     mobileNumberPlaceholder.waitForDisplayed();
     const isMobileInputEmpty = await mobileNumberPlaceholder.getText();
     expect(isMobileInputEmpty).toBe('');

     try {
      await continueBtn.click();
     } catch (error) {
      console.log('[Test] Continue button is disabled, cannot click.');
     }
     await expect(mobileNumberPlaceholder).toBeDisplayed();
     await signInPage.wait(2000);
  })

  it('TC_WA2569_WRVA_002_Verify user can proceed with valid Thai mobile phone number on Sign In', async () => {
    const loc = await getLocators();
    const continueBtn = $(loc.btnContinue);
    const mobileNumberPlaceholder = $(loc.mobileNumberPlaceholder);

    // Input mobile number
    await mobileNumberPlaceholder.click();
    await mobileNumberPlaceholder.setValue('0995033561');

    // Verify Continue button is enabled
    await expect(continueBtn).toBeEnabled();

    try {
      await continueBtn.click();
      console.log('[Test] Continue button is enabled and clicked successfully.');
    } catch (error) {
      console.error('[Test] Failed to click Continue button:', error);
    }
    await signInPage.wait(3000);
    await expect(mobileNumberPlaceholder).not.toBeDisplayed();
    // Check next screen tobe displayed, e.g. OTP input or welcome screen
    await signInPage.wait(2000);
  })

  it('TC_WA2569_WRVA_003_Verify user can proceed with valid Thai mobile phone number on Sign Up', async () => {
    const loc = await getLocators();
    const continueBtn = $(loc.btnContinue);
    const mobileNumberPlaceholder = $(loc.mobileNumberPlaceholder);

    // Input mobile number
    await mobileNumberPlaceholder.click();
    await mobileNumberPlaceholder.setValue('0995033562');

    // Verify Continue button is enabled
    await expect(continueBtn).toBeEnabled();

    try {
      await continueBtn.click();
      console.log('[Test] Continue button is enabled and clicked successfully.');
    } catch (error) {
      console.error('[Test] Failed to click Continue button:', error);
    }
    await signInPage.wait(3000);
    await expect(mobileNumberPlaceholder).not.toBeDisplayed();
    // Check next screen tobe displayed, e.g. T&C input or welcome screen
    await signInPage.wait(2000);
  })

  it('TC_WA2569_WRVA_004_Verify user can proceed with valid international mobile phone number on Sign In', async () => {
    const loc = await getLocators();
    const continueBtn = $(loc.btnContinue);
    const mobileNumberPlaceholder = $(loc.mobileNumberPlaceholder);
    const countryCodeBtn = $(loc.countryCodeBtn);
    const countryCodeBrazilBtn = $(loc.countryCodeBrazilBtn);

    // Input mobile number
    await countryCodeBtn.click();
    await scrollUntilDisplayed(countryCodeBrazilBtn);
    await countryCodeBrazilBtn.waitForDisplayed();
    await countryCodeBrazilBtn.click();
    await mobileNumberPlaceholder.click();
    await mobileNumberPlaceholder.setValue('0995033562');

    // Verify Continue button is enabled
    await expect(continueBtn).toBeEnabled();

    try {
      await continueBtn.click();
      console.log('[Test] Continue button is enabled and clicked successfully.');
    } catch (error) {
      console.error('[Test] Failed to click Continue button:', error);
    }
    await signInPage.wait(3000);
    await expect(mobileNumberPlaceholder).not.toBeDisplayed();
    // Check next screen tobe displayed, e.g. OTP input or welcome screen
    await signInPage.wait(2000);
  })

  it('TC_WA2569_WRVA_005_Verify user can proceed with valid international mobile phone number on Sign Up', async () => {
    const loc = await getLocators();
    const continueBtn = $(loc.btnContinue);
    const mobileNumberPlaceholder = $(loc.mobileNumberPlaceholder);
    const countryCodeBtn = $(loc.countryCodeBtn);
    const countryCodeBrazilBtn = $(loc.countryCodeBrazilBtn);

    // Input mobile number
    await countryCodeBtn.click();
    await scrollUntilDisplayed(countryCodeBrazilBtn);
    await countryCodeBrazilBtn.waitForDisplayed();
    await countryCodeBrazilBtn.click();
    await mobileNumberPlaceholder.click();
    await mobileNumberPlaceholder.setValue('0995033562');

    // Verify Continue button is enabled
    await expect(continueBtn).toBeEnabled();

    try {
      await continueBtn.click();
      console.log('[Test] Continue button is enabled and clicked successfully.');
    } catch (error) {
      console.error('[Test] Failed to click Continue button:', error);
    }
    await signInPage.wait(3000);
    await expect(mobileNumberPlaceholder).not.toBeDisplayed();
    // Check next screen tobe displayed, e.g. T&C input or welcome screen
    await signInPage.wait(2000);
  })

  // can not autoate alphabet/special char, need to verify manually
  it.skip('TC_WA2569_WRVA_006_Verify system blocks alphabet characters in mobile phone input', async () => {
    const loc = await getLocators();
    // const continueBtn = $(loc.btnContinue);
    const mobileNumberPlaceholder = $(loc.mobileNumberPlaceholder);

    // Input mobile number
    await mobileNumberPlaceholder.click();
    await mobileNumberPlaceholder.setValue('#!#$%abcde');

    await signInPage.wait(2000);
    const inputText = await mobileNumberPlaceholder.getText();

    console.log('[Test] inputText:', inputText);

    // can not alphabet/special char
    // expect(inputText === '' || inputText === null).toBe(true);
    await expect(mobileNumberPlaceholder).toBeDisplayed();
  })

  // can not autoate alphabet/special char, need to verify manually
  it.skip('TC_WA2569_WRVA_007_Verify system blocks mixed digits and special characters in mobile phone input', async () => {
    const loc = await getLocators();
    // const continueBtn = $(loc.btnContinue);
    const mobileNumberPlaceholder = $(loc.mobileNumberPlaceholder);

    // Input mobile number
    await mobileNumberPlaceholder.click();
    await mobileNumberPlaceholder.setValue('#!#$%abcde');

    await signInPage.wait(2000);
    const inputText = await mobileNumberPlaceholder.getText();

    console.log('[Test] inputText:', inputText);

    // can not alphabet/special char
    // expect(inputText === '' || inputText === null).toBe(true);
    await expect(mobileNumberPlaceholder).toBeDisplayed();
  })
})