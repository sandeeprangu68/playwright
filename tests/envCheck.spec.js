const { test, expect } = require('../fixtures/baseTest');
const {env} = require("../utils/env");

test('User Dashboard', async ({ page }) => {
    //await page.goto('https://tutorialsninja.com/demo/index.php?route=account/account');

    await page.goto(`${env.baseURL}`);
    //await expect(page).toHaveTitle(/My Account/);
    //await expect(page.getByText('My Account')).toBeVisible();
});