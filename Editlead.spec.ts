import { chromium } from "@playwright/test"
import test from  '@playwright/test';

//launch the chromium browser
test (`Test to launch a browser`, async({page}) => {
await page.goto("http://leaftaps.com/opentaps/control/main"); // navigate to the URL
await page.locator("//input[@id='username']").fill("DemoSalesManager"); // replace with your username
await page.locator("//input[@id='password']").fill("crmsfa"); // replace with your password
await page.locator("//input[@class='decorativeSubmit']").click(); // click the login button

// Click on the CRMSFA link
await page.locator("//a[contains(text(),'CRM/SFA')]").click(); // click the CRM/SFA link

// Click on the Leads link
await page.locator("//a[contains(text(),'Leads')]").click(); // click the Leads link

// Click on the Create Lead link
await page.locator("//a[contains(text(),'Create Lead')]").click(); // click the Create Lead link

// Fill in the form fields
await page.locator("//input[@id='createLeadForm_companyName']").fill("RK Comp1"); // fill in the company name
await page.locator("//input[@id='createLeadForm_firstName']").fill("RK1"); // fill in the first name
await page.locator("//input[@id='createLeadForm_lastName']").fill("Anm1"); // fill in the last name

//Wait the page to load for 5 seconds
await page.waitForTimeout(5000); // wait for 5 seconds

// Click the Create Lead button
await page.locator("//input[@name='submitButton']").click(); // click the Create Lead button

await page.waitForTimeout(2000); // wait for 2 seconds

// Click the find Leads link
await page.locator("//a[contains(text(),'Find Leads')]").click(); // click the Find Leads link

await page.waitForTimeout(3000); // wait for 3 seconds

// Enter the first name in the First Name field
await page.locator("//input[@id='ext-gen248']").fill("RK1"); // fill in the first name

await page.waitForTimeout(5000); // wait for 5 seconds

// Enter the find leads button
await page.locator("//button[contains(text(),'Find Leads')]").click(); // click the Find Leads button

// Click on the RK1 link
await page.locator("//a[contains(text(),'RK1')]").click(); // click the RK1 link

// Click on the Edit button
await page.locator("//a[contains(text(),'Edit')]").click(); // click the Edit button

// Update the company name
await page.locator("//input[@id='updateLeadForm_companyName']").fill("RK1 update Comp"); // fill in the company name

// Click the Update button
await page.locator("//input[@name='submitButton']").click(); // click the Update button

})
