import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'src/cypress/fixtures',
  pluginFile: 'src/cypress/plugins/index.js',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/cypress/support/index.js',
  },
});
