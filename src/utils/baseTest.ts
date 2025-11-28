import { test as basTest, expect } from "@playwright/test";
import { PageFixtures } from "../fixtures/pageFixtures";

type Fixtures = {
  pages: PageFixtures;
};

export const test = basTest.extend<Fixtures>({
  pages: async ({ page }, use) => {
    await use(new PageFixtures(page));
  },
});

export {expect};
