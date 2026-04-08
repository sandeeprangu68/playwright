const { test } = require('@playwright/test');

test('login setup', async ({ page }) => {

    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');

    await page.fill('#input-email', 'test160588@gmail.com');
    await page.fill('#input-password', 'pf#WU6m2v8#pq');
    await page.locator('//input[@value="Login"]').click();

    await page.waitForURL('https://tutorialsninja.com/demo/index.php?route=account/account');

    await page.context().storageState({ path: 'auth.json' });

});