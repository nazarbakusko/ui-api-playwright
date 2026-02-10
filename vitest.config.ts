import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.{js,ts}'],
    exclude: ['**/*.jest.test.{js,ts}', 'node_modules/**'],
    globals: true,
    environment: 'node'
  }
});