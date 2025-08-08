import { test, expect } from '@playwright/test';

test.describe('API Client Tests', () => { 
    
    test('Response Status on going to api',async({ page })=>{
        await page.goto('http://localhost:3000/api/users');
        const response = await page.waitForResponse('**/api/users');
        expect(response.status()).toBe(200);
    });
    

})