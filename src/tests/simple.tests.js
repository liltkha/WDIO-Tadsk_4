const { expect } = require("@wdio/globals");
const CloudGooglePage = require('./../po/pages/cloudGoogle.page');
const cloudGooglePage = new CloudGooglePage();

describe("Google Cloud Platform Pricing Calculator tests", () => {
  beforeEach(async () => {
    await cloudGooglePage.open();
  });

  it("Check Page Title", async () => {
    const title = await browser.getTitle();
    console.log(title);
    await expect(browser).toHaveTitle("Cloud Computing Services | Google Cloud");
  });

  it("Perform search", async () => {
    //click on the search icon
    (await cloudGooglePage.searchIcon.icon).click();

    //enter 'Google Cloud Platform Pricing Calculator' into the search field
    const input = await $("#i4");
    await input.setValue("Google Cloud Platform Pricing Calculator");

    //Perform search
    const searchButton = await browser.$(".qdOxv-fmcmS-yrriRe-OWXEXe-H9tDt.ZJR0Ie > label > i.google-material-icons.PETVs.PETVs-OWXEXe-UbuQg");
    await searchButton.click();

    //click on the 2nd calculatorPage searchresult
    const calculatorPage = await browser.$(":nth-child(3) > c-wiz > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > a");
    await calculatorPage.click();

    //Check that opens Pricing calculator page
    const title = await browser.getTitle();
    console.log(title);
    await expect(browser).toHaveTitle("Google Cloud Pricing Calculato");

    // Swich to iFrame
    const parentFrame = await browser.$("#cloud-site > devsite-iframe > iframe");
    await browser.switchToFrame(parentFrame);

    const childFrame = await browser.$("#myFrame");
    await browser.switchToFrame(childFrame);

    //Click Compute Engine
    (await $(".hexagon")).click();
    await browser.pause(1000);

    // Fill compute engine which is a iFrame
    const numberOfInstances = await browser.$("#input_100");
    await numberOfInstances.setValue("4");
    await browser.pause(1000);

    const seriesField = await browser.$("#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(8) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container");
    await seriesField.click();
    await browser.pause(1000);

    const series = await browser.$('//*[@id="select_option_224"]');
    await series.click();
    await browser.pause(1000);

    const mashineTypeField = await browser.$("#select_127");
    await mashineTypeField.click();
    await browser.pause(1000);

    const mashineType = await browser.$('//*[@id="select_option_474"]');
    await mashineType.click();
    await browser.pause(500);

    const addDiscountUncheck = await browser.$('#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(14) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container > md-checkbox > div.md-label');
    await addDiscountUncheck.click();
    await browser.pause(500);

    const addGPUscheck = await browser.$('#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(15) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container > md-checkbox > div.md-label');
    await addGPUscheck.click();
    await browser.pause(500);

    const GPUTypeField = await browser.$('#select_510');
    await GPUTypeField.click();
    await browser.pause(500);

    const GPUType = await browser.$('#select_option_517');
    await GPUType.click();
    await browser.pause(500);

    const numberOfGPUsField = await browser.$('#select_512');
    await numberOfGPUsField.click();
    await browser.pause(500);

    const numberOfGPUs = await browser.$('#select_option_520');
    await numberOfGPUs.click();
    await browser.pause(500);

    const localSSDField = await browser.$('#select_value_label_468');
    await localSSDField.click();
    await browser.pause(500);

    const localSSD = await browser.$('#select_option_495');
    await localSSD.click();
    await browser.pause(500);

    const commitedUsageFieeld = await browser.$('#select_value_label_99');
    await commitedUsageFieeld.click();
    await browser.pause(500);

    const commitedUsage = await browser.$('#select_option_138');
    await commitedUsage.click();
    await browser.pause(500);

    //Click Add to Estimate button
    const addToEstimateButton = await browser.$("#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div.layout-align-end-start.layout-row > button");
    await addToEstimateButton.click();
    await browser.pause(500);

    //Check compute Engine block is displagyed
    const computeEngine = await $('#resultBlock')
    await expect(computeEngine).toBeDisplayed()
    await browser.pause(500);

    //Check the total calculated price
    const calculatedPrice = await $('//*[@id="resultBlock"]/md-card/md-card-content/div/div/div/div[1]/h2/b')
    await expect($((calculatedPrice)).toHaveText([
        expect.stringContaining('Total Estimated Cost: USD 5,411.26 per 1 month'),
        expect.stringContaining('Started')]))
   
    //Click on the email button
    const email = await browser.$('//*[@id="Email Estimate"]/span');
    await email.click();
    await browser.pause(1000);

    //Check Email Your Estimate is displagyed
    const emailYourEstimate = await $('#resultBlock')
    await expect($(emailYourEstimate)).toBeDisplayed()
    await browser.pause(500);
    
  
 });
});
