const { test, expect } = require('@playwright/test');

test('Handle Multiple Windows', async ({ context, page }) => {

    const adminContext = await browser.newContext();
    const userContext = await browser.newContext();

    //const adminPage = await adminContext.newPage();
    //const userPage = await userContext.newPage();

//     await page.goto('https://the-internet.herokuapp.com/windows');
//
//     await page.pause(); // ⏸ stops execution
//
//     // Wait for new page (tab)
//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),   // listen
//         page.click('text=Click Here')   // trigger
//     ]);
//
//     // Wait until fully loaded
//     await newPage.waitForLoadState();
//
//     const allPages = context.pages();
//
//     console.log("Total tabs:", allPages.length);
//
// await newPage.close();
// await context.close();
//     // Validation
//     await expect(newPage.locator('h3')).toHaveText('New Window');

});