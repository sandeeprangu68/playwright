const { test } = require('@playwright/test');
const { readExcel } = require('../utils/excelReader');

test('Excel Data Driven', async ({ page }) => {
    const data = readExcel('tests/test-data/testData.xlsx');

    for (const row of data) {
        console.log(row.username);
    }
});