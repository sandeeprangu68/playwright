const { test } = require('@playwright/test');

test('Actions Example', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo');

    await page.hover('text=Desktops');
    await page.click('text=Mac (1)');
});