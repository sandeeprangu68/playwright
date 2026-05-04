const { test, expect } = require('@playwright/test');

test('Exception Handling Demo', async ({ page }) => {

    // 🔹 1. Handle navigation error
    try {
        await page.goto('https://example.com');
        console.log('✅ Navigation successful');
    } catch (error) {
        console.log('❌ Navigation failed:', error.message);
    }

    // 🔹 2. Handle element not found
    try {
        await page.click('#non-existing-button', { timeout: 3000 });
    } catch (error) {
        console.log('❌ Element not found:', error.message);
    }

    // 🔹 3. Handle assertion failure
    try {
        await expect(page).toHaveTitle('Wrong Title', { timeout: 3000 });
    } catch (error) {
        console.log('❌ Assertion failed:', error.message);
    }

    // 🔹 4. Safe interaction using condition check
    const isVisible = await page.locator('h1').isVisible();

    if (isVisible) {
        await page.click('h1');
        console.log('✅ Element clicked safely');
    } else {
        console.log('⚠️ Element not visible, skipping click');
    }

    // 🔹 5. Global page error listener (JS errors in browser)
    page.on('pageerror', (err) => {
        console.log('❌ Page JS Error:', err.message);
    });

    // 🔹 6. Handle network failure
    page.on('requestfailed', request => {
        console.log('❌ Request failed:', request.url());
    });

});