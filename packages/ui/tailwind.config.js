import sharedConfig from "@repo/tailwind-config";

module.exports = {
  ...sharedConfig,
  content: ["./src/**/*.{js,jsx,ts,tsx}", ...sharedConfig.content],
};
