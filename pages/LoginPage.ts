import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly message: Locator;

   constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.message = page.locator('#flash'); 
  }

  async goto() {
    await this.page.goto('https://practice.expandtesting.com/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getMessageText() {
    return await this.message.textContent();
  }

 async expectMessageContains(text: string) {
  await expect(this.message).toBeVisible({ timeout: 10000 }); 
  await expect(this.message).toContainText(text);
}
}