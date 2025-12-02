# Leo <img src="./src/assets/leo.png" width="100" height="150"/>

[![Build](https://github.com/kratostaine/spring-authorization-server/actions/workflows/continuous-integration-workflow.yml/badge.svg)](https://github.com/vortzify/Leo/.github/workflows/ci.yml)
![Version](https://img.shields.io/badge/Version-0.0.1-blue)
![Bun](https://img.shields.io/badge/Manager-Bun-informational?style=flat&logo=bun&color=F9AD00)
![Vite](https://img.shields.io/badge/Build-Vite-informational?style=flat&logo=vite&color=646CFF)
![Typscript](https://img.shields.io/badge/Code-Typescript-informational?style=flat&logo=typescript&color=3178c6)
![React.js](https://img.shields.io/badge/Library-React.js-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Build-Node.js-informational?style=flat&logo=nodedotjs&color=3c873a)


A high-performance React component library engineered with TypeScript, Vite, and Node.js. Every component is fully typed, tree-shakeable, and optimized for modern build tools like Bun and pnpm. Perfect for developers who want a fast, flexible, and scalable UI foundation.

# 📑 Table of Contents

- [Introduction](#Installation)
- [Installation](#Installation)
- Usage
- Components
- [Testing](#Test-Coverage)
- Linting & Type Checking
- Building
- Storybook / Documentation
- Continuous Integration (CI)
- Contributing
- [License](#License)


# 🧪 Testing

This library uses Vitest as the test runner, React Testing Library for component testing, and TypeScript for type safety. Follow the instructions below to create, run, and maintain tests.


## 1️⃣ Installing Testing Dependencies

Ensure you have all required dev dependencies installed:
```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-node
```

- vitest – test runner
- @testing-library/react – render and query components
- @testing-library/jest-dom – custom matchers like toBeInTheDocument()
- @testing-library/user-event – simulate user interactions
- ts-node – run TypeScript tests



## 2️⃣ Setting Up Vitest

Create a vitest.config.ts in the project root:
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Use global test functions like `describe` and `it`
    environment: 'happy-dom', // DOM environment for testing React components
    setupFiles: './src/setupTests.ts', // Setup file for jest-dom matchers
  },
})

```

3️⃣ Setup File for Jest-DOM
Create src/vitest.setup.ts:
```typescript
import '@testing-library/jest-dom'
```
This ensures TypeScript recognizes custom matchers like:

```typescript
expect(element).toBeInTheDocument()
expect(element).toHaveTextContent('Hello')
```

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)

    await userEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```
