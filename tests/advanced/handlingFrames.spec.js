const { test } = require('@playwright/test');

// test('Frames Example', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/iframe');
//
//     const frame = page.frameLocator('#mce_0_ifr');
//
//     await frame.locator('body').fill('Hello Frame');
// });


test('handle iframe', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/iframe");

    const frame = page.frameLocator('#tinymce');

    await frame.locator('.tinymce').clear();
    await frame.locator('.tinymce').fill('Test handle iframe');

    await expect(frame.locator('#tinymce')).toHaveValue('Test handle iframe');
});