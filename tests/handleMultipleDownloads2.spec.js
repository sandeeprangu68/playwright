const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');

test('Handle multiple downloads (FIXED)', async ({ page }) => {

    const downloadDir = path.join(__dirname, 'downloads');
    fs.mkdirSync(downloadDir, {recursive: true});

    await page.goto('https://the-internet.herokuapp.com/download');

    // // ✅ Step 1: Get only valid download links (txt/png/jpg)
    // const links = await page.locator('a[href]').all();
    //
    // // ✅ Step 2: Limit to first 3 valid links
    // const validLinks = links.slice(0, 3);
    //
    // for (const link of validLinks) {
    //
    //     const [download] = await Promise.all([
    //         page.waitForEvent('download', { timeout: 10000 }),
    //         link.click()
    //     ]);

    const fileNames = [
        'some-file.txt',
        'testleaf.png',
        'hello.json'
    ];

    for (const name of fileNames) {
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.click(`text=${name}`)
        ]);

        await download.saveAs(path.join(downloadDir, name));


    const fileName = download.suggestedFilename();
    const filePath = path.join(downloadDir, fileName);

    await download.saveAs(filePath);

    console.log('Downloaded:', fileName);

    expect(fs.existsSync(filePath)).toBeTruthy();

    }

});



