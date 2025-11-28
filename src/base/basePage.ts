import { Page } from "playwright";
export class BasePage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url,{ waitUntil: "networkidle"});
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async findElement(selector: string) {
    return this.page.locator(selector);
  }

  async clickElement(selector: string) {
    if (
      await this.page.waitForSelector(selector, {
        state: "visible",
        timeout: 5000,
      })
    ) {
      await (await this.findElement(selector)).click();
    } else {
      throw new Error(
        `Element with selector ${selector} not found or not visible`
      );
    }
  }
  async typeText(selector: string, text: string) {
    if (
      await this.page.waitForSelector(selector, {
        state: "visible",
        timeout: 5000,
      })
    ) {
      await (await this.findElement(selector)).fill(text);
    } else {
      throw new Error(
        `Element with selector ${selector} not found or not visible`
      );
    }
  }
}
