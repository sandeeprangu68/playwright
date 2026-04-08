const { test, expect } = require('@playwright/test');

test('Navigation Example', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo');

    await expect(page).toHaveTitle(/Your Store/);

    await page.goBack();
    await page.goForward();
});