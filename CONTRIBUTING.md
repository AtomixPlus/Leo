# Leo <img src="./src/assets/leo.png" width="100" height="150"/>

[![Build](https://github.com/kratostaine/spring-authorization-server/actions/workflows/continuous-integration-workflow.yml/badge.svg)](https://github.com/vortzify/Leo/.github/workflows/ci.yml)
![Version](https://img.shields.io/badge/Version-0.0.1-blue)
![Bun](https://img.shields.io/badge/Manager-Bun-informational?style=flat&logo=bun&color=F9AD00)
![Vite](https://img.shields.io/badge/Build-Vite-informational?style=flat&logo=vite&color=646CFF)
![Typscript](https://img.shields.io/badge/Code-Typescript-informational?style=flat&logo=typescript&color=3178c6)
![React.js](https://img.shields.io/badge/Library-React.js-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Build-Node.js-informational?style=flat&logo=nodedotjs&color=3c873a)



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

