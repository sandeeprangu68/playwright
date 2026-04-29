// scroll.spec.js

const { test, expect } = require('@playwright/test');

// test('Scroll to element using scrollIntoViewIfNeeded', async ({ page }) => {
//
//     // Step 1: Open website
//     await page.goto('https://practice.expandtesting.com/infinite-scroll');
//
//     await page.waitForTimeout(1000);
//     // Step 2: Locate element (far below)
//     const footerText = page.locator('text=Example Footer');
//
//     await page.waitForTimeout(1000);
//     // Step 3: Scroll until visible
//     await footerText.scrollIntoViewIfNeeded();
//
//     await page.waitForTimeout(1000);
//     // Step 4: Validate
//     await expect(footerText).toBeVisible();
//
//     await page.waitForTimeout(1000);
// });

test('Scroll and click Add to Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    const product = page.locator('text=Sauce Labs Fleece Jacket');

    // Scroll to product
    await product.scrollIntoViewIfNeeded();

    // Click Add to cart
    await product.locator('xpath=..').getByRole('button').click();

});