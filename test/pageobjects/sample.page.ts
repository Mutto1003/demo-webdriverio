import BasePage from "./base.page.js";
import { getLocators } from "../../locs/index.js";

class SamplePage extends BasePage {

  async login(mobileNumber: string) {
    await this.waitForAppToLoad();
    const loc = await getLocators();
    await this.click(loc.skipButton);
    await this.click(loc.letsStartButton);
    await this.wait(2000);
    await this.click(loc.mobileNumberInput);
    await this.type(loc.mobileNumberInput, mobileNumber);
    await this.click(loc.continueButton);
    await this.wait(3000);
  }

}

export default new SamplePage();