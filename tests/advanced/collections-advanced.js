// collections-advanced.js
// Run: node collections-advanced.js

/**
 * SCENARIO:
 * - You receive product data (like API/UI)
 * - Remove duplicates
 * - Group by category
 * - Calculate totals
 * - Build lookup maps
 */

// ------------------------------
// 🔹 Step 1: Raw data (Array of Objects)
// ------------------------------
const products = [
    { name: "iPhone", category: "Mobile", price: 80000 },
    { name: "Samsung", category: "Mobile", price: 60000 },
    { name: "iPhone", category: "Mobile", price: 80000 }, // duplicate
    { name: "Nike Shoes", category: "Footwear", price: 5000 },
    { name: "Adidas Shoes", category: "Footwear", price: 4000 },
];

// ------------------------------
// 🔹 Step 2: Remove duplicates using Set
// (based on product name)
// ------------------------------
const uniqueProductsMap = new Map();

products.forEach(p => {
    if (!uniqueProductsMap.has(p.name)) {
        uniqueProductsMap.set(p.name, p);
    }
});

const uniqueProducts = Array.from(uniqueProductsMap.values());

console.log("✅ Unique Products:", uniqueProducts);

// ------------------------------
// 🔹 Step 3: Group by category using Map
// ------------------------------
const categoryMap = new Map();

uniqueProducts.forEach(product => {
    if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, []);
    }
    categoryMap.get(product.category).push(product);
});

console.log("\n📦 Grouped by Category:");
for (let [category, items] of categoryMap) {
    console.log(category, "→", items.map(i => i.name));
}

// ------------------------------
// 🔹 Step 4: Calculate total price per category
// ------------------------------
const categoryTotals = new Map();

for (let [category, items] of categoryMap) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    categoryTotals.set(category, total);
}

console.log("\n💰 Category Totals:");
for (let [cat, total] of categoryTotals) {
    console.log(cat, "=", total);
}

// ------------------------------
// 🔹 Step 5: Fast lookup using Map
// ------------------------------
const priceLookup = new Map();

uniqueProducts.forEach(p => {
    priceLookup.set(p.name, p.price);
});

console.log("\n🔍 Price Lookup:");
console.log("iPhone price:", priceLookup.get("iPhone"));

// ------------------------------
// 🔹 Step 6: Validation Example (QA style)
// ------------------------------
if (priceLookup.get("iPhone") === 80000) {
    console.log("\n✅ Price validation passed");
} else {
    console.log("\n❌ Price validation failed");
}