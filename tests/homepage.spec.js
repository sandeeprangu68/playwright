const { test} = require('../fixtures/testFixture');
const { expect } = require('@playwright/test');
test('Dashboard Test @smoke', async ({ loggedInPage }) => {

    await loggedInPage.goto('https://tutorialsninja.com/demo/index.php?route=account/account');
    console.log(await loggedInPage.title());

    await loggedInPage.waitForTimeout(5000);
    console.log(await loggedInPage.title());
    await expect(loggedInPage).toHaveTitle("My Account1");
    await loggedInPage.waitForTimeout(5000);


});