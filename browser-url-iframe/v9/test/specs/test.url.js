import path from "path";

const baseUrl = "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html?sap-ui-theme=sap_fiori_3";

async function handleCookies() {
  const cookiesAcceptButton = "button[id='truste-consent-button']";
  try {
    const elem = await $(cookiesAcceptButton);
    await elem.click();
  } catch (err) {
    console.log(`No cookies button found ${err}`);
  }
}
describe("browser.url after switching iframe", () => {
  it("navigate to button sample page", async () => {
    await browser.url(
      "https://sapui5.hana.ondemand.com/#/entity/sap.m.Button/sample/sap.m.sample.Button"
    );
    await handleCookies();
  });
  it("switch iframe", async () => {
    const iframeSelector = "[id='sampleFrame']";
    await $(iframeSelector).waitForDisplayed({ timeout: 30000 });
    const iframe = await $(iframeSelector);
    await browser.switchFrame(iframe);
  });
  it("navigate to shopping cart page using browser.url", async () => {
    await browser.url("#/categories"); // baseUrl from config is prepended
    // await browser.navigateTo(`${baseUrl}#/categories`); // using navigateTo works
    await browser.pause(5000);
    // await browser.saveScreenshot(path.resolve("./screenshot-"+new Date().getTime()+".png"), {fullPage: true});
    // await browser.switchFrame(null);
  });
  it("navigate back to button sample page", async () => {
    await browser.navigateTo(
      "https://sapui5.hana.ondemand.com/#/entity/sap.m.Button/sample/sap.m.sample.Button"
    );
  });
  it("switch iframe", async () => {
    const iframeSelector = "[id='sampleFrame']";
    await $(iframeSelector).waitForDisplayed({ timeout: 30000 });
    const iframe = await $(iframeSelector);
    await browser.switchFrame(iframe);
  });
});
