import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  public readonly industriesPageLink = this.locator(".desktop-nav").getByRole(
    "link",
    { name: "Industries" },
  );

  public async acceptCookies() {
    await this.page.context().addCookies([
      {
        name: "cookie_consent_accepted",
        value: "true",
        domain: "blankfactor.com",
        path: "/",
      },
    ]);
   // await this.page.reload();
  }

  public async navigateToIndustriesPage() {
    await this.industriesPageLink.click();

  }
}
