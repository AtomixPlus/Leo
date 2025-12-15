import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import storybookPlugin from "eslint-plugin-storybook";
import importPlugin from "eslint-plugin-unused-imports";

export default [
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.spec.tsx",
    ],
    ignores: ["node_modules", "coverage", "dist"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
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
      globals: { React: "readonly" },
    },
    plugins: {
      "unused-imports": importPlugin,
      "@typescript-eslint": tsPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "prettier": prettierPlugin,
      "storybook": storybookPlugin,
    },
    rules: {
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "storybook/use-storybook-expect": "off",
      "import/default": "off",

      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" },
      ],
    },
  },
  ...storybookPlugin.configs["flat/recommended"],
];
