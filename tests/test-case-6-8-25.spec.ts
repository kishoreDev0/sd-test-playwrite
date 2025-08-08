import { test, expect } from '@playwright/test';
import  tableTests  from '../inputs/table.json'
import { DomPage } from '../pages/DomPage'

let skipRest = false;

test.describe('Dynamic Table Tests', () => {
  for (const data of tableTests) {
    test(`Validate table cell for row ${data.row} and column ${data.column}`, async ({ page }) => {
      test.skip(skipRest, 'Skipping due to previous failure');

      const domPage = new DomPage(page);
      await domPage.goto();
      try {
        const cellText = await domPage.table.getCellText(data.row, data.column);
        await expect(cellText).toBe(data.expectedValue);
      } catch (err) {
        skipRest = true; 
        throw err; 
      }
    });
  }
});
 