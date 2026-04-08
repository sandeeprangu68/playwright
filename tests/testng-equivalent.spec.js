const { test, expect } = require('@playwright/test');

/**
 * ================================
 * GLOBAL HOOKS (like @BeforeSuite / @AfterSuite)
 * ================================
 */
test.beforeAll(async () => {
    console.log('🔥 Before All (Suite Start)');
});

test.afterAll(async () => {
    console.log('🔥 After All (Suite End)');
});

/**
 * ================================
 * GROUP (like TestNG class)
 * ================================
 */
test.describe('TestNG Equivalent in Playwright', () => {

    /**
     * ================================
     * BEFORE EACH (like @BeforeMethod)
     * ================================
     */
    test.beforeEach(async ({ page }) => {
        console.log('👉 Before Each Test');
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
    });

    /**
     * ================================
     * AFTER EACH (like @AfterMethod)
     * ================================
     */
    test.afterEach(async ({ page }) => {
        console.log('👉 After Each Test');
    });

    /**
     * ================================
     * TEST CASE 1
     * ================================
     */
    test('Test 1 - Basic Assertions', async ({ page }) => {

        await expect(page).toHaveTitle(/Register Account/);   // title check

        const heading = page.locator('//*[@id="content"]/h1');

        await expect(heading).toBeVisible();         // visible
        await expect(heading).toHaveText('Register Account'); // text match

        console.log('✅ Assertions completed');
    });

    /**
     * ================================
     * TEST CASE 2 - Soft Assertions (like multiple asserts)
     * ================================
     */
    test('Test 2 - Multiple Assertions', async ({ page }) => {

        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/login');

        await expect(page.locator('//*[@id="content"]/div/div[2]/div/h2')).toContainText('Returning Customer');

        await expect(page.locator('//*[@id="content"]/div/div[2]/div/form/div[1]/label')).toHaveAttribute('.class', 'control-label');
    });

    /**
     * ================================
     * DATA DRIVEN (like @DataProvider)
     * ================================
     */
    const users = ['user1', 'user2', 'user3'];

    users.forEach(user => {
        test(`Data Driven Test for ${user}`, async () => {
            console.log(`Running test for ${user}`);
        });
    });

    /**
     * ================================
     * RETRY (like Retry Analyzer)
     * ================================
     */
    test('Retry Example', async ({ page }) => {
        test.info().retry && console.log('Retrying test...');
        await expect(page).toHaveTitle(/Account Login/);
    });

    /**
     * ================================
     * TAGS / GROUPING (like TestNG groups)
     * ================================
     */
    test('Smoke Test @smoke', async ({ page }) => {
        await expect(page).toHaveTitle(/Register Account/);
    });

    test('Regression Test @regression', async ({ page }) => {
        await expect(page).toHaveTitle(/Account Login/);
    });

    /**
     * ================================
     * STEP REPORTING (like logs)
     * ================================
     */
    test('Test with Steps', async ({ page }) => {

        await test.step('Step 1: Navigate', async () => {
            await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        });

        await test.step('Step 2: Validate Title', async () => {
            await expect(page).toHaveTitle(/Account Login/);
        });

    });

    /**
     * ================================
     * PARALLEL TEST (automatic)
     * ================================
     */
    test('Parallel Test Example', async ({ page }) => {
        await expect(page).toHaveTitle(/Account Login/);
    });

    /**
     * ================================
     * FAILING TEST (for debug)
     * ================================
     */
    test('Failing Test Example', async ({ page }) => {
        await expect(page).toHaveTitle('My Account'); // ❌ intentional fail
    });

});