// collections-advanced.spec.js
// Run: npx playwright test collections-advanced.spec.js

const { test, expect } = require('@playwright/test');

test('Advanced Collections in Playwright', async ({ page }) => {

    // ------------------------------
    // 🔹 Step 1: Open real site
    // ------------------------------
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // ------------------------------
    // 🔹 Step 2: Capture product names (Array)
    // ------------------------------
    const productNames = await page.locator('.inventory_item_name').allTextContents();

    console.log("📦 Products:", productNames);

    // ------------------------------
    // 🔹 Step 3: Remove duplicates (Set)
    // ------------------------------
    const uniqueNames = new Set(productNames);

    console.log("✅ Unique Products:", [...uniqueNames]);

    // ------------------------------
    // 🔹 Step 4: Create Map (Product → Price)
    // ------------------------------
    const priceMap = new Map();

    const products = page.locator('.inventory_item');

    const count = await products.count();

    for (let i = 0; i < count; i++) {
        const product = products.nth(i);

        const name = await product.locator('.inventory_item_name').textContent();
        const priceText = await product.locator('.inventory_item_price').textContent();

        // remove $ and convert to number
        const price = parseFloat(priceText.replace('$', ''));

        priceMap.set(name, price);
    }

    console.log("\n💰 Product Price Map:");
    console.log(priceMap);

    // ------------------------------
    // 🔹 Step 5: Find highest price product
    // ------------------------------
    let maxPrice = 0;
    let maxProduct = "";

    for (let [name, price] of priceMap) {
        if (price > maxPrice) {
            maxPrice = price;
            maxProduct = name;
        }
    }

    console.log(`🔥 Highest Price Product: ${maxProduct} = ${maxPrice}`);

    // ------------------------------
    // 🔹 Step 6: Add highest price product to cart
    // ------------------------------
    const targetProduct = page.locator('.inventory_item')
        .filter({ hasText: maxProduct });

    await targetProduct.getByRole('button', { name: 'Add to cart' }).click();

    // ------------------------------
    // 🔹 Step 7: Validate cart
    // ------------------------------
    await page.click('.shopping_cart_link');

    await expect(page.locator('.inventory_item_name'))
        .toHaveText(maxProduct);

});