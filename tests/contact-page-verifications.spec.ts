import { test } from "../utilities/UITestUtilities";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { IndustriesPage } from "../pages/IndustriesPage";
import { RetirementWealthPage } from "../pages/RetirementWealthPage";

test("Verify contact page title and url", async ({ page }) => {

  let homePage = new HomePage(page);
  await new HomePage(page).navigateToIndustriesPage();

  let industriesPage = new IndustriesPage(page);
  await industriesPage.clickRetirementWealthLearnMoreButton();

  let retirementWealthPage = new RetirementWealthPage(page);
  await retirementWealthPage.mouseHoverToAiMachineLearningFlipCard();

  let flipCardMessage = await retirementWealthPage.getAiMachineLearningFlipCardMessage();
  console.log(`AI & Machine learning flip card message: ${flipCardMessage}`);

  await retirementWealthPage.scrollToBottom();

  await retirementWealthPage.clickLetsGetStartedButton();

  let contactPage = new ContactPage(page);
  await contactPage.verifyContactPageUrl();
  await contactPage.verifyContactPageTitle();

  console.log(`Contact page URL: ${await contactPage.getUrl()}`);
  console.log(`Contact page Title: ${await contactPage.getTitle()}`);

});
