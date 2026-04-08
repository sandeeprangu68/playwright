import { test, expect } from '@playwright/test';

// test('File upload using filechooser', async ({ page }) => {
//
//     await page.goto('https://www.file.io/');
//     await page.waitForTimeout(5000);
//     await page.setInputFiles('input[type="file"]', 'tests/test-data/sample.jpg');
//
//     // const [fileChooser] = await Promise.all([
//     //     page.waitForEvent('filechooser'),
//     //     page.locator('input[type="file"]').click()
//     // ]);
//     await page.waitForTimeout(5000);
//     // await fileChooser.setFiles('tests/test-data/sample.jpg');
//     // //await page.setInputFiles('input[type="file"]', 'file.pdf');
//     // await page.waitForTimeout(5000);
//
// });

//import { test } from '@playwright/test';

test('Upload using filechooser (real dynamic case)', async ({ page }) => {

    await page.goto('https://pixlr.com/editor/');

    const closeBtn = page.locator('.announce-close');

    if (await closeBtn.isVisible().catch(() => false)) {
        await closeBtn.click();
    }
    await page.waitForTimeout(5000);
    // Click "Open Image"
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('text=Open Image')
    ]);

    await fileChooser.setFiles('tests/test-data/sample.jpg');

});