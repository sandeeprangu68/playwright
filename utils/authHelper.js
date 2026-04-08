// const { chromium,expect } = require('@playwright/test');
// const { env } = require('./env');
//
// async function loginAndSave(role, path) {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//
//     const creds = env[role];
// //
// //     // await page.goto(`${env.baseURL}/index.php?route=account/login`);
// //     //
// //     // // await page.fill('#input-email', creds.email);
// //     // // await page.fill('#input-password', creds.password);
// //     // //
// //     // // await page.getByRole('button', { name: 'Login' }).click();
// //     //
// //     // await page.fill('#input-email', creds.email);
// //     //
// //     // // await page.locator('#input-password').click();
// //     // // await page.locator('#input-password').fill('');
// //     // // await page.locator('#input-password').type(creds.password, { delay: 100 });
// //     //
// //     //
// //     //
// //     // await page.fill('#input-password', creds.password);
// //     //
// //     // const value = await page.locator('#input-password').inputValue();
// //     // console.log('Typed password length:', value.length);
// //     //
// //     //
// //     // await page.fill('#input-email', creds.email);
// //     // await page.fill('#input-password', creds.password);
// //     //
// //     // await page.getByRole('button', { name: 'Login' }).click();
// //     //
// //     // await page.waitForURL('**/account');
// //
// //     // await page.goto(`${env.baseURL}/index.php?route=account/login`);
// //     //
// //     // await page.fill('#input-email', creds.email);
// //     // await page.fill('#input-password', creds.password);
// //     //
// //     // await Promise.all([
// //     //     page.waitForNavigation(),
// //     //     page.click('input[value="Login"]')
// //     // ]);
// //
// //
// //
// //     // await page.goto('/index.php?route=account/login');
// //     //
// //     // await page.fill('#input-email', creds.email);
// //     // await page.fill('#input-password', creds.password);
// //     //
// //     // await Promise.all([
// //     //     page.waitForNavigation(),
// //     //     page.click('input[value="Login"]')
// //     // ]);
// //     // await expect(page).toHaveURL(/account\/account/);
// //
// //     //await page.goto('/index.php?route=account/login');
// //     await page.goto(`${env.baseURL}`);
// //
// //     await page.fill('#input-email', creds.email);
// //     await page.fill('#input-password', creds.password);
// //
// //     await page.click('input[value="Login"]');
// //
// // // wait for real success signal
// //     //await expect(page.locator('h2')).toHaveText('/My Account/');
// //     await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
// // // wait properly
// //     await page.waitForLoadState('networkidle');
// //
// // // OR better (safe URL match)
// //     await page.waitForURL('**/account', { timeout: 10000 });
// //     //await page.waitForURL('**/account');
// //
// //     await page.context().storageState({ path });
// //
// //     await browser.close();
// // }
// //
// // module.exports = { loginAndSave };
//
//
// await page.goto(`${env.baseURL}/index.php?route=account/login`);
//
// await page.fill('#input-email', creds.email);
// await page.fill('#input-password', creds.password);
//
// // click + wait together (best practice)
// await Promise.all([
//     page.waitForNavigation(),
//     page.click('input[value="Login"]')
// ]);
//
// // assert login success
// await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
//
// // save session
// await page.context().storageState({ path });}


const { expect } = require('@playwright/test');
const { env } = require('./env');

async function loginAndSave(page, role, path) {

    const creds = env[role];

    //await page.goto(`${env.baseURL}/index.php?route=account/login`);
    //await page.goto(env.baseURL);
    //await page.goto(`${env.baseURL}/index.php?route=account/login`);
    await page.goto(`${env.baseURL}`);

    // IF already logged in → skip login
    // if (await page.locator('text=My Account').isVisible()) {
    //     console.log('Already logged in, skipping login');
    // } else {
    //     await page.fill('#input-email', creds.email);
    //     await page.fill('#input-password', creds.password);
    //
    //     await Promise.all([
    //         page.waitForURL('**/account'),
    //         page.click('input[value="Login"]')
    //     ]);
    // }
    //await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
    // fast check (no wait)
    const isLoggedIn = await page.locator('text=My Account').count() > 0;

    if (!isLoggedIn) {
        await page.fill('#input-email', creds.email);
        await page.fill('#input-password', creds.password);

        await Promise.all([
            page.waitForURL('**/account'),
            page.click('input[value="Login"]')
        ]);
    }
    //await expect(page.locator('h2:has-text("My Account")')).toBeVisible();
    // validation
    await expect(page).toHaveURL(/account/);

    await page.context().storageState({ path });

}
module.exports = { loginAndSave };

