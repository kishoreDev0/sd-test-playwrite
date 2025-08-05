// import { test, expect } from '@playwright/test';


// test('has title',async({page})=>{
//     await page.goto('https://practice.expandtesting.com/login')
//     await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice') 
// })
// test('login test by automation',async({page})=>{

//     await page.goto('https://practice.expandtesting.com/login');
//     await page.screenshot({ path: 'login-debug.png', fullPage: true });

//     const userInp = page.locator('input#username');
//     const userPass = page.locator('input#password');
//     const loginBtn = page.locator('button[type="submit"]');

//     await userInp.fill('practice');
//     await userPass.fill('SuperSecretPassword!');
//     await loginBtn.click();
//     await expect(page).toHaveTitle('Secure Page page for Automation Testing Practice');

// })