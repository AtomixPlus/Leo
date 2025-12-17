# Leo <img src="./src/assets/leo.png" width="100" height="150"/>

![Version](https://img.shields.io/badge/Version-0.0.4-blue)
[![Storybook](https://img.shields.io/badge/Storybook-Live-FF4785?logo=storybook)](https://atomixplus.github.io/Leo/) 
![Code_Coverage](https://img.shields.io/badge/Code_Coverage-100%25-brightgreen)
[![Testing](https://github.com/AtomixPlus/Leo/actions/workflows/testing.yml/badge.svg)](https://github.com/AtomixPlus/Leo/actions/workflows/coverage.yml?branch=main)
[![Linting](https://github.com/AtomixPlus/Leo/actions/workflows/linting.yml/badge.svg)](https://github.com/AtomixPlus/Leo/actions/workflows/linting.yml?branch=main)
[![Building](https://github.com/AtomixPlus/Leo/actions/workflows/building.yml/badge.svg)](https://github.com/AtomixPlus/Leo/actions/workflows/building.yml?branch=main)
[![Deploying](https://github.com/AtomixPlus/Leo/actions/workflows/deploying.yml/badge.svg)](https://github.com/AtomixPlus/Leo/actions/workflows/deploying.yml?branch=main)

Thank you for your interest in contributing to this project! 🎉

**We welcome contributions of all kinds — bug fixes, features, documentation, and improvements.**

This guide outlines how to contribute effectively, including branching strategy, pull requests, code quality, and best practices for adding new features or fixing issues. Following these guidelines ensures a smooth workflow for both contributors and maintainers.

<br>


<!--
# ============================================================================
# 📑 TABLE OF CONTENTS 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟
# ============================================================================
#
# This section outlines the **structure of the README** and provides a clear
# roadmap for contributors and users navigating the Leo repository 🦁.
#
# ────────────────────────────────────────────────────────────────────────────
# ✅ OBJECTIVES
# ────────────────────────────────────────────────────────────────────────────
#
# • Make it easy to locate key sections like installation, Storybook, testing, 
#   and contribution guidelines
# • Provide quick links for better navigation and readability
# • Ensure new contributors can understand the workflow without confusion
#
# ────────────────────────────────────────────────────────────────────────────
# 🛠️ BEST PRACTICES
# ────────────────────────────────────────────────────────────────────────────
#
# • Use descriptive section headers
# • Include links to key sections within the README
# • Keep numbering and indentation consistent for readability
# • Add badges or icons to highlight tools, versions, or CI status
#
# ────────────────────────────────────────────────────────────────────────────
# ⚡ IMPORTANT
# ────────────────────────────────────────────────────────────────────────────
#
# • Update the table of contents whenever a new section is added or renamed
# • Ensure links are accurate and reflect the current README structure
# • Maintain consistency with emojis, numbering, and formatting for clarity
#
# ============================================================================
-->
# 📑 Table of Contents

[![Pnpm](https://img.shields.io/badge/Pnpm-v10.26.0-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v20.19.6-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-v7.2.6-informational?style=flat&logo=vite&color=646CFF)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-v4.0.15-informational?style=flat&logo=vite&color=646CFF)](https://vitest.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-v10.1.4-FF4785?style=flat&logo=storybook&logoColor=FF4785)](https://storybook.js.org/)
[![TypeScript](https://img.shields.io/badge/Typescript-v5.9.3-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/)
[![React.js](https://img.shields.io/badge/React.js-v18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)


- 1️⃣ [Installation & Prerequisites](#💻-installation--prerequisites)
- 2️⃣ [Usage](#usage)
- 3️⃣ [Contributing](#🤝-contributing)
  - 3️⃣.1️⃣ [Branching](#🌿-branching)
  - 3️⃣.2️⃣ [Pull Requests](#📝-pull-requests)
  - 3️⃣.3️⃣ [Chores and Minor Fixes](#🧹-chores-and-minor-fixes)
- 4️⃣ [Code Quality](#🧹-code-quality)
  - 4️⃣.1️⃣ [Styling Guidelines](#🎨-styling-guide)
  - 4️⃣.2️⃣ [Linting & Formatting](#🧹-linting--formatting)
- 5️⃣ [Storybook](#📚-storybook)
  - 5️⃣.1️⃣ [Running Storybook](#⚡-running-storybook)
  - 5️⃣.2️⃣ [Building Storybook](#📦-building-storybook)
  - 5️⃣.3️⃣ [Writing Stories](#✏️-writing-stories)
  - 5️⃣.4️⃣ [Using Stories for Tests](#7️⃣-using-stories-for-testing)
  - 5️⃣.5️⃣ [Best Practices](#💡-best-practices)
- 6️⃣ [Testing](#🧪-testing)
  - 6️⃣.1️⃣ [Running Tests](#1️⃣-running-tests)
  - 6️⃣.2️⃣ [Adding New Tests](#2️⃣-adding-new-tests)
  - 6️⃣.3️⃣ [Guidelines for Writing Tests](#3️⃣-guidelines-for-writing-tests)
- 7️⃣ [Workflow Summary](#📌-workflow-summary)
- 8️⃣ [Security and Reporting Issues](#🛡-security-and-reporting-issues)
- 9️⃣ [Final Notes](#✅-final-notes)
- 🔟 [Thank You](#🙌-thank-you)


<br><br>




<!--
# ============================================================================
# ⚙️ PREREQUISITES
# ============================================================================
#
# This section defines the **software and tools required** to contribute to the
# Leo project 🦁. Ensuring these are correctly installed is the first step before
# installing dependencies or running the project.
#
# ────────────────────────────────────────────────────────────────────────────
# ✅ OBJECTIVES
# ────────────────────────────────────────────────────────────────────────────
#
# • Confirm that all contributors use supported versions of Node.js and pnpm
# • Prevent inconsistencies caused by different package managers
# • Ensure a smooth setup for development, testing, and Storybook
#
# ────────────────────────────────────────────────────────────────────────────
# 🛠️ REQUIRED TOOLS
# ────────────────────────────────────────────────────────────────────────────
#
# • **Node.js** - LTS version recommended
# • **pnpm** - The project enforces pnpm via the `packageManager` field; other
#   package managers are not supported
# • Optional: Recommended IDE with TypeScript support for a better developer
#   experience
#
# ────────────────────────────────────────────────────────────────────────────
# ⚡ IMPORTANT
# ────────────────────────────────────────────────────────────────────────────
#
# • Check Node.js version: `node -v`
# • Verify pnpm version: `pnpm -v`
# • Installing the correct versions prevents issues during `pnpm install`,
#   running Storybook, and executing tests
# • Keep tools up to date to match the versions specified in the repository
#
# ============================================================================
-->
# ⚙️ Prerequisites [![Node.js](https://img.shields.io/badge/Node.js-v20.19.6-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/) [![Pnpm](https://img.shields.io/badge/Pnpm-v10.26.0-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) - (LTS recommended)
- [Pnpm](https://pnpm.io/) - (required — other package managers are not supported)

The repository enforces pnpm via the packageManager field.

<br><br>



<!--
# ============================================================================
# ⚡ INSTALLING DEPENDENCIES
# ============================================================================
#
# This section defines how to **set up the Leo project locally** by installing
# all required dependencies and preparing the development environment 🦁.
#
# ────────────────────────────────────────────────────────────────────────────
# ✅ OBJECTIVES
# ────────────────────────────────────────────────────────────────────────────
#
# • Ensure the correct versions of Node.js and pnpm are installed
# • Install all project dependencies consistently across all contributors
# • Prepare the local environment for development, testing, and Storybook
# • Avoid conflicts caused by different package managers or missing dependencies
#
# ────────────────────────────────────────────────────────────────────────────
# 🛠️ BEST PRACTICES
# ────────────────────────────────────────────────────────────────────────────
#
# • Use the version of Node.js specified in the repository (LTS recommended)
# • Always use `pnpm` — other package managers are not supported
# • Install dependencies with:
#
#   ```bash
#   pnpm install
#   ```
#
# • If dependencies are updated, run `pnpm install` again to sync
# • Do not manually modify the lockfile unless absolutely necessary
#
# ────────────────────────────────────────────────────────────────────────────
# ⚡ IMPORTANT
# ────────────────────────────────────────────────────────────────────────────
#
# • Ensure `pnpm` is installed globally: `npm install -g pnpm`
# • Check Node.js version: `node -v`
# • Verify pnpm version: `pnpm -v`
# • Follow the repository’s `packageManager` field to enforce consistency
# • Running `pnpm install` is required before starting Storybook, tests, or development
#
# ============================================================================
-->
# ⚡ Installing Dependencies [![Pnpm](https://img.shields.io/badge/Pnpm-v10.26.0-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)

Leo uses pnpm as the primary package manager. Install all dependencies with:

```bash
# Install dependencies using pnpm
pnpm install
```

If you prefer npm or yarn, you can also use:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

<br><br>
<br><br>



# 📌 Workflow Summary

- ✅ Fork the repository
- ✅ Create a branch from dev
- ✅ Implement changes
- ✅ Write/Update stories and tests
- ✅ Run tests and storybook
- ✅ Commit with clear message
- ✅ Push branch and open PR against dev
- ✅ Address review comments
- ✅ PR merged after approval


<br><br>
<br><br>

<!--
# ============================================================================
# 🌿 BRANCHING
# ============================================================================
#
# This section defines the **branching workflow and naming conventions** used in 
# Leo 🦁 to ensure smooth collaboration, clear history, and easy code reviews.
#
# ────────────────────────────────────────────────────────────────────────────
# ✅ OBJECTIVES
# ────────────────────────────────────────────────────────────────────────────
#
# • Maintain a clean and organized Git history
# • Ensure features, fixes, and chores are developed in isolated branches
# • Facilitate code review and testing before merging to main
# • Reduce merge conflicts and improve collaboration
#
# ────────────────────────────────────────────────────────────────────────────
# 🛠️ BEST PRACTICES
# ────────────────────────────────────────────────────────────────────────────
#
# • **Main branch:** Stable production code; only fully reviewed and tested code is merged
# • **Dev branch:** Primary development branch; all features are merged here first
# • **Feature branches:** Use descriptive names prefixed with work type
#
#   Examples:
#     git checkout -b feature/add-button-component
#     git checkout -b fix/fix-button-disabled-state
#     git checkout -b chore/update-dependencies
#
# • Always branch off from `dev` unless hotfixing production
# • Keep branches small and focused on a single task, feature, or fix
#
# ────────────────────────────────────────────────────────────────────────────
# ⚡ IMPORTANT
# ────────────────────────────────────────────────────────────────────────────
#
# • Merge only after review and successful test runs
# • Use conventional commit messages for clarity (`feat`, `fix`, `chore`, `docs`, `test`, `refactor`)
# • Regularly pull from `dev` to stay up to date and avoid conflicts
#
# ============================================================================
-->
# 🌿 Branching [![Deploying](https://github.com/AtomixPlus/Leo/actions/workflows/deploying.yml/badge.svg)](https://github.com/AtomixPlus/Leo/actions/workflows/deploying.yml?branch=main)

We follow a feature-driven branching workflow:

- **main:** The stable production branch. Only fully tested and reviewed code is merged here.
- **dev:** The main development branch. All feature branches should merge here first for testing and review.
- **Feature branches:** Use descriptive names prefixed with the type of work:

```bash
git checkout -b feature/add-button-component
git checkout -b fix/fix-button-disabled-state
git checkout -b chore/update-dependencies
```
- Always branch from dev.
- Keep branches small and focused on a single feature, fix, or chore.


<br><br>
<br><br>






<!--
# ============================================================================
# 🎨 STYLING GUIDE
# ============================================================================
#
# This section defines how **styles are applied and maintained** across Leo 🦁,
# with a focus on consistency, reusability, and accessibility.
#
# ────────────────────────────────────────────────────────────────────────────
# ✅ OBJECTIVES
# ────────────────────────────────────────────────────────────────────────────
#
# • Ensure a consistent look and feel across all components
# • Promote reusable design patterns and utility classes
# • Maintain responsive and accessible UIs
# • Leverage Tailwind CSS effectively without inline styles
#
# ────────────────────────────────────────────────────────────────────────────
# 🛠️ BEST PRACTICES
# ────────────────────────────────────────────────────────────────────────────
#
# • Use Tailwind CSS utility classes consistently
# • Extract common styles into shared patterns or components
# • Use responsive variants (`sm:`, `md:`, `lg:`) for layouts
# • Apply dark mode variants (`dark:`) where applicable
# • Use theme tokens for colors, spacing, and fonts
# • Keep components small, composable, and easy to extend
# • Verify styles visually in Storybook before merging changes
#
# ────────────────────────────────────────────────────────────────────────────
# ⚡ IMPORTANT
# ────────────────────────────────────────────────────────────────────────────
#
# • Avoid hardcoding styles that break consistency
# • Inline styles should only be used when absolutely necessary
# • Always check accessibility (contrast, focus states, semantic HTML)
# • Update stories or documentation when style patterns change
#
# ============================================================================
-->
# 🎨 Styling Guide [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

- **Tailwind CSS**: Use utility classes consistently; avoid inline styles unless absolutely necessary.
- **Reusable Patterns**: Extract shared styles and components instead of duplicating classes.
- **Responsive**: Use Tailwind’s responsive prefixes to ensure proper layouts on all screen sizes.
- **Dark Mode**: Use dark: variants where applicable; maintain accessibility.
- **Accessibility**: Ensure sufficient contrast, visible focus states, and semantic structure.
- **Component Composition**: Keep components small, composable, and easy to extend.
- **Theme Tokens**: Use theme colors, spacing, and fonts from Tailwind config rather than hard-coded values.
- **Testing Styles**: Verify styles in Storybook for visual correctness and interactive states.

<br><br>
<br><br>






<!--
# ============================================================================
# 🧹 CODE QUALITY
# ============================================================================
#
# This section defines **coding standards, component design principles, and 
# best practices** for maintaining high-quality, maintainable, and reusable code 🦁.
#
# ────────────────────────────────────────────────────────────────────────────
# ✅ OBJECTIVES
# ────────────────────────────────────────────────────────────────────────────
#
# • Ensure all components are fully typed with TypeScript
# • Promote reusable, composable, and functional components
# • Maintain tree-shakeable, dependency-light components
# • Keep documentation and Storybook examples up-to-date
#
# ────────────────────────────────────────────────────────────────────────────
# 🛠️ BEST PRACTICES
# ────────────────────────────────────────────────────────────────────────────
#
# • Use functional components and React hooks
# • Fully type all props and function signatures
# • Keep components small, focused, and modular
# • Avoid unnecessary dependencies or side effects
# • Write Storybook stories and Vitest tests for all components
# • Ensure consistent naming conventions for files, props, and variables
#
# ────────────────────────────────────────────────────────────────────────────
# ⚡ IMPORTANT
# ────────────────────────────────────────────────────────────────────────────
#
# • Updating a component may require updating stories, tests, and documentation
# • Always run linting and tests before merging
# • Follow the existing project patterns to maintain consistency
# • Any breaking changes must be communicated and documented
#
# ============================================================================
-->
# 🧹 Code Quality [![TypeScript](https://img.shields.io/badge/Typescript-v5.9.3-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![React.js](https://img.shields.io/badge/React.js-v18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)

- **TypeScript**: All components must be fully typed.
- **Tailwind CSS**: Use utility classes consistently.
- **Storybook**: Add new stories and update stories.
- **Reusable**: Keep components small and composable
- **Functional**: Prefer functional components and hooks
- **Tree-shakeable**: Components should avoid unnecessary dependencies.
- **Documentation**: Update README and Storybook documentation if applicable.

<br><br>
<br><br>





<!--
# ============================================================================
# 🖼️📚 STORYBOOK
# ============================================================================
#
# This section defines how **Leo components are developed, previewed, documented, 
# and tested in isolation** using Storybook 🦁.
#
# ────────────────────────────────────────────────────────────────────────────
# ✅ OBJECTIVES
# ────────────────────────────────────────────────────────────────────────────
#
# • Enable visual development of components without relying on the app
# • Document components for other developers and team members
# • Provide interactive examples for testing UI behavior and states
# • Serve as a source for automated browser tests via play functions
#
# ────────────────────────────────────────────────────────────────────────────
# 🛠️ BEST PRACTICES
# ────────────────────────────────────────────────────────────────────────────
#
# • Each component has its own story file: `Component.stories.tsx`
# • Use `Meta<typeof Component>` for type-safe story metadata
# • Define `args` for all props and variants of the component
# • Use `play` functions to simulate user interactions and automated tests
# • Group stories logically by component category for easy navigation
#
# ────────────────────────────────────────────────────────────────────────────
# ⚡ IMPORTANT
# ────────────────────────────────────────────────────────────────────────────
#
# • Storybook stories are **the source of truth** for component behavior
# • Play functions double as browser tests, ensuring visual correctness and functionality
# • Keep stories small and focused: one state or variant per story
# • Avoid exposing sensitive data in stories
#
# ============================================================================
-->
# 📚 Storybook [![Storybook](https://img.shields.io/badge/Storybook-v10.1.4-FF4785?style=flat&logo=storybook&logoColor=FF4785)](https://storybook.js.org/)

**Leo** uses Storybook to develop, preview, and document UI components in isolation.

**Storybook lets you:**

- 📦 Build and test components interactively.
- 🔍 Preview different states and variations of components.
- 📝 Document component behavior for other developers.

This section explains how to **create** stories, **run**, **build**, and **deploy** Storybook.

---

<br>


### ⚡ Running Storybook

To run Storybook in development mode and preview changes live:

```bash
pnpm storybook
```
- This starts a local server (usually at [http://localhost:6006](http://localhost:6006)).
- Hot reload is enabled, so updates to components or stories are reflected immediately.
- Use Storybook’s built-in controls to test different props, states, and themes.

---

<br>

### 📦 Building Storybook

To generate a static **Storybook** site that can be deployed (e.g., GitHub Pages):

```bash
pnpm storybook:build
```
- This creates a storybook-static folder in your project root.
- The output can be deployed to a static host for team previews or documentation purposes.

---

<br>


### ✏️ Writing Stories

Each component should have its own story file (<b>Component.stories.tsx</b>) following these conventions:

<details>
  <summary><b>1️⃣ File Structure</b></summary>
  
  The components/ folder contains all reusable UI components for the library. Using Button as an example, each component has its own folder with the following structure:

  ```
    📁 src/
      📁 assets/
      📁 components/
        📁 Button/
          📄 Button.tsx
          📄 Button.test.tsx
          📄 Button.stories.tsx
          📄 index.ts
      📁 tools/
      📄 index.ts
  ```

  #### ✅ Why this structure?
  - Keeps everything about a component cohesive
  - No long file names like **Button.styles.tsx**, **Button.spec.tsx** in the same folder
  - **Storybook**, **tests**, and **components** live side-by-side
  
  <br>
</details>


<details>
  <summary><b>2️⃣ Meta Definition</b></summary>

  - Use `Meta<typeof Component>` from `@storybook/react-vite`.
  - Include title, component, parameters, tags, and argTypes.
  - Use `satisfies Meta<typeof Component>` to ensure type safety.

  ```ts
    import Button from './Button';

    const meta = {
      title: "Leo/Button",
      component: Button,
      parameters: {
        layout: "centered",
      },
      tags: ["autodocs"],
      argTypes: {
        propName: {
          control: "select",
          options: ["option1", "option2"],
        },
      },
    } satisfies Meta<typeof ComponentName>;

    export default meta;

  ```

  <br>
</details>




<details>
  <summary><b>3️⃣ Helper Functions</b></summary>

  - ✅  Reusable functions for common assertions help reduce repetition.
  - ✅  **Example:** `assertComponentExists` for checking if component rendered.

  ```ts
  const assertButtonExists = async (canvasElement: HTMLElement) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    return button;
  };
  ```

  <br>
</details>




<details>
  <summary><b>4️⃣ Defining Stories</b></summary>

  - ✅ Each story defines args for props.
  - ✅ Optional play function for interactive tests using canvasElement.
  - ✅ Use within and userEvent to simulate user interactions.
  - ✅ Write Play functions to automate interaction testing for stories.

  ```ts
  export const Default: Story = {
    args: {
      children: "Button",
    },
    play: async ({ canvasElement }) => {
      const button = await assertButtonExists(canvasElement);
      await expect(button).toHaveTextContent("Button");
    },
  };
  ```

  <br>
</details>


<details>
  <summary><b>5️⃣ Variant Stories</b></summary>

  - ✅ Follow a consistent naming scheme for variants (e.g., **Secondary**, **Destructive**, **Outline**).
  - ✅ Keep play functions simple and focused on component-specific behavior.

  ```ts
  export const Secondary: Story = {
    args: {
      variant: "secondary",
      children: "Secondary",
    },
    play: async ({ canvasElement }) => {
      const button = await assertButtonExists(canvasElement);
      await userEvent.click(button);
      await expect(button).toHaveTextContent("Secondary");
    },
  };
  ```

  <br>
</details>




<details>
  <summary><b>6️⃣ Size/State Stories</b></summary>

  - ✅ Include stories for sizes (Small, Large) and states (Disabled).
  - ✅ Ensure play verifies accessibility props like isDisabled.

  ```ts
  export const Disabled: Story = {
    args: {
      isDisabled: true,
      children: "Disabled",
    },
    play: async ({ canvasElement }) => {
      const button = await assertButtonExists(canvasElement);
      await expect(button).toBeDisabled();
    },
  };
  ```

  <br>
</details>



<details>
  <summary><b>7️⃣ Using Stories for Testing</b></summary>

  Leo uses the Storybook stories as the source for automated browser tests:

  - ✅ Each play function can be executed by Vitest or @storybook/test to validate interactions.
  - ✅ Writing robust play functions ensures both documentation and automated tests are accurate.
  - ✅ Test stories should cover variants, sizes, and states (e.g., disabled, hover, focus).

  **Example:** Testing a button click:

  ```ts
  export const Clickable: Story = {
    args: { children: "Click Me" },
    play: async ({ canvasElement }) => {
      const button = await assertComponentExists(canvasElement);
      await userEvent.click(button);
      await expect(button).toHaveTextContent("Click Me");
    },
  };
  ```

  <br>
</details>



<details>
  <summary><b>8️⃣ Template Example for New Components</b></summary>

  Key points for writing stories:

  - **Meta definition:** Use satisfies `Meta<typeof Component>` for type safety.
  - **Args:** Define props for the component, including variants and sizes.
  - **Play functions:** Use within(canvasElement) and userEvent to simulate interactions.
  - **Reusable helpers:** Define assertion functions like assertComponentExists for consistency.
  - **Naming:** Keep story names descriptive (Default, Secondary, Disabled) and aligned with variants or states.

  <br>

  ```ts
  import type { Meta, StoryObj } from "@storybook/react-vite";
  import { ComponentName } from "./index";
  import { within, expect, userEvent } from "storybook/test";

  const meta = {
    title: "Leo/ComponentName",
    component: ComponentName,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
      propName: { control: "text" },
      variant: { control: "select", options: ["default", "secondary"] },
    },
  } satisfies Meta<typeof ComponentName>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  const assertComponentExists = async (canvasElement: HTMLElement) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button"); // or appropriate role
    await expect(el).toBeInTheDocument();
    return el;
  };

  export const Default: Story = {
    args: { children: "Default" },
    play: async ({ canvasElement }) => {
      const el = await assertComponentExists(canvasElement);
      await expect(el).toHaveTextContent("Default");
    },
  };

  export const Secondary: Story = {
    args: { variant: "secondary", children: "Secondary" },
    play: async ({ canvasElement }) => {
      const el = await assertComponentExists(canvasElement);
      await userEvent.click(el);
      await expect(el).toHaveTextContent("Secondary");
    },
  };
  ```

  <br>
</details>


### 💡 Best Practices
- ✅ Group stories by component categories for easy navigation.
- ✅ Keep stories small and focused: each story should demonstrate a single state or behavior.
- ✅ Avoid including sensitive data in stories.
- ✅ Use Storybook addons for a11y checks, viewport testing, and controls to improve documentation quality.


<br><br>
<br><br>



<!-- 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 -->

# 🧪 Testing [![Vitest](https://img.shields.io/badge/Vitest-v4.0.15-informational?style=flat&logo=vite&color=646CFF)](https://vitest.dev/) [![Testing](https://github.com/AtomixPlus/Leo/actions/workflows/testing.yml/badge.svg)](https://github.com/AtomixPlus/Leo/actions/workflows/coverage.yml?branch=main) ![Code_Coverage](https://img.shields.io/badge/Code_Coverage-100%25-brightgreen) 

Leo uses Vitest and React Testing Library, along with Storybook stories, to provide a robust testing environment. Browser-based tests leverage the existing Storybook stories to ensure that components behave as expected in real-world usage. This approach ensures consistency between development, documentation, and automated testing.



### ⚡ Running Tests

To run tests in development mode and preview errors live:

```bash
pnpm test
```

Run tests with code coverage:
```bash
pnpm test --coverage
```

Run tests with the user interface:
```bash
pnpm test --ui
```

<br>

### ✏️ Writing Tests

This section gives contributors everything they need to write proper tests: unit tests, component tests, story-based tests, mocks, browser tests, and best practices.

Each component should have its own test file (<b>Component.test.tsx</b>) following these conventions:

<details>
  <summary><b>1️⃣ File Structure</b></summary>
  
  - Test files should mirror the structure of your source code for clarity.
  - Use the .spec.ts or .test.ts suffix.

  ```
    📁 src/
      📁 assets/
      📁 components/
        📁 Button/
          📄 Button.tsx
          📄 Button.test.tsx
          📄 Button.stories.tsx
          📄 index.ts
      📁 tools/
      📄 index.ts
  ```
  - Unit tests live alongside the implementation.
  - Larger integration tests or story-based tests can live under tests/.

  #### ✅ Why this structure?
  - Keeps everything about a component cohesive
  - No long file names like **Button.test.tsx**, **Button.spec.tsx** in the same folder
  - **Storybook**, **tests**, and **components** live side-by-side
  
  <br>
</details>


<details>
  <summary><b>2️⃣ Writing Unit Tests</b></summary>
  
  Unit tests are small, isolated tests that verify a single function or component works as expected.
  
  **Example**: Simple utility function

  ```ts
  import { describe, it, expect } from 'vitest';
  import { sum } from '@/utils/sum';

  describe('sum utility', () => {
    it('adds two numbers correctly', () => {
      expect(sum(2, 3)).toBe(5);
    });

    it('returns the number itself if only one argument is provided', () => {
      expect(sum(4)).toBe(4);
    });
  });

  ```

  #### Guidelines:

  - Use describe blocks to group related tests.
  - Each test should have a clear, descriptive name.
  - Test both expected and edge cases.
  - Keep tests small and focused.
  
  <br>
</details>



<details>
  <summary><b>3️⃣ Testing React Components</b></summary>
  
  Use Happy DOM for DOM testing. For React, you can use @testing-library/react.

  **Example**: React component test

  ```ts
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import Button from '@/components/Button/Button';

  describe('Button component', () => {
    it('renders with correct text', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies primary class when primary prop is true', () => {
      render(<Button primary>Click me</Button>);
      expect(screen.getByText('Click me')).toHaveClass('primary');
    });
  });
  ```
  
  <br>
</details>



<details>
  <summary><b>4️⃣ Storybook Stories as Tests</b></summary>
  
  All Storybook stories can automatically run as tests using storybookTest.

  **Writing story-based tests**:

  ```ts
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import Button from '@/components/Button/Button';

  describe('Button component', () => {
    it('renders with correct text', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies primary class when primary prop is true', () => {
      render(<Button primary>Click me</Button>);
      expect(screen.getByText('Click me')).toHaveClass('primary');
    });
  });
  ```

  - Storybook stories are automatically converted to tests.
  - The tests run in Happy DOM or Playwright depending on your config.
  - This ensures your UI components are always renderable and functional.
  <br>
</details>



<details>
  <summary><b>5️⃣ Mocking and Dependencies</b></summary>
  
  - Mock APIs and network requests to isolate the unit under test.
  - Vitest supports vi.fn() for mocks and spies:

  ```ts
  import { vi } from 'vitest';

  const mockFetch = vi.fn(() => Promise.resolve({ data: 'test' }));

  ```

  - Use dependency injection where possible for easier testing.

  <br>
</details>




<details>
  <summary><b>6️⃣ Writing Browser Tests</b></summary>
  
  For components that require a real browser environment, use Playwright:

  ```ts
  test('Button click triggers handler', async ({ page }) => {
    await page.setContent('<button id="btn">Click</button>');
    const button = await page.$('#btn');
    await button?.click();
    // assert click effects here
  });
  ```

  - Playwright tests run headless by default.
  - Useful for testing interactive UI and Storybook stories.

  <br>
</details>




<details>
  <summary><b>7️⃣ Coverage Tips</b></summary>
  
  - Use `--coverage` to see which parts of the code are untested:

  ```bash
  pnpm test --coverage
  ```

  - Aim for high coverage on core logic and critical components, not necessarily every minor helper.

  <br>
</details>



### 💡 Best Practices
- ✅ Name tests clearly: "should do X when Y"
- ✅ Keep tests isolated and deterministic.
- ✅ Avoid testing implementation details; test behavior.
- ✅ Run tests before committing: npm run test.
- ✅ Add tests for new features, bug fixes, and components.
- ✅ Prefer Storybook stories as tests for UI components for faster maintenance.

<br><br>
<br><br>


<!--
 # ============================================================================
 # 🛠️📝 LINTING & FORMATTING
 # ============================================================================
 #
 # This section defines the **code style, formatting rules, and linting practices**
 # contributors must follow to maintain consistency and quality across Leo 🦁.
 #
 # ────────────────────────────────────────────────────────────────────────────
 # ✅ OBJECTIVES
 # ────────────────────────────────────────────────────────────────────────────
 #
 # • Enforce consistent coding patterns
 # • Prevent runtime issues caused by unsafe types or bad practices
 # • Maintain readability, clarity, and maintainability
 #
 # ────────────────────────────────────────────────────────────────────────────
 # 🛡️ RULES ENFORCED
 # ────────────────────────────────────────────────────────────────────────────
 #
 # • ESLint: React conventions, unused variables, imports, hooks rules
 # • TypeScript ESLint: Strong typing, avoid `any`, prevent unsafe patterns
 # • Prettier: Auto-formatting of code (indentation, line breaks, quotes)
 # • No console logs or debugging artifacts in production 💥
 #
 # ────────────────────────────────────────────────────────────────────────────
 # 🏷️ NAMING & STYLE GUIDELINES
 # ────────────────────────────────────────────────────────────────────────────
 #
 # • Use descriptive, consistent names for variables and functions
 # • Follow camelCase for JS/TS identifiers
 # • Prefer explicit types over implicit or `any`
 # • Keep functions and components small and focused
 #
 # ────────────────────────────────────────────────────────────────────────────
 # ⚠️ IMPORTANT
 # ────────────────────────────────────────────────────────────────────────────
 #
 # • Linting is enforced in CI — PRs cannot be merged if lint fails ⚠️
 # • Always run `pnpm lint` and `pnpm lint --fix` locally before committing
 # • Rules may be updated; follow updates in `.eslintrc` and `prettier.config.js`
 #
 # ============================================================================
-->

# 🧹 Linting & Formatting [![TypeScript](https://img.shields.io/badge/Typescript-v5.9.3-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/) [![Linting](https://github.com/AtomixPlus/Leo/actions/workflows/linting.yml/badge.svg)](https://github.com/AtomixPlus/Leo/actions/workflows/linting.yml?branch=main)


Leo enforces consistent code style and best practices using ESLint, TypeScript rules, and Prettier. All contributions must pass linting before being merged.


## ✅ Linting Rules

- ESLint: Enforces code quality, best practices, and React conventions
- TypeScript ESLint: Prevents unsafe types, unused variables, and invalid patterns
- React Hooks: Hooks rules are strictly enforced
- Imports: Keep imports clean, ordered, and unused imports removed
- No Console: Avoid console.log in production code
<br>

## 🧪 Running Lint

Run linting before opening a pull request
```bash
pnpm lint
```

To automatically fix common issues:
```bash
pnpm lint --fix
```
<br>

## 🎯 Formatting Guidelines
- Prettier handles formatting automatically
- Do not manually format files
- Let your editor or CI apply formatting rules
- Formatting issues will fail CI checks
<br>

## 🚫 CI Enforcement
- Linting runs on every pull request
- Pull requests cannot be merged if linting fails
- Keep commits clean and focused to avoid lint noise
<br>

## 💡 Best Practices
- Fix lint warnings, not just errors
- Prefer explicit types over any
- Follow existing patterns—consistency matters
- If you need to disable a rule, document why




<br><br>
<br><br>




# 📝 Pull Requests [![Pull Requests](https://img.shields.io/github/issues-pr/AtomixPlus/Leo?branch=main)](https://github.com/AtomixPlus/Leo/pulls) ![Closed PRs](https://img.shields.io/github/issues-pr-closed/AtomixPlus/Leo?branch=main)


### Creating a PR

<details>
  <summary><b>1️⃣ Fork the repository and clone your fork locally.</b></summary>

  ```bash
  git checkout -b feature/my-new-component
  ```
  <br>
</details>



<details>
  <summary><b>2️⃣ Create a branch for your work:</b></summary>

  ```bash
  git checkout -b feature/my-new-component
  ```
  <br>
</details>


<details>
  <summary><b>3️⃣ Make your changes:</b></summary>

  - Add or update components.
  - Write or update stories in Storybook.
  - Add or update tests in Vitest.

  <br>
</details>

<details>
  <summary><b>4️⃣ Test your changes locally:</b></summary>

  ```bash
  pnpm install
  pnpm test
  pnpm storybook
  ```

  <br>
</details>


<details>
  <summary><b>5️⃣ Commit changes with descriptive messages:</b></summary>
  
  ```bash
  feat(Button): add new variant "ghost"
  fix(InputField): correct validation on empty input
  ```
  Follow conventional commit style where possible: feat, fix, chore, docs, test, refactor.

  <br>
</details>


<details>
  <summary><b>6️⃣ Push your branch:</b></summary>
  
  ```bash
  git push origin feature/my-new-component
  ```

  <br>
</details>


<details>
  <summary><b>7️⃣ Open a PR against the dev branch on the main repository.</b></summary>
  
  ```bash
  git push origin feature/my-new-component
  ```

  <br>
</details>



<br>




<br><br>


# 🧹 Chores and Minor Fixes

- For small changes (e.g., fixing typos, updating README, or bumping versions):
- Use the chore/ prefix in branch names.

Commit with messages like:

```bash
chore(readme): fix typo in installation instructions
chore(deps): update tailwindcss to v4.1.17
```

<br><br>



# 🛡 Security and Reporting Issues

- Report any security vulnerability to the maintainers via email: ijeffrouk@gmail.com.
- Do not open a public issue for security vulnerabilities.

<br><br>


# ✅ Final Notes

- Contributions are welcome from everyone.
- Respect the code style and testing practices.
- Ensure PRs are small, focused, and well-tested.
- Storybook is the source of truth for component behavior and documentation.

<br><br>


# 🙌 Thank You

Your contributions make **Leo** better for everyone.

Whether you’re fixing a typo or building a new component — we appreciate your time and effort.

**Happy coding!** 🚀
