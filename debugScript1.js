// debugScript.js
const { chromium } = require('playwright');

(async () => {
    const browserq = await chromium.launch({ headless: false });
    const con = await browserq.newContext();

    const page = await con.newPage();

    await page.goto('https://tutorialsninja.com/demo');

    await page.click('text=Desktops');

    debugger;

   // ❌ do NOT close
})();