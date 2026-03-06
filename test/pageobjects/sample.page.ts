import { $ } from "@wdio/globals";
import { getLocators, type LocatorKey } from "../../locs/index.js";

class SamplePage {
  private async el(key: LocatorKey) {
    const locators = await getLocators();
    return $(locators[key]);
  }

  async click(key: LocatorKey) {
    const locators = await getLocators();
    const element = await this.el(key);
    console.log(`[SamplePage] Waiting for element: ${key} with selector: ${locators[key]}`);
    await element.waitForDisplayed({ timeout: 30000 });
    console.log(`[SamplePage] Element found, clicking: ${key}`);
    await element.click();
  }

  async type(key: LocatorKey, value: string) {
    const locators = await getLocators();
    const element = await this.el(key);
    console.log(`[SamplePage] Waiting for input element: ${key} with selector: ${locators[key]}`);
    await element.waitForDisplayed({ timeout: 30000 });
    console.log(`[SamplePage] Typing "${value}" into: ${key}`);
    await element.setValue(value);
  }

  async waitForAppToLoad() {
    console.log('[SamplePage] Waiting for app to load...');
    await driver.pause(5000); // Give app time to initialize
  }

  async login(mobileNumber: string) {
    await this.waitForAppToLoad();
    await this.click('skipButton');
    await this.click('letsStartButton');
    await driver.pause(2000); // Wait for next screen
    await this.click('mobileNumberInput');
    await this.type('mobileNumberInput', mobileNumber);
    await this.click('continueButton');
    await driver.pause(3000); // Wait for response
  }
}

export default new SamplePage();
