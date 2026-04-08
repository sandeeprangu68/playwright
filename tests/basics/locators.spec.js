const { test } = require('@playwright/test');

test('Locators Example', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');

    await page.locator('#input-email').fill('test@test.com');
    await page.getByPlaceholder('Password').fill('12345');
    await page.getByRole('button', { name: 'Login' }).click();

    //Built-in Locators (Recommended 👍)

    //By Text
    await page.getByText('Submit');

    //By Label
    await page.getByLabel('Username');

    //By Placeholder
    await page.getByPlaceholder('Enter email');

    //By Alt Text
    page.getByAltText('profile image');

    //By Title
    page.getByTitle('Click here');

    //By Test ID (very reliable)
    page.getByTestId('login-btn');

    //2. CSS & XPath Locators
    //These are similar to Selenium.
    //
    // 📌 CSS Selector
    await page.locator('#username');
    await page.locator('.btn-primary');

     //XPath
    await page.locator('//input[@id="username"]');

    //3. Other Advanced Locators
//📌 By ID
    page.locator('#id');
//📌 By Class
    page.locator('.className');
//📌 By Attribute
    page.locator('[type="submit"]');
//📌 Chaining (Parent → Child)
    page.locator('div').locator('button');
//📌 Filter / nth element
    page.locator('button').nth(0);

});