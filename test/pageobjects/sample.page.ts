import BasePage from "./base.page.js";

class SamplePage extends BasePage {

  async login(mobileNumber: string) {
    await this.waitForAppToLoad();
    await this.click('skipButton');
    await this.click('letsStartButton');
    await this.wait(2000);
    await this.click('mobileNumberInput');
    await this.type('mobileNumberInput', mobileNumber);
    await this.click('continueButton');
    await this.wait(3000);
  }

}

export default new SamplePage();