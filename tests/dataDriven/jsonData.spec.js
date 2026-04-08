const { test } = require('@playwright/test');
const data = require('./test-data/users.json');

test('JSON Data Driven', async ({ page }) => {
    for (const user of data) {
        console.log(user.username);
    }
});