const { defineConfig } = require('@playwright/test');
//require('./utils/env');

module.exports = defineConfig({
  testDir: './tests',
   timeout: 60000,
  //retries: 1,
  //reporter: 'html',
  workers: 1,
  use: {
    //baseURL: process.env.BASE_URL,
    //storageState: 'storage/admin.json',
    headless: false,
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ]
});




