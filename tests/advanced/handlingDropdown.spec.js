const { test } = require('@playwright/test');

test('Dropdown Example', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');

    await page.selectOption('#oldSelectMenu', 'Purple');
});