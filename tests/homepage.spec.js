import { test, expect } from '@playwright/test';

test('Verify page title', async ({ page }) => {
  await page.goto('https://sandeepprangu68.github.io/playwright/');

  await expect(page).toHaveTitle('Test App');
});
