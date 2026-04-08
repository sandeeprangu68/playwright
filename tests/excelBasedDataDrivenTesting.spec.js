const { test, expect } = require('@playwright/test');
const getTestData = require('../utils/excelReader.js');

const testData = getTestData();

testData.forEach((data, index) => {

    test(`Login Test ${index + 1}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill(data.username);
        await page.locator('#password').fill(data.password);
        await page.locator('#login-button').click();

        // validation
        if (data.username === 'standard_user') {
            await expect(page).toHaveURL(/inventory/);
        } else {
            await expect(page.locator('[data-test="error"]')).toBeVisible();
        }
    });

});