import { Page } from "@playwright/test";
import { HomePage } from "../../src/pages/homePage";

export class PageFixtures {
  readonly page: Page;
  readonly homePage: HomePage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
  }
}
