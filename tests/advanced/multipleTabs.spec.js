const { test } = require('@playwright/test');

test('Multiple Tabs Example', async ({ page, context }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('text=Click Here')
    ]);

    await newPage.waitForLoadState();
    console.log(await newPage.title());

});


await page.locator("div h1",{hasText:
        "Your Account Has Been Created!"
});


// test('handle multile tabs', async ({page, context}) => {
//     await page.goto("https://demoqa.com/browser-windows");
//
//     await page.getByRole('button',{
//         hasText:''
//     })
// }