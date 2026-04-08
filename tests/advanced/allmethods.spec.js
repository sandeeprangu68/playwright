const { test, expect, chromium } = require('@playwright/test');

test('Playwright All Methods Demo', async ({ page }) => {

    // 🌐 1. Navigation
    await page.goto('https://example.com');
    await page.reload();
    await page.goBack();
    await page.goForward();

    // 🔍 2. Locators
    const input = page.locator('#username');
    const password = page.locator('#password');
    const button = page.locator('button');

    // 🎯 3. Actions
    await input.fill('admin');
    await password.type('1234');
    await button.click();

    // ⌨️ 4. Keyboard
    await page.keyboard.type('Hello');
    await page.keyboard.press('Enter');

    // 🖱️ 5. Mouse
    await page.mouse.move(100, 200);
    await page.mouse.click(100, 200);

    // 📦 6. Get Data
    const text = await button.textContent();
    const attr = await button.getAttribute('type');
    const value = await input.inputValue();

    console.log(text, attr, value);

    // 🔢 7. Multiple Elements
    const items = page.locator('a');

    const count = await items.count();
    console.log('Count:', count);

    for (let i = 0; i < count; i++) {
        console.log(await items.nth(i).textContent());
    }

    // 📋 Array of texts
    const allTexts = await items.allTextContents();
    console.log(allTexts);

    // 📸 Static snapshot
    const allElements = await items.all();

    for (let el of allElements) {
        console.log(await el.textContent());
    }

    // 🔥 8. Built-in Locators
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByText('Home').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByPlaceholder('Enter email').fill('test@test.com');

    // ⏳ 9. Waits
    await page.waitForSelector('#id');
    await page.waitForURL('**/dashboard');
    await page.waitForLoadState('load');

    // 🧪 10. Assertions
    await expect(button).toBeVisible();
    await expect(button).toHaveText(/Submit/);
    await expect(items).toHaveCount(count);

    // 📷 11. Screenshot
    await page.screenshot({ path: 'screenshot.png' });

    // 🧾 12. Dropdown
    await page.selectOption('#dropdown', 'value');

    // 📂 13. File Upload
    await page.setInputFiles('#upload', 'test.txt');

    // 🧩 14. Frame Handling
    const frame = page.frame({ name: 'frameName' });
    if (frame) {
        await frame.click('#inside-frame');
    }

    // 🔔 15. Alert Handling
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    // ⚙️ 16. Evaluate (Run JS in browser)
    const title = await page.evaluate(() => document.title);
    console.log('Title:', title);

    const texts = await page.locator('a')
        .evaluateAll(els => els.map(e => e.textContent));
    console.log(texts);

    // 🌐 17. Network
    await page.waitForResponse('**/api');
    await page.route('**/api', route => route.continue());

    // 🍪 18. Cookies
    const cookies = await page.context().cookies();
    console.log(cookies);

    // 🧠 19. Element State
    console.log(await button.isVisible());
    console.log(await button.isEnabled());

    // 🔗 20. Advanced Locator Usage
    await items.first().click();
    await items.last().click();

});