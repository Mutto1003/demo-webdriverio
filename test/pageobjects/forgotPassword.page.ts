import BasePage from "./base.page";
import { getLocators } from "../../locs/index.js";

class ForgotPasswordPage extends BasePage {

  private readonly loc = getLocators();

  // async resetPassword(email: string) {
  //   await this.waitForAppToLoad();
  //   const loc = await this.loc;
  //   await this.click(loc.btnEmailSignIn);
  //   await this.click(loc.btnForgotPassword);
  //   await this.wait(2000);
  //   await this.click(loc.editEmailInput);
  //   await this.type(loc.editEmailInput, email);
  //   await this.click(loc.continueButton);
  //   await this.wait(3000);
  // }
  async skipTo() {
    await this.waitForAppToLoad();
    const loc = await this.loc;
    await this.click(loc.skipButton);
    await this.click(loc.letsStartButton);
  }

  async loginWithEmail(email: string) {
    const loc = await this.loc;
    await this.click(loc.btnEmailSignIn);
    await this.click(loc.inputEmail);
    await this.type(loc.inputEmail, email);
    await this.click(loc.btnContinue);
    await this.wait(3000);
  }

  async forgotPassword() {
    const loc = await this.loc;
    await this.click(loc.btnSignInToAccount);
    await this.click(loc.btnForgotPassword);
    await this.click(loc.inputYourEmail);
  }

  async isNullOrEmpty(selector: any) {
    const element = await $(selector);
    const value = await element.getValue();
    return !value;
  }

}

export default new ForgotPasswordPage();