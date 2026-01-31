import { BasePage } from "./BasePage";

export class RetirementWealthPage extends BasePage {

  public readonly poweringInnovationRetirementServicesHeader = this.locator(
    "//h2[@class='h2 heading section-title  scroll-animation  fade ']",
  );

  public readonly aiMachineLearningFlipCard = this.locator(
    "//div[@class='flip-card-front card-front']//div[@class='card-text' and contains(.,'Machine learning')]",
  );

  public readonly aiMachineLearningFlipCardMessages = this.locator(
    "//div[contains(@class,'flip-card') and .//div[contains(@class,'card-front')]//div[contains(.,'AI &') and contains(.,'Machine learning')]]//div[@class='card-text small']",
  );

  public readonly letsGetStartedButton = this.locator(
    '//a[@title="Let\'s get started"]',
  );

  public async mouseHoverToAiMachineLearningFlipCard() {
    await this.aiMachineLearningFlipCard.hover();
  }

  public async getAiMachineLearningFlipCardMessage() {
    return await this.aiMachineLearningFlipCardMessages.innerText();
  }

  public async clickLetsGetStartedButton() {
    await this.letsGetStartedButton.click();
  }

  public async scrollToPoweringInnovationRetirementServices() {
    await this.poweringInnovationRetirementServicesHeader.scrollIntoViewIfNeeded();
  }

  public async printAiMachineLearningFlipCardMessage() {
    console.log(await this.getAiMachineLearningFlipCardMessage());
  }
}
