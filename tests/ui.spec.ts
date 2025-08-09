import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test.afterEach(async ({}, testInfo) => {
  console.log(`✅ Completed: ${testInfo.title} - Status: ${testInfo.status}`);
});

test('Login with valid credentials', async () => {
  await loginPage.login('admin', 'admin123');
  const msg = await loginPage.getMessageText();
  expect(msg).toContain('Login successful');
});

test('Login with invalid credentials', async () => {
  await loginPage.login('wrongUser', 'wrongPass');
  const msg = await loginPage.getMessageText();
  expect(msg).toContain('Invalid credentials');
});

test('Flaky login test (for retries)', async () => {
  await loginPage.login('admin', 'admin123');
  const msg = await loginPage.getMessageText();
  expect(['Login successful', 'Temporary Error']).toContain(msg);
});
