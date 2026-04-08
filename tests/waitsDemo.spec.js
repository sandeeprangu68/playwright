const { test, expect } = require('@playwright/test');
//const LoginPage = require('../pages/LoginPage');
const data = require('../utils/testData');

test('Waits Demo', async ({ page }) => {
    //const WaitsDemo = new WaitsDemo(page);
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await page.waitForTimeout(5000);
    await page.locator('#start button').click();
    const text1 = await page.locator('#finish h4').textContent();
    console.log(text1);
    //await page.waitForTimeout(5000);

    //await page.waitForSelector('#txt1').first();
    //await expect(page.locator('#finish h4'))

    //const placeholder = await page.locator('#txt1').first().getAttribute('placeholder');
    //console.log('placeholder');
    //await page.locator('#txt1').first().fill("Ganesh");

});
