import { test as base } from '@playwright/test';

export const test = base.extend({
    page: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        console.log("Custom page created");

        await use(page);

        // 🔥 Control teardown
        // Comment below to keep browser open
        // await page.close();
        // await context.close();
    }
});

export const expect = test.expect;