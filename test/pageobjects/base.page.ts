import { $ } from "@wdio/globals";
import { getLocators, type LocatorKey } from "../../locs/index.js";
import { getStrings, type StringKey } from "../../i18n/index.js";

export default class BasePage {

  async el(key: LocatorKey) {
    const locators = await getLocators();
    return $(locators[key as keyof typeof locators]);
  }

  async click(key: LocatorKey) {
    const element = await this.el(key);
    console.log(`[BasePage] Waiting for element: ${key}`);
    await element.waitForDisplayed({ timeout: 30000 });
    await element.click();
  }

  async type(key: LocatorKey, value: string) {
    const element = await this.el(key);
    console.log(`[BasePage] Typing "${value}" into: ${key}`);
    await element.waitForDisplayed({ timeout: 30000 });
    await element.setValue(value);
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