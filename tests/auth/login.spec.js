const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const data = require('../../utils/testData');

test('Login Test @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(data.username, data.password);

  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
