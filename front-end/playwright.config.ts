import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [['json', { outputFile: './test-results/test-results.json' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'on',
  },
  timeout: 120000
};

export default config;