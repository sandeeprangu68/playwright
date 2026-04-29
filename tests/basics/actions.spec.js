// const { test } = require('@playwright/test');
//
// test('Actions Example',  ({ page }) => {
//      page.goto('https://tutorialsninja.com/demo')
//          .then(async () => { await page.hover('text=Desktops');
//          await page.click('text=Mac (1)');})
//
//          .catch(async ()=> {console.log("failed")});
//
//
//
//
// });

const { test } = require('@playwright/test');

test('Actions Example', ({ page }) => {

    return page.goto('https://tutorialsninja.com/demo')
        .then(() => {
            return page.waitForTimeout(2000); // wait 2 seconds
        })
        .then(() => {
            return page.hover('text=Desktops');
        })
        .then(() => {
            return page.waitForTimeout(1000); // small wait
        })
        .then(() => {
            return page.click('text=Mac (1)');
        })
        .catch(() => {
            console.log("failed");
        });

});