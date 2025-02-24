describe("browser setTimeout", () => {
  it("script should not timeout", async () => {
    await browser.setTimeout({ script: 20000 });
    await browser.executeAsync((done) => {
      console.log("this should not fail");
      setTimeout(done, 15000);
    });
  });
  it("script should fail with timeout error, timeout = 20 secs, script execution 30 secs", async () => {
    await browser.setTimeout({ script: 20000 });
    await expect(
      browser.executeAsync((done) => {
        console.log("this should fail");
        setTimeout(done, 30000);
      })
    ).rejects.toThrowError(/script timeout/);
  });
  it("script should not fail, timeout = 90 secs, script execution 80 secs", async () => {
    await browser.setTimeout({ script: 90000 });
    await browser.executeAsync((done) => {
      console.log("this should not fail");
      setTimeout(done, 80000);
    });
  });
  it("script should fail with timeout error, timeout = 90 secs, script execution 120 secs", async () => {
    await browser.setTimeout({ script: 90000 });
    await expect(
      browser.executeAsync((done) => {
        console.log("this should fail");
        setTimeout(done, 120000);
      })
    ).rejects.toThrowError(/script timeout/);
  });
});
