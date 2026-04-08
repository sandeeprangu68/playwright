const { test, expect } = require('/fixtures/baseTest');

test('Basic Fixture Example', async ({ appName }) => {
    console.log(appName);

    expect(appName).toContain('QAFox');
});