const { test, expect } = require('@playwright/test');

test('Trace + UI demo', async ({ page }) => {

    console.log('Step 1: Open website');
    await page.goto('https://example.com');

    console.log('Step 2: Validate title');
    await expect(page).toHaveTitle(/Example Domain/);

    console.log('Step 3: Click More Info');
    await page.click('text=More information');

    console.log('Step 4: Validate navigation');
    await expect(page).toHaveURL(/iana.org/);

});
