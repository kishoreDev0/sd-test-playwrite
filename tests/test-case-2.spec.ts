import { test, expect } from '@playwright/test';

test('has title',async({page})=>{
    await page.goto('http://192.168.1.47.nip.io:5011/login')
    await expect(page).toHaveTitle(/Cloud drive/) 
})

test('Google button is visible', async ({ page }) => {
  await page.goto('http://192.168.1.47.nip.io:5011/login');

  const googleButton = page.locator('text=Sign in with Google');
  await googleButton.click()
  await expect(googleButton).toBeVisible({ timeout: 60000 }); 
});