const { test, expect } = require('../fixtures/baseTest');

test('Admin Dashboard', async ({ adminPage }) => {
    await adminPage.goto('https://tutorialsninja.com/demo/index.php?route=account/account');

    //await page.waitForTimeout(5000);

    await expect(adminPage).toHaveTitle(/My Account/);
});