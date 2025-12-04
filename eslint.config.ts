import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import storybookPlugin from "eslint-plugin-storybook";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["node_modules"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: {
          extends: "./tsconfig.json",
          include: [
            "src",
            ".storybook",
            "eslint.config.ts",
            "vite.config.ts",
            "vitest.config.ts",
            "vitest.setup.ts",
            "vitest.shims.d.ts",
            "global.d.ts",
          ],
        },
        tsconfigRootDir: __dirname,
      },
      globals: { React: "readonly" },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      prettier: prettierPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  ...storybookPlugin.configs["flat/recommended"],
];
