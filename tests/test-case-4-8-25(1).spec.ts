// import { test, expect } from '@playwright/test';

// test('UI Elements and Assertions appearance testing', async ({ page }) => {

//   await page.goto('https://practice.expandtesting.com/login');

//   const usernameField = page.locator('//input[@id="#username"]');
//   await expect(usernameField).toBeVisible();

//   const passwordField = page.locator('//input[@id="password"]');
//   await expect(passwordField).toBeVisible();

//   const loginButton = page.getByText('Login');
//   await expect(loginButton).toBeVisible();

//   const form = page.getByRole('form');
//   await expect(form).toBeVisible();
// });

// test('Extracting Text', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/tables');

//   const headers = await page.locator('table thead th').allInnerTexts();
//   console.log("table headers :" , headers);

//   const editBtnText = await page.locator('table tbody tr:first-child td:last-child a:has-text("Edit")').innerText();
//   console.log('First row Edit button text:', editBtnText);

// });

// test('Wait Techniques', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/dynamic_loading/1');

//   await page.getByText('Start').click();

//   await page.waitForSelector('#finish h4', { timeout: 10000 });

//   await expect(page.locator('#finish h4')).toHaveText('Hello World!');

//   await expect(page.locator('#finish h4')).toHaveText('Hello World!', { timeout: 15000 });
// });

