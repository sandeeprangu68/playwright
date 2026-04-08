const base = require('@playwright/test');

exports.test = base.test.extend({

    userPage: async ({ browser }, use) => {
        const context = await browser.newContext({
            storageState: 'storage/user.json'
        });

        const page = await context.newPage();

        await use(page);

        await context.close();
    }

});

exports.expect = base.expect;