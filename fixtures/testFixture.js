const base = require('@playwright/test');
//const { expect } = require('@playwright/test');

exports.test = base.test.extend({

    loggedInPage: async ({ page }, use) => {

        // setup (login)
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');

        await page.fill('#input-email', 'test160588@gmail.com');
        await page.fill('#input-password', 'pf#WU6m2v8#pq');
        await page.locator('//input[@value="Login"]').click();

        await page.waitForURL('https://tutorialsninja.com/demo/index.php?route=account/account');

        // use fixture
        await use(page);
        //await page.context().storageState({ path: 'auth.json' });
        // teardown (optional)
        //await page.close();
    }

});