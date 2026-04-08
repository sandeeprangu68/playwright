const { test, expect } = require('../../fixtures/baseTest');

test('User Dashboard', async ({ userPage }) => {
    await userPage.goto('https://tutorialsninja.com/demo/index.php?route=account/account');

    await expect(userPage).toHaveTitle(/My Account/);
    await expect(page.getByText('My Account')).toBeVisible();
});