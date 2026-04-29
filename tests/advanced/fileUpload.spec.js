const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');

test('File Upload Example', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.setInputFiles('#file-upload', 'tests/test-data/sample.txt');
    await page.click('#file-submit');


    await page.waitForTimeout(5000);

    await expect(page.getByText("File Uploaded!")).toHaveText("File Uploaded!");
    await page.screenshot('')
});