

const { test } = require('@playwright/test');

test('Click dd Mac_1', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/');

    //await page.getByText('Desktops').hover();
    await page.locator('text=Desktops').hover();
    //await page.getByRole('link', { name: 'Desktops' }).hover();
await page.waitForTimeout(5000);
    await page.getByRole('link',{name:'Mac (1)'}).click();

});

//