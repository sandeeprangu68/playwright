import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.google.com/?zx=1774679643591&no_sw_cr=1');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright');

});