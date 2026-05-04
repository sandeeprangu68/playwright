const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('File download and validation', async ({ page }) => {

    // 📁 Step 1: Create downloads folder
    const downloadDir = path.join(__dirname, 'downloads');

    if (!fs.existsSync(downloadDir)) {
        fs.mkdirSync(downloadDir);
    }

    // 🌐 Step 2: Open website
    await page.goto('https://the-internet.herokuapp.com/download');

    // ⬇️ Step 3: Start download + wait for event
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('text=some-file.txt')   // click any file
    ]);

    // 🏷 Step 4: Get file name
    const fileName = download.suggestedFilename();
    console.log('Downloaded file:', fileName);

    // 📄 Save file
   // const fileName = download.suggestedFilename();
    const filePath = path.join(downloadDir, fileName);

    await download.saveAs(filePath);

    console.log('Saved at:', filePath);

    // -------------------------------
    // ✅ VALIDATIONS
    // -------------------------------

    // ✅ 1. File exists
    expect(fs.existsSync(filePath)).toBe(true);

    // ✅ 2. File name validation
    expect(fileName).toContain('.txt');

    // ✅ 3. File size validation
    const stats = fs.statSync(filePath);
    expect(stats.size).toBeGreaterThan(0);

    // ✅ 4. File content validation
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log('File content:', content);

    expect(content.length).toBeGreaterThan(0);

});