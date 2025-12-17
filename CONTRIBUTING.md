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


<br><br>

<!-- 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 -->

# 📑 Table of Contents

[![Pnpm](https://img.shields.io/badge/Pnpm-v1.26.0-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v2.19.6-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-v7.2.6-informational?style=flat&logo=vite&color=646CFF)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-v4.0.15-informational?style=flat&logo=vite&color=646CFF)](https://vitest.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-v10.1.4-FF4785?style=flat&logo=storybook&logoColor=FF4785)](https://storybook.js.org/)
[![TypeScript](https://img.shields.io/badge/Typescript-v5.9.3-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/)
[![React.js](https://img.shields.io/badge/React.js-v18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

- 1️⃣ [Installation](#💻-Installation)
- 2️⃣ [Usage](#usage)
- 3️⃣ [Contributing](#🤝-Contributing)
  - 1️⃣.1️⃣ [Testing](https://github.com/AtomixPlus/Leo?tab=contributing-ov-file#-testing)
    - [Running Tests](#1️⃣-running-tests)
    - [Adding New Tests](#2️⃣-adding-new-tests)
    - [Guidelines for Writing Tests](#3️⃣-guidelines-for-writing-tests)
  - 1️⃣.2️⃣ [Storybook](https://github.com/AtomixPlus/Leo?tab=contributing-ov-file#-storybook)
    - [Running Storybook](#1️⃣-running-storybook)
    - [Building Storybook](#2️⃣-building-storybook)
    - [Writing Stories](#3️⃣-writing-stories)
    - [Tips](#4️⃣-tips)
- [License](#📜-License)


<br><br>

# ⚙️ Prerequisites
Make sure you have the following installed:

- [![Node.js](https://img.shields.io/badge/Node.js-v20.19.6-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/) - (LTS recommended)
- [![Pnpm](https://img.shields.io/badge/Pnpm-v10.26.0-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/) - (required — other package managers are not supported)

The repository enforces pnpm via the packageManager field.

<br><br>


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


# 🧹 Code Quality [![TypeScript](https://img.shields.io/badge/Typescript-v5.9.3-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![React.js](https://img.shields.io/badge/React.js-v18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)

- **TypeScript**: All components must be fully typed.
- **Tailwind CSS**: Use utility classes consistently.
- **Storybook**: Add new stories and update stories.
- **Reusable**: Keep components small and composable
- **Functional**: Prefer functional components and hooks
- **Tree-shakeable**: Components should avoid unnecessary dependencies.
- **Documentation**: Update README and Storybook documentation if applicable.

<br><br>


# 🌿 Branching Strategy

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


# 📝 Pull Requests (PRs)

### Creating a PR

1️⃣ Fork the repository and clone your fork locally.
2️⃣ Create a branch for your work:

```bash
git checkout -b feature/my-new-component
```
3️⃣ Make your changes:
- Add or update components.
- Write or update stories in Storybook.
- Add or update tests in Vitest.


4️⃣ Test your changes locally:

```bash
pnpm install
pnpm test
pnpm storybook
```

5️⃣ Commit changes with descriptive messages:
```bash
feat(Button): add new variant "ghost"
fix(InputField): correct validation on empty input
```
Follow conventional commit style where possible: feat, fix, chore, docs, test, refactor.

6️⃣ Push your branch:
```bash
git push origin feature/my-new-component
```

7️⃣ Open a PR against the dev branch on the main repository.


<br>


# 📌 Workflow Summary

- [x] Fork the repository
- [x] Create a branch from dev
- [x] Implement changes
- [x] Write/Update stories and tests
- [x] Run tests and storybook
- [x] Commit with clear message
- [x] Push branch and open PR against dev
- [x] Address review comments
- [x] PR merged after approval


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

Each component should have its own story file (**Component.stories.tsx**) following these conventions:

#### 1️⃣ File Structure

Using Button as an example:

```
  📁 src/
    📁 assets/
    📁 components/
      📁 Button/
        📄 Button.tsx            → the component
        📄 Button.test.tsx       → Vitest + RTL test
        📄 Button.stories.tsx    → Storybook stories
        📄 index.ts              → re-export component
    📁 tools/
    📄 index.ts
```

##### ✔️ Why this structure?
- Keeps everything about a component cohesive
- No long file names like Button.styles.tsx, Button.spec.tsx in the same folder
- Storybook, tests, and component live side-by-side

---

<br>


#### 2️⃣ Meta Definition
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


#### 3️⃣ Helper Functions (Optional but Recommended)
- ✔️  Reusable functions for common assertions help reduce repetition.
- ✔️  **Example:** `assertComponentExists` for checking if component rendered.

```ts
const assertButtonExists = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await expect(button).toBeInTheDocument();
  return button;
};
```

<br>


4️⃣ Defining Stories

- ✔️ Each story defines args for props.
- ✔️ Optional play function for interactive tests using canvasElement.
- ✔️ Use within and userEvent to simulate user interactions.
- ✔️ Write Play functions to automate interaction testing for stories.

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


#### 5️⃣ Variant Stories

- ✔️ Follow a consistent naming scheme for variants (e.g., **Secondary**, **Destructive**, **Outline**).
- ✔️ Keep play functions simple and focused on component-specific behavior.

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


#### 6️⃣ Size/State Stories

- ✔️ Include stories for sizes (Small, Large) and states (Disabled).
- ✔️ Ensure play verifies accessibility props like isDisabled.

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




#### 7️⃣ Using Stories for Testing

Leo uses the Storybook stories as the source for automated browser tests:

- ✔️ Each play function can be executed by Vitest or @storybook/test to validate interactions.
- ✔️ Writing robust play functions ensures both documentation and automated tests are accurate.
- ✔️ Test stories should cover variants, sizes, and states (e.g., disabled, hover, focus).

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




### 💡 Tips
- ✔️ Group stories by component categories for easy navigation.
- ✔️ Keep stories small and focused: each story should demonstrate a single state or behavior.
- ✔️ Avoid including sensitive data in stories.
- ✔️ Use Storybook addons for a11y checks, viewport testing, and controls to improve documentation quality.













### Template Example for New Components

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


Best Practices for Leo

Always include a Default story.

Use play for interactive tests to validate user behavior.

ArgTypes should reflect all configurable props.

Keep helper assertions in a separate utils file if they are reused across multiple stories.

Match story names to variant/prop values for clarity in Storybook UI.

Use satisfies Meta for type safety and autocomplete in IDE.

Ensure every story can be used as a test in browser tests


















<!-- 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 -->

# 🧪 Testing

Leo uses Vitest and React Testing Library, along with Storybook stories, to provide a robust testing environment. Browser-based tests leverage the existing Storybook stories to ensure that components behave as expected in real-world usage. This approach ensures consistency between development, documentation, and automated testing.





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


# 📌 Workflow Summary

- [x] Fork the repository
- [x] Create a branch from dev
- [x] Implement changes
- [x] Write/Update stories and tests
- [x] Run tests and storybook
- [x] Commit with clear message
- [x] Push branch and open PR against dev
- [x] Address review comments
- [x] PR merged after approval

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
