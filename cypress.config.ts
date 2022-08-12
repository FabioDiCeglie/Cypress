import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    // @ts-ignore
    "cypress-watch-and-reload": {
      watch: ["src/**/*"],
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require("cypress-watch-and-reload/plugins")(on, config);
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    viewportHeight: 1000,
    viewportWidth: 1000,
  },
});
