// collection.spec.js

const { test, expect } = require('@playwright/test');

test('Collections: Array + Set + Map with Playwright', async ({ page }) => {
//
//     // ===========================================================
//     // 🔹 STEP 1: Open application
//     // ===========================================================
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
//
//
//     // ===========================================================
//     // 🔹 STEP 2: ARRAY (UI Data Capture)
//     // ===========================================================
//
    // Capture all product names → returns ARRAY
    const productNames = await page.locator('.inventory_item_name').allTextContents();

    console.log("📦 Products:", productNames);


    // ===========================================================
    // 🔹 ARRAY METHODS
    // ===========================================================

    // 🔹 length → total items
    console.log("Total Products:", productNames.length);

    // 🔹 forEach → iterate
    productNames.forEach(p => console.log("Product:", p));

    // 🔹 map → transform data
    const upperNames = productNames.map(p => p.toUpperCase());
    console.log("Uppercase:", upperNames);

    // 🔹 filter → conditional data
    const filtered = productNames.filter(p => p.includes("Backpack"));
    console.log("Filtered:", filtered);

    // 🔹 find → first match
    const found = productNames.find(p => p.includes("Bike"));
    console.log("Found:", found);

//     // 🔹 some → at least one match
//     const hasItem = productNames.some(p => p.includes("Bolt"));
//     console.log("Has Bolt:", hasItem);
//
//     // 🔹 every → all match
//     const allContain = productNames.every(p => typeof p === 'string');
//     console.log("All strings:", allContain);
//
//     // 🔹 includes → check existence
//     console.log("Includes Backpack:", productNames.includes("Sauce Labs Backpack"));
//
//     // 🔹 reduce → aggregation
//     const pricesText = await page.locator('.inventory_item_price').allTextContents();
//
//     const prices = pricesText.map(p => parseFloat(p.replace('$', '')));
//
//     const total = prices.reduce((sum, price) => sum + price, 0);
//     console.log("Total Price:", total);
//
//     // 🔹 sort → sorting
//     const sorted = [...prices].sort((a, b) => a - b);
//     console.log("Sorted Prices:", sorted);
//
//     // 🔹 reverse
//     console.log("Reversed:", [...sorted].reverse());
//
//
    // ===========================================================
    // 🔹 SET (UNIQUE VALUES)
    // ===========================================================

    // Remove duplicates
    const uniqueProducts = new Set(productNames);

    console.log("Unique Products:", uniqueProducts);

    // 🔹 add → add value
    uniqueProducts.add("New Product");

    // 🔹 has → check existence
    console.log("Has Backpack:", uniqueProducts.has("Sauce Labs Backpack"));

    // 🔹 delete → remove value
    uniqueProducts.delete("New Product");

    // 🔹 size → count
    console.log("Set Size:", uniqueProducts.size);

    // 🔹 iteration
    for (let item of uniqueProducts) {
        console.log("Set Item:", item);
    }

    // Convert Set → Array (for processing)
    const uniqueArray = [...uniqueProducts];


//     // ===========================================================
//     // 🔹 MAP (KEY-VALUE STORAGE)
//     // ===========================================================
//
//     const productMap = new Map();
//
//     const products = page.locator('.inventory_item');
//     const count = await products.count();
//
//     for (let i = 0; i < count; i++) {
//
//         const product = products.nth(i);
//
//         const name = await product.locator('.inventory_item_name').textContent();
//         const priceText = await product.locator('.inventory_item_price').textContent();
//
//         const price = parseFloat(priceText.replace('$', ''));
//
//         // 🔹 set → store key-value
//         productMap.set(name, price);
//     }
//
//     console.log("Product Map:", productMap);
//
//     // 🔹 get → retrieve value
//     console.log("Backpack Price:", productMap.get("Sauce Labs Backpack"));
//
//     // 🔹 has → check key
//     console.log("Has Bike:", productMap.has("Sauce Labs Bike Light"));
//
//     // 🔹 delete → remove key
//     productMap.delete("Dummy");
//
//     // 🔹 size → total entries
//     console.log("Map Size:", productMap.size);
//
//     // 🔹 iteration
//     for (let [name, price] of productMap) {
//         console.log(name, "=", price);
//     }
//
//     // 🔹 keys()
//     console.log("Keys:", [...productMap.keys()]);
//
//     // 🔹 values()
//     console.log("Values:", [...productMap.values()]);
//
//     // 🔹 entries()
//     console.log("Entries:", [...productMap.entries()]);
//
//
//     // ===========================================================
//     // 🔹 REAL SCENARIO: FIND HIGHEST PRICE PRODUCT
//     // ===========================================================
//
//     let maxPrice = 0;
//     let maxProduct = "";
//
//     for (let [name, price] of productMap) {
//         if (price > maxPrice) {
//             maxPrice = price;
//             maxProduct = name;
//         }
//     }
//
//     console.log("🔥 Highest Product:", maxProduct, maxPrice);
//
//     // Add highest price product to cart
//     const target = page.locator('.inventory_item')
//         .filter({ hasText: maxProduct });
//
//     await target.getByRole('button', { name: 'Add to cart' }).click();
//
//     await page.click('.shopping_cart_link');
//
//     await expect(page.locator('.inventory_item_name')).toHaveText(maxProduct);
//
});