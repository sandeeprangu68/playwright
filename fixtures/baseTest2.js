const { test: base, expect } = require('@playwright/test');

exports.test = base.extend({

    // 🔹 Custom page fixture with error handling
    page: async ({ page }, use, testInfo) => {

        // Listen for browser errors
        page.on('pageerror', (err) => {
            console.log('❌ Page Error:', err.message);
        });

        page.on('requestfailed', (request) => {
            console.log('❌ Request Failed:', request.url());
        });

        try {
            // Provide page to test
            await use(page);

        } catch (error) {
            console.log('❌ Test Step Failed:', error.message);

            // 📸 Screenshot on failure
            await page.screenshot({
                path: `screenshots/${testInfo.title}.png`,
                fullPage: true
            });

            // 📄 Attach to report
            await testInfo.attach('screenshot', {
                path: `screenshots/${testInfo.title}.png`,
                contentType: 'image/png'
            });

            throw error; // rethrow to fail test properly
        }
    }

});

const fs = require('fs');

function log(message) {
    fs.appendFileSync('logs.txt', message + '\n');
}

//module.exports = { log };

module.exports = {
    test: exports.test,
    expect: exports.expect,
    log
};


exports.expect = expect;