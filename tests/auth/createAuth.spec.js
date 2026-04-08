// createAuth.js
// const { loginAndSave } = require('../utils/authHelper');
//
// (async () => {
//     await loginAndSave('admin', 'storage/admin.json');
//     await loginAndSave('user', 'storage/user.json');
// })();


// const { test } = require('@playwright/test');
// const { loginAndSave } = require('../utils/authHelper');
// //const { chromium, expect } = require('@playwright/test');
//
// test('Generate auth states', async () => {
//     await loginAndSave('admin', 'storage/admin.json');
//     await loginAndSave('user', 'storage/user.json');
// });

const { test } = require('@playwright/test');
const { loginAndSave } = require('../../utils/authHelper');

test('Generate auth states', async ({ page }) => {

    await loginAndSave(page, 'admin', 'storage/admin.json');
    await loginAndSave(page, 'user', 'storage/user.json');

});