import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [`../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`],
  addons: [
    `@storybook/addon-docs`,
    `@storybook/addon-a11y`,
    `@storybook/addon-vitest`,
    `@storybook-community/storybook-dark-mode`,
  ],
  framework: `@storybook/react-vite`,
  // viteFinal: async (config) => {
  //   config.base = "/leo/";
  //   return config;
  // },
};
export default config;
