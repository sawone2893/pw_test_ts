import { Page } from "playwright";
import { commonLocators } from "../locators/locators";
import { BasePage } from "../base/basePage";
export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goToHomePage() {
    await this.navigateTo("/");
  }
  async enterCredentials(userId: string, password: string) {
    await this.typeText(commonLocators.textBox("UserID"), userId);
    await this.typeText(commonLocators.textBox("Password"), password);
    await this.clickElement(
      commonLocators.inputWithAttribute("value", "LOGIN")
    );
  }
}
