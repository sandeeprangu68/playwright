const { test, expect } = require('../../fixtures/baseTest2');

test('Framework level exception handling', async ({ page }) => {

    await page.goto('https://example.com');

    // This will fail intentionally
    await page.click('#non-existing-button');

    await expect(page).toHaveTitle(/Example/);
});