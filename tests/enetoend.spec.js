import { test, expect } from '@playwright/test';

test('End-to-End Checkout Flow', async ({ page }) => {

    // 🔹 1. Open Application
    await page.goto('https://tutorialsninja.com/demo');

    // 🔹 2. Search Product
    await page.getByPlaceholder('Search').fill('ip');
    await page.locator('#search button').click();

    await page.waitForSelector('.product-thumb');

    // 🔹 3. Get All Products
    const products = page.locator('.product-thumb');
    const count = await products.count();

    // 🔹 4. Pick Random 3 Products
    const randomIndexes = new Set();
    while (randomIndexes.size < 3) {
        randomIndexes.add(Math.floor(Math.random() * count));
    }

    const selectedProducts = [];

    for (let index of randomIndexes) {
        const product = products.nth(index);

        const name = await product.locator('h4 a').textContent();
        selectedProducts.push(name.trim());

        // Add to cart
        await product.locator('button[onclick*="cart.add"]').click();
    }

    console.log('Selected Products:', selectedProducts);

    // 🔹 5. Go to Cart
    await page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');

    const cartProducts = await page.locator('td.text-left a').allTextContents();

    // 🔹 6. Validate Products in Cart
    for (const product of selectedProducts) {
        expect(cartProducts).toContain(product);
    }

    // 🔹 7. Proceed to Checkout
    await page.getByText('Checkout').click();

    // 🔹 8. Guest Checkout
    await page.locator('input[value="guest"]').check();
    await page.locator('#button-account').click();

    // 🔹 9. Fill Billing Details
    await page.fill('#input-payment-firstname', 'Sandeep');
    await page.fill('#input-payment-lastname', 'Test');
    await page.fill('#input-payment-email', 'test123@gmail.com');
    await page.fill('#input-payment-telephone', '9999999999');
    await page.fill('#input-payment-address-1', 'Hyderabad');
    await page.fill('#input-payment-city', 'Hyderabad');
    await page.fill('#input-payment-postcode', '500001');

    await page.selectOption('#input-payment-country', 'India');
    await page.waitForTimeout(1000);
    await page.selectOption('#input-payment-zone', { index: 1 });

    await page.locator('#button-guest').click();

    // 🔹 10. Delivery Method
    await page.locator('#button-shipping-method').click();

    // 🔹 11. Accept Terms
    await page.locator('input[name="agree"]').check();
    await page.locator('#button-payment-method').click();

    // 🔹 12. Confirm Order
    await page.locator('#button-confirm').click();

    // 🔹 13. Validate Order Success
    await expect(page.getByText('Your order has been placed')).toBeVisible();

});