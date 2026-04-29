//import {test} from "@playwright/test";
const { test } = require('@playwright/test');

// test("html Table", async ({page}) => {
//     await page.goto("https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form");
//
//     await page.waitForTimeout(1000);
//     const row =  await page.locator('tr').filter({hasText:'Martin Blank'});
//   //  const phone = await row.locator('td').allTextContents();
//    // await page.waitForTimeout(1000);
//     const phone = await row.locator('td').nth(4).textContent();
//     console.log(phone);
//     //console.log(phone[4]);
//
// });

test("html Table", async ({ page }) => {

    await page.goto('https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form');

   // await page.locator('table').waitFor(); // wait table

    const row = page.locator('tr').filter({ hasText: 'Martin Blank' });

   // await row.first().waitFor(); // wait row

    const phone = await row.locator('td').nth(4).textContent();

    console.log(phone);

});