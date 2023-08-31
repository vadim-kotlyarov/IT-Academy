const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 60000,
  
  use: {
    trace: 'on-first-retry',
    headless: false,
    viewport: { width: 1280, height: 720 }
  },

  projects: [
    {
      name: 'setup',
      testMatch: 'tests/browserState/storage.spec.js',
    },
    {
      name: 'login',
      dependencies: ['setup'],
      testMatch: 'tests/browserState/storageLogin.spec.js',
    },
    {
      name: 'chromium',
      dependencies: ['setup', 'login'],
      use: { ...devices['Desktop Chrome'] },
      testMatch: ['tests/ui/**']
    },
  ],

});

