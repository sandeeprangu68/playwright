const { defineConfig, devices } = require('@playwright/test');
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
    trace: 'on'
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  projects: [
    {
      name: 'chromium',
      use: {browserName: 'chromium'}
    },
    // 📱 Mobile Chrome (Pixel 5)
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Galaxy S24 landscape'],   // 👈 key line
    //   },


  ]
});




