import BasePage from "./base.page";
import { getLocators } from "../../locs/index.js";

class SignInPage extends BasePage {

  private readonly loc = getLocators();

  // Method to skip intro screens and navigate to sign-in page
  async skipTo() {
    await this.waitForAppToLoad();
    const loc = await this.loc;
    await this.click(loc.skipButton);
    await this.click(loc.letsStartButton);
  }

  // New method for signing in with email
  async signInWithEmail(email: string) {
    const loc = await this.loc;
    await this.click(loc.btnEmailSignIn);
    await this.click(loc.inputEmail);
    await this.type(loc.inputEmail, email);
    await this.click(loc.btnContinue);
    await this.wait(3000);
  }

  // New method for signing in with mobile number
  async signInWithMobile(mobileNumber: string){
    const loc = await this.loc;
    await this.click(loc.btnMobileSignIn);
    await this.click(loc.mobileNumberPlaceholder);
    await this.type(loc.mobileNumberPlaceholder, mobileNumber);
    await this.click(loc.btnContinue);
    await this.wait(3000);
  }

  // Validate that the email input field is empty
  async isEmailInputEmpty() {
    const loc = await this.loc;
    const element = await $(loc.inputEmail);
    const value = await element.getValue();
    return !value;
  }

  // Validate that the mobile number input field is empty
  async isMobileInputEmpty() {
    const loc = await this.loc;
    const element = await $(loc.mobileNumberPlaceholder);
    const value = await element.getValue();
    return !value;
  }

}

export default new SignInPage();