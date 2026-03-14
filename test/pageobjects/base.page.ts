import { $ } from "@wdio/globals";
import { getStrings, type StringKey } from "../../i18n/index.js";

export default class BasePage {

  el(selector: string) {
    return $(selector);
  }

  async click(selector: string) {
    const element = this.el(selector);
    console.log(`[BasePage] Waiting for element: ${selector}`);
    await element.waitForDisplayed({ timeout: 30000 });
    await element.click();
  }

  async type(selector: string, value: string) {
    const element = this.el(selector);
    console.log(`[BasePage] Typing "${value}" into: ${selector}`);
    await element.waitForDisplayed({ timeout: 30000 });
    await element.setValue(value);
  }

  async isNullOrEmpty(selector: string): Promise<boolean> {
    const element = this.el(selector);
    console.log(`[BasePage] Checking if element is null or empty: ${selector}`);
    await element.waitForDisplayed({ timeout: 30000 });
    const emailValue = await element.getText();
    return !emailValue || emailValue.trim().length === 0;
  }

  getText(key: StringKey): string {
    const strings = getStrings();
    return strings[key];
  }

  async wait(ms: number) {
    await driver.pause(ms);
  }

  async waitForAppToLoad() {
    console.log('[BasePage] Waiting for app to load...');
    await this.wait(5000);
  }
}