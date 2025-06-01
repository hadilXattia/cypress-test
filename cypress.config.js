const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://monsiteweb.com.tn/gestion-conge-test',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      env: {
      login: 'testuser',
      password: '[jjZJVTxxa71'
    }
  },
});
