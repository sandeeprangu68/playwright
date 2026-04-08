// const base = require('@playwright/test');
// exports.test = base.test.extend({
//
//     loggedInPage: async ({ page }, use) => {
//         await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
//
//         await page.locator('#input-email').fill('test160588@gmail.com');
//         await page.locator('#input-password').fill('pf#WU6m2v8#pq');
//         await page.getByRole('button', { name: 'Login' }).click();
//
//         await page.waitForURL('https://tutorialsninja.com/demo/index.php?route=account/account');
//
//         //use fixture
//         await use(page);
//
//         //await page.close();
//     }
// });

const base = require('@playwright/test');

exports.test = base.test.extend({

    loggedInPage1: async ({ page }, use) => {

        // ✅ MUST OPEN LOGIN PAGE
        // await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        //
        // // // ✅ wait for element
        // await page.waitForSelector('#input-email');
        //
        // await page.locator('#input-email').fill('test160588@gmail.com');
        // await page.locator('#input-password').fill('pf#WU6m2v8#pq');
        //
        // await page.getByRole('button', { name: 'Login' }).click();

        // ✅ wait for navigation
        //await page.waitForURL('https://tutorialsninja.com/demo/index.php?route=account/account');
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/account');
        // pass page to test
        await use(page);
        //await page.context().storageState({ path: 'auth.json' });
    }

});

exports.expect = base.expect;