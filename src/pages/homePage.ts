import { Page } from "@playwright/test";
import { commonLocators } from "../locators/locators";
export class HomePage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goToHomePage() {
    await this.page.goto("/");
  }
  async enterCredentials(userId: string, password: string) {
    await this.page.locator(commonLocators.textBox("UserID")).fill(userId);
    await this.page.locator(commonLocators.textBox("Password")).fill(password);
    await this.page
      .locator(commonLocators.inputWithAttribute("value", "LOGIN"))
      .click();
  }
}
