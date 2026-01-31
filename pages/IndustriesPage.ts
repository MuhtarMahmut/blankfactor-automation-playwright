import { BasePage } from "./BasePage";

export class IndustriesPage extends BasePage {

    public readonly retirementWealthLearnMoreButton = 
    this.locator("//a[normalize-space(text())='Learn More' and contains(@href,'retirement-and-wealth')]");

    
    public async clickRetirementWealthLearnMoreButton(){
        await this.retirementWealthLearnMoreButton.click();
    }
    

}