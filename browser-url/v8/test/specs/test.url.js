const getStartedSelector = "//a[text()='Get Started']";
const getStartedTitleSelector = "//h1[text()='Getting Started']"
describe("browser.url", () => {
  it("first call to browser.url", async () => {
    await browser.url("https://webdriver.io/")
  });
  it("click 'Get Started'", async () => {
    const elem = await $(getStartedSelector);
    await elem.click();
  });
  it("verify click and page navigation", async () => {
    await $(getStartedTitleSelector).waitForDisplayed();
  });
  it("second call to browser.url", async () => {
    await browser.url("https://webdriver.io/")
  });
  it("second click 'Get Started'", async () => {
    const elem = await $(getStartedSelector);
    await elem.click();
  });
  it("second verify click and page navigation", async () => {
    await $(getStartedTitleSelector).waitForDisplayed();
  });
});
