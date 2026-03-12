import BasePage from "./base.page";

class ForgotPasswordPage extends BasePage {

  async resetPassword(email: string) {
    await this.waitForAppToLoad();
    await this.click('forgotPasswordButton');
    await this.wait(2000);
    await this.click('editEmailInput');
    await this.type('editEmailInput', email);
    await this.click('continueButton');
    await this.wait(3000);
  }

}

export default new ForgotPasswordPage();