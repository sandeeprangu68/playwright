const { test, expect } = require('@playwright/test');

test('Waits Example', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo');

    await page.waitForLoadState('networkidle');

    await expect(page.locator('text=Desktops')).toBeVisible();
});
const { test, expect } = require('@playwright/test');

test('All expect scenarios', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // 🔐 Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // =========================================
    // 🔥 TEXT VALIDATIONS
    // =========================================
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.title')).toContainText('Prod');

    // =========================================
    // 🔥 VISIBILITY
    // =========================================
    await expect(page.locator('.inventory_list')).toBeVisible();
    await expect(page.locator('.fake')).toBeHidden();

    // =========================================
    // 🔥 COUNT
    // =========================================
    await expect(page.locator('.inventory_item')).toHaveCount(6);

    // =========================================
    // 🔥 ATTRIBUTE
    // =========================================
    await expect(page.locator('#react-burger-menu-btn'))
        .toHaveAttribute('id', 'react-burger-menu-btn');

    // =========================================
    // 🔥 VALUE (input fields)
    // =========================================
    await page.fill('#user-name', 'standard_user');
    await expect(page.locator('#user-name')).toHaveValue('standard_user');

    // =========================================
    // 🔥 URL VALIDATION
    // =========================================
    await expect(page).toHaveURL(/inventory/);

    // =========================================
    // 🔥 TITLE VALIDATION
    // =========================================
    await expect(page).toHaveTitle(/Swag Labs/);

    // =========================================
    // 🔥 ENABLED / DISABLED
    // =========================================
    await expect(page.locator('#react-burger-menu-btn')).toBeEnabled();
    await expect(page.locator('.fake-btn')).toBeDisabled();

    // =========================================
    // 🔥 CHECKBOX / RADIO
    // =========================================
    // await expect(page.locator('#checkbox')).toBeChecked();

    // =========================================
    // 🔥 CSS VALIDATION
    // =========================================
    await expect(page.locator('.title'))
        .toHaveCSS('font-size', '20px');

    // =========================================
    // 🔥 CLASS VALIDATION
    // =========================================
    await expect(page.locator('.title'))
        .toHaveClass(/title/);

    // =========================================
    // 🔥 ELEMENT STATE
    // =========================================
    await expect(page.locator('.inventory_item')).toBeAttached();

    // =========================================
    // 🔥 FOCUS VALIDATION
    // =========================================
    await page.locator('#user-name').focus();
    await expect(page.locator('#user-name')).toBeFocused();

    // =========================================
    // 🔥 EMPTY / NOT EMPTY
    // =========================================
    const items = page.locator('.inventory_item');
    await expect(items).not.toHaveCount(0);

    // =========================================
    // 🔥 NEGATIVE ASSERTIONS
    // =========================================
    await expect(page.locator('.title')).not.toHaveText('Login');

    // =========================================
    // 🔥 CUSTOM TIMEOUT
    // =========================================
    await expect(page.locator('.title'))
        .toHaveText('Products', { timeout: 10000 });

});