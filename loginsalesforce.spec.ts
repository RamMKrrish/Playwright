// launch chromium in non headless mode

import { chromium, firefox, webkit } from '@playwright/test';
import test from '@playwright/test';
test(`Test to launch a browser`, async({page}) => {

//create a new browser context
const browser = await chromium.launch({headless: false});
//const context = await browser.newContext();

//login to salesforce
await page.goto("https://login.salesforce.com/");

//Maximize the browser window
await page.bringToFront();
//await page.setViewportSize({ width: 1920, height: 1080 });


// Enter the username and password
await page.fill("//input[@id='username']", "rkroyals-yctx@force.com"); // replace with your username
await page.fill("//input[@id='password']", "Admin@0987"); // replace with your password
await page.click("//input[@id='Login']"); // click the login button

//wait for 10 seconds to allow the page to load
await page.waitForTimeout(10000);

// Print the page title and URL to the console
const pageTitle = await page.title();
const pageUrl = await page.url();
console.log(`Page Title: ${pageTitle}`);
console.log(`Page URL: ${pageUrl}`);
// close the browser
await browser.close();

}
)
