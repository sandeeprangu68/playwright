const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../utils/testData');

test.describe.configure({retries : 2});

test('Login Test', async ({ page }) => {
 //   const loginPage = new LoginPage(page);

    //await page.goto("https://www.flipkart.com/");
   // await loginPage.login(data.username, data.password);


    // //await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    //
    // await page.locator('#login-button').click();
    // await page.waitForTimeout(5000);
    //
    // const items = await page.locator('.inventory_item_name').all();
    // for (const item of items) {
    //     console.log(await item.textContent());
    // }

    // const products = await page.locator('.inventory_item_name');
    // console.log(await products.first().textContent());
    // console.log(await products.last().textContent());
    //
    //
    // const names = await page.locator('.inventory_item_name').allTextContents();
    // console.log(names);

    // await page.locator('.inventory_item_name').nth(2).click();
    //
    // const products = await page.locator('.product').evaluateAll(items =>
    //     items.map(item => ({
    //         name: item.querySelector('.title')?.innerText,
    //         price: item.querySelector('.price')?.innerText
    //     }))
    // );
    //
    // console.log(products);

    //Standard Dropdown (<select>)
    // await page.goto("https://www.saucedemo.com/");
    // await page.locator('#user-name').fill("standard_user");
    // await page.locator('#password').fill("secret_sauce");
    // await page.waitForTimeout(5000);
    // await page.locator('#login-button').click();
    // await page.waitForTimeout(5000);
    // await page.selectOption('.product_sort_container', 'lohi');
    // await page.waitForTimeout(5000);
    // await page.selectOption('.product_sort_container',{label:'Price (high to low)'});
    // await page.waitForTimeout(5000);

    // Custom Dropdown (Div-based)
    // await page.goto("https://demoqa.com/select-menu");
    // await page.locator('#withOptGroup').click();
    // await page.waitForTimeout(5000);
    // await page.locator('text=Group 1, option 1').click();
    // await page.waitForTimeout(5000);

    // Auto-Suggest Dropdown
    // await page.goto("https://www.google.com/");
    // await page.fill('[name="q"]', 'playwright');
    // await page.waitForTimeout(5000);
    // await page.getByRole('listbox').getByRole('option').first().click();
    // await page.waitForTimeout(5000);

    //issue resolved by taking iframe
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select_multiple");
    await page.waitForTimeout(5000);
    const frame = page.frameLocator('#iframeResult1');

    await frame.locator('#cars').selectOption(['volvo', 'saab']);

    await page.waitForTimeout(5000);


    //await page.goto("https://select2.org/getting-started/basic-usage");
    // await page.locator('.select2-selection--single').click();
    // await page.waitForTimeout(5000);
    // await page.locator('input.select2-search__field').fill('India');
    // await page.waitForTimeout(5000);
    // await page.locator('.select2-results__option--selectable', { hasText: 'India' }).click();
    // await page.waitForTimeout(5000);

    //await page.goto("https://select2.org/getting-started/basic-usage");
    // await page.locator('select').selectOption('IND');
    // await page.waitForTimeout(5000);
    // await page.waitForSelector('#state option');
    // await page.waitForTimeout(5000);
    // await page.selectOption('#state', 'Telangana');
    // await page.waitForTimeout(5000);

    //await page.goto("https://www.flipkart.com/");
    // await page.locator(".b3wTlE").click();
    // await page.waitForTimeout(5000);
    // await page.locator('text=Fashion').first().hover();
    // await page.waitForTimeout(5000);
    // await page.locator('text=Men').click();
    // await page.waitForTimeout(5000);


});


