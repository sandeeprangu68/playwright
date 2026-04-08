const { test, expect } = require('@playwright/test');

test('Assertions Example', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo');

    await expect(page).toHaveURL(/demo/);
    await expect(page.locator('body')).toBeVisible();
});