import puppeteer from "puppeteer";

describe("Testing App in browserlike environment using Puppeteer", () => {
  let page: any;
  let browser: any;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
  });
  test("open the browser and expect App to be rendered", async () => {
    const html = await page.$eval("#welcome", (e: any) => e.innerHTML);
    expect(html).toBe("WelCome to Puppeteer");
    browser.close();
  });

  test("checking the transition of robo from position 00 to 10", async () => {
    await page.click("button[value=DOWN]");
    const cellLeft = await page.$eval(
      "#test > div:nth-child(6)",
      (e: any) => e.innerHTML
    );
    expect(cellLeft).toBe("X");
    browser.close();
  });
});
