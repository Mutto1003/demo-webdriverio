import { $ } from "@wdio/globals";
import { getLocators, LocatorKey } from "../../locs/index.js";
import { getStrings } from "../../i18n/index.js";

class ForgotPasswordPage {
  private async el(key: LocatorKey) {
    const locators = await getLocators();
    return $(locators[key]);
  }
}

export default new ForgotPasswordPage();
