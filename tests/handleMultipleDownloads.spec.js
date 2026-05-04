//import {test} from "@playwright/test";
//import * as path from "node:path";
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('Handle multiple downloads', async ({ page }) => {

    const downloadDir = path.join(__dirname, 'downloads');
    fs.mkdirSync(downloadDir, { recursive: true });

    await page.goto('https://the-internet.herokuapp.com/download');

    // 📌 Step 1: Get all file links
    const links = await page.locator('a[href]').all();

    // 📌 Step 2: Download first 3 files
    for (let i = 0; i < 3; i++) {

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            links[i].click()
        ]);

        const fileName = download.suggestedFilename();
        const filePath = path.join(downloadDir, fileName);

        await download.saveAs(filePath);

        console.log(`Downloaded: ${fileName}`);

        expect(fs.existsSync(filePath)).toBeTruthy();
    }
});