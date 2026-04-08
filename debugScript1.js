// debugScript.js
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://tutorialsninja.com/demo');

    await page.click('text=Desktops');

    debugger;

    // ❌ do NOT close
})();