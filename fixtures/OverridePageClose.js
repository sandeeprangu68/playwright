import { test as base } from '@playwright/test';

const test = base.extend({
    page: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await use(page);

        // ❌ comment this to prevent auto close
        // await page.close();
        // await context.close();
    }
});

test('custom control', async ({ page }) => {
    await page.goto('https://example.com');
});