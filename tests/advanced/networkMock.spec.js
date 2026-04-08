const { test } = require('@playwright/test');

test('API Mock Example', async ({ page }) => {

    await page.route('**/api/*', route => {
        route.fulfill({
            status: 200,
            body: JSON.stringify({ message: 'Mocked Response' })
        });
    });

    await page.goto('https://example.com');
});