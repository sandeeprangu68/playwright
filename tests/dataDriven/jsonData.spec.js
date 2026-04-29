const { test } = require('@playwright/test');
const data = require('tests/test-data/testData.xlsx');

test('JSON Data Driven', async ({ page }) => {
    for (const user of data) {
        console.log(user.username);
    }
});