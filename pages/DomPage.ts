import { Page } from '@playwright/test';
import { TableComponent } from './TableComponent';

export class DomPage {
  readonly page: Page;
  readonly table: TableComponent;

  constructor(page: Page) {
    this.page = page;
    this.table = new TableComponent(page);
  }

  async goto() {
    await this.page.goto('https://practice.expandtesting.com/dynamic-table');
  }
}
