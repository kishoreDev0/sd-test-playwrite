import { test, expect } from '@playwright/test';

test('Site Works as expected',async({page})=>{
    await page.goto('http://192.168.1.85:8574/login');
});
 
test('login test', async({page})=>{
    await page.goto('http://192.168.1.85:8574/login');
    const emailBx =  page.getByTestId('email');
    const passBx =  page.getByTestId('password');
    
    // filling the essebtial details    
    await emailBx.fill('admin@gmail.com');
    await passBx.fill('admin')

    //Expecting the vlue to be had 
    await expect(emailBx).toHaveValue('admin@gmail.com');
    await expect(passBx).toHaveValue('admin');

    await page.getByRole('button', { name: 'Submit' }).click();
    
    //After clicking expecting a popup with class .modal 
    const popup = await page.locator('.modal'); 
    await expect(popup).toBeVisible();

    await expect(page).toHaveTitle("Fluxscape Viewer");
});

test('send invite check', async({page})=>{
    await page.goto('http://192.168.1.85:8574/home');
    const openDropBtn  = page.locator('.pls');

    // Attempting to send invite to email
    await openDropBtn.waitFor({ state: 'visible' });
    await openDropBtn.click();
    await page.getByRole('button', { name: 'Send invite' }).click();

    // Expecting to see a popup with class .modal
    const popup = await page.locator('.noodl-popup');
    await expect(popup).toBeVisible();

    //Entering th email 
    const sendEmail = page.getByTestId('send-email');
    await sendEmail.fill("harshan.p@tringapps.net");
    await expect(sendEmail).toHaveValue("harshan.p@tringapps.net");

    // slecting the role
    const roleSelect = page.getByTestId('send-pass');
    await roleSelect.selectOption('2');
    await expect(roleSelect).toHaveValue('2');

    // Clicking the send button and close the popup button
    const senBtn = page.getByTestId('hit-send');
    await senBtn.click();
    await expect(popup).toBeHidden();
})