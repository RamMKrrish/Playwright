//Launch chromium browser
import { chromium, expect } from '@playwright/test';
import test from '@playwright/test';

test(`Test to launch a browser`, async({page}) => {
await page.goto("http://leaftaps.com/opentaps/control/main");
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
await page.locator("//input[@id='createLeadForm_companyName']").fill("RK Company"); // fill in the company name
await page.locator("//input[@id='createLeadForm_firstName']").fill("RK"); // fill in the first name
await page.locator("//input[@id='createLeadForm_lastName']").fill("Anm"); // fill in the last name
await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Mr"); // Salutation
await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill("Dr"); // fill in the Title
await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("999999999999.00"); // fill the Annual Revenue
await page.locator("//input[@id='createLeadForm_departmentName']").fill("Agriculture"); // fill the Department Name
await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("9999999999"); // fill the Phone Number

//Wait the page to load for 5 seconds
await page.waitForTimeout(5000); // wait for 5 seconds

// Click the Create Lead button
await page.locator("//input[@name='submitButton']").click(); // click the Create Lead button

//Verify the company name, first name, last name and the status using auto retrying assertions


await expect(page.locator("//span[@id='viewLead_companyName_sp']")).toHaveText("RK Company"); // verify the company name
await expect(page.locator("//span[@id='viewLead_firstName_sp']")).toHaveText("RK"); // verify the first name
await expect(page.locator("//span[@id='viewLead_lastName_sp']")).toHaveText("Anm"); // verify the last name
await expect(page.locator("//span[@id='viewLead_status_sp']")).toHaveText("Lead Status"); // verify the status

/*
await page.locator("//span[@id='viewLead_companyName_sp']").waitFor(); // wait for the company name to be visible
const companyName = await page.locator("//span[@id='viewLead_companyName_sp']").textContent(); // get the company name text 
const firstName = await page.locator("//span[@id='viewLead_firstName_sp']").textContent(); // get the first name text
const lastName = await page.locator("//span[@id='viewLead_lastName_sp']").textContent(); // get the last name text
const status = await page.locator("//span[@id='viewLead_status_sp']").textContent(); // get the status text

console.log(`Company Name: ${companyName}`); // log the company name
console.log(`First Name: ${firstName}`); // log the first name
console.log(`Last Name: ${lastName}`); // log the last name
console.log(`Status: ${status}`); // log the status
*/

// Verify the status using non-retrying assertion
expect(page.locator("//span[@id='viewLead_status_sp']")).toHaveText("Lead Status", { timeout: 5000 }); // verify the status with a timeout of 5 seconds
expect