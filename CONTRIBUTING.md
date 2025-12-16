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

This guide explains how to contribute effectively, how the project is structured, and what to expect when working with the repository. We welcome contributions to improve this component library! Whether you want to add new components, fix bugs, improve documentation, or enhance tests, your help is appreciated.




<br>


<!-- 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 -->

# 📑 Table of Contents

[![Pnpm](https://img.shields.io/badge/Pnpm-v10.26.0-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v20.19.6-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/)
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


<br>


# ⚙️ Prerequisites
[![Pnpm](https://img.shields.io/badge/Pnpm-v10.26.0-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v20.19.6-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/)

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/) (required — other package managers are not supported)

The repository enforces pnpm via the packageManager field.

<br><br>


# 🎨 Styling Guidelines [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

- Styling is handled with Tailwind CSS
- Avoid inline styles unless absolutely necessary
- Prefer reusable utility classes and shared patterns

<br>

# 🧹 Code Quality [![TypeScript](https://img.shields.io/badge/Typescript-v5.9.3-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/)

- Written in TypeScript
- Prefer functional components and hooks
- Keep components small and composable
- Avoid unnecessary abstractions


<br>


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



















# 🧪 Testing

Leo uses Vitest and React Testing Library, along with Storybook stories, to provide a robust testing environment. Browser-based tests leverage the existing Storybook stories to ensure that components behave as expected in real-world usage. This approach ensures consistency between development, documentation, and automated testing.




















# 🙌 Thank You

Your contributions make Leo better for everyone.
Whether you’re fixing a typo or building a new component — we appreciate your time and effort.

**Happy coding!** 🚀




[![Pnpm](https://img.shields.io/badge/Pnpm-v10.26.0-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v20.19.6-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-v7.2.6-informational?style=flat&logo=vite&color=646CFF)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-v4.0.15-informational?style=flat&logo=vite&color=646CFF)](https://vitest.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-v10.1.4-FF4785?style=flat&logo=storybook&logoColor=FF4785)](https://storybook.js.org/)
[![TypeScript](https://img.shields.io/badge/Typescript-v5.9.3-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/)
[![React.js](https://img.shields.io/badge/React.js-v18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)



<style>
  /* Hidden by default */
  .sue-image {
    width: auto;
    height: 100%;
    display: none;
    /* -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%); */
  }


  /* Display at desktop breakpoint */
  @media (min-width: 1630px) {
    .sue-image {
      display: block;
      opacity: 0;
      animation: fadeIn 0.6s ease-out forwards;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>






### 1️⃣ How to Contribute

1. **Clone your fork locally**:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies:
```bash
pnpm install
```
4. Create a new branch for your feature or fix:
```bash
git checkout -b feature/my-new-component
```

### 2️⃣ Coding Guidelines
- Use TypeScript for all components and utilities.
- Follow the existing folder structure: src/components/ComponentName.
- Keep components small and reusable.
- Write clear, descriptive prop names and fully type all props.


### 3️⃣ Testing Your Changes
- Add tests for new features or bug fixes (see the Testing section).
- Run all tests before committing:

```bash
pnpm test
```
- Ensure coverage remains high.

### 4️⃣ Storybook

- Add stories for any new components:
    - - Place .stories.tsx files next to the component.
    - -  Make sure stories demonstrate all important states of the component.
- Run Storybook to preview your component locally:

```bash
pnpm storybook
```

5️⃣ Pull Request Guidelines









## 📖 Storybook

Storybook allows you to preview and interact with components in isolation, making it easier to develop, test, and document your UI library.

### 1️⃣ Running Storybook

Start the Storybook server:
```bash
pnpm storybook
```
- Opens a local development server (usually at http://localhost:6006)
- Hot-reloads changes in your components automatically

### 2️⃣ Building Storybook

Generate a static build for deployment:

```bash
pnpm build:storybook
```
- The static site is output to storybook-static/
- Can be deployed to Netlify, Vercel, GitHub Pages, or any static hosting

### 3️⃣ Writing Stories

Story files live alongside your components, using the .stories.tsx extension.

Example: `Button.stories.tsx`

```typescript
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
```

- Meta defines the component and its title in Storybook
- Each export represents a different story/state of the component


### 4️⃣ Tips

- Use args to define props for stories — makes controls interactive
- Organize stories in folders to match your component structure
- Leverage addons like @storybook/addon-essentials for documentation, controls, and accessibility

<br/><br/>



# 🧪 Testing

### 1️⃣ Running Tests

Run all tests:
```bash
pnpm test
```

Run tests in watch mode during development:
```bash
pnpm test:watch
```

Generate coverage reports:
```bash
pnpm vitest run --coverage
```
- Coverage reports are saved in the coverage/ folder.
- You can integrate coverage with Codecov or Coveralls for CI pipelines.

### 2️⃣ Adding New Tests
All new tests should live next to the component they test, using the .test.tsx or .spec.tsx extension.

Example folder structure:
```bash
src/components/Button/Button.tsx
src/components/Button/Button.test.tsx
```
Example test:
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Button from './Button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### 3️⃣ Guidelines for Writing Tests

1. Use descriptive names for describe and it blocks:

```typescript
describe('Checkbox', () => {
  it('renders with correct label', () => { ... })
})
```

2. Use React Testing Library queries for accessibility:
    - `screen.getByText`, `screen.getByRole`, `screen.getByLabelText`, etc.

3. Use user-event to simulate realistic user interactions instead of fireEvent.

4. Mock external dependencies when necessary:
    - Functions: vi.fn()
    - Modules: vi.mock()

5. Test behavior, not implementation:
    - Focus on what the component does, not how it does it.



<br/><br/>

