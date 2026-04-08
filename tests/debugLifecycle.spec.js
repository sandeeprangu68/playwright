const { test } = require('@playwright/test');

test('Debug Browser → Context → Page lifecycle', async () => {

    console.log('STEP 1: Launching browser...');

    const { chromium } = require('playwright');

    const browser = await chromium.launch({
        headless: false,
        slowMo: 5000   // slow down actions
    });

    debugger; // 🛑 Pause here

    console.log('STEP 2: Creating context...');

    const context = await browser.newContext();

    debugger; // 🛑 Pause here

    console.log('STEP 3: Creating page (tab)...');

    const page = await context.newPage();

    debugger; // 🛑 Pause here

    console.log('STEP 4: Navigating...');

    await page.goto('https://tutorialsninja.com/demo');

    debugger; // 🛑 Pause here

    console.log('STEP 5: Interaction');

    await page.click('text=Desktops');

    debugger; // 🛑 Pause here

});