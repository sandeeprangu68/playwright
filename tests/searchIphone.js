//import {test} from "@playwright/test";



const { chromium } = require ('playwright');
//import {chromium} from 'playwright()';

(async () => {

    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');

    await page.waitForTimeout(5000);
    await page.getByPlaceholder('Search').fill('ip');

    await page.waitForTimeout(5000);
    //await page.getByRole('button', {name:'Search'}).click();

    await page.locator('button[class="btn btn-default btn-lg"]').click();
    // const products = await page.locator(".caption").locator('h4 a').allTextContents();
    //
    // for(product of products){
    //     console.log(product);
    // }
    // for (int i=0; i<=products.length; i++){
    //     console.log(products);
    //     const p
    // }

    //await page.getByAltText("iPod Nano").click();

    //await page.locator('i span', {hasText: 'Add to Cart'}).click();

    //await product.getByRole('button').first().click();
    // await page.locator('.product-thumb', {
    //     has: page.locator('h4 a', { hasText: 'iPod Nano' }).click()
    // });

    // Get all products
    const products = await page.locator('.product-thumb');

    const count = await products.count();

    // Generate 3 unique random indexes
    const randomIndexes = new Set();
    while (randomIndexes.size < 3) {
        randomIndexes.add(Math.floor(Math.random() * count));
    }

    const selectedProducts = [];

    // Add random products to cart
    // for (let index of randomIndexes) {
    //     const product = products.nth(index);
    //
    //     // Get product name
    //     const name = await product.locator('h4 a').textContent();
    //     selectedProducts.push(name.trim());
    //
    //     // Click Add to Cart
    //     await product.locator('button[onclick*="cart.add"]').click();
    // }
    for (let index of randomIndexes) {
        const product = products.nth(index);

        const name = await product.locator('h4 a').textContent();
        selectedProducts.push(name.trim());

        await product.locator('button[onclick*="cart.add"]').click();
    }

    console.log("Selected Products:", selectedProducts);

    // Go to Cart
    await page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');

    // Get cart product names
    const cartProducts = await page.locator('td.text-left a').allTextContents();

    console.log("Cart Products:", cartProducts);

    // Assertion
    for (let product of selectedProducts) {
        if (!cartProducts.includes(product)) {
            throw new Error(`${product} not found in cart ❌`);
        }
    }

    console.log("✅ All selected products are present in cart");

    await browser.close();
})();
