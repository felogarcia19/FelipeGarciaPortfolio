import dotenv from 'dotenv';
import { defineConfig } from 'vitest/config';
import AllureVitestReporter from 'allure-vitest/reporter';

dotenv.config();

export default defineConfig({
  test: {
    include: ['tests/**/*.test.js'],
    environment: 'node',
    globals: true,
    testTimeout: 30000,
    hookTimeout: 30000,
    reporters: [
      'default',
      new AllureVitestReporter({ resultsDir: 'allure-results' }),
    ],
  },
});