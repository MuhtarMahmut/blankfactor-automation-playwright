import { expect } from "playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage {

    public async verifyContactPageUrl() {
        await expect(this.page).toHaveURL('https://blankfactor.com/contact/');
    }

    public async verifyContactPageTitle() {
        await expect(this.page).toHaveTitle('Contact | Blankfactor');
    }

}