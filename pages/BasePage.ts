import { FrameLocator, Locator, Page } from "@playwright/test";

export class BasePage {

  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  protected frameLocator(selector: string): FrameLocator {
    return this.page.frameLocator(selector);
  }

  public async scrollToBottom(){
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  public async scrollToTop(){
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }

  public async getUrl(){
    return this.page.url();
  }

  public async getTitle(){
    return await this.page.title();
  }

}