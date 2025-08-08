import { Page, Locator, expect } from '@playwright/test';

export class TableComponent {
  private page: Page;
  private table: Locator;

  constructor(page: Page) {
    this.page = page;
    this.table = page.locator('table'); 
  }

  async getCellText(row: number, column: number): Promise<string> {
    return await this.table.locator(`tbody tr:nth-child(${row}) td:nth-child(${column})`).innerText();
  }

  async clickButtonInRow(row: number, buttonText: string): Promise<void> {
    const button = this.table.locator(`tbody tr:nth-child(${row}) button:has-text("${buttonText}")`);
    await button.click();
  }
}
