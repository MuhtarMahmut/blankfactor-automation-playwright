import { test as base_test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

//Extends the base test with custom UI setup.
const test = base_test.extend({page: async ({ page }, use: Function) => {

    switch (process.env.ENVIRONMENT as string) { // navigates to url
      case "TEST":
        await page.goto(`${process.env.TEST}`);
        break;

      case "STG":
        await page.goto(`${process.env.STG}`);
        break;

      case "DEV":
        await page.goto(`${process.env.DEV}`);
        break;

      case "UAT":
        await page.goto(`${process.env.UAT}`);
        break;

      default:
        await page.goto(`${process.env.TEST}`);
    }

    await page.waitForLoadState("networkidle");

    await new HomePage(page).acceptCookies(); //accepts cookies.

    await use(page);
  },
});

export { expect, test };
