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
- [Testing](./.github/pages/TESTING.md)
- Linting & Type Checking
- Building
- Storybook / Documentation
- Continuous Integration (CI)
- Contributing
- [License](#License)


# 💿 Installation
You can install this component library using pnpm, npm, or yarn.

| pnpm | npm | yarn |
|------|-----|------|
| `pnpm add your-library-name` | `npm install your-library-name` | `yarn add your-library-name` |


<details>
    <summary>pnpm</summary>
    ```
    pnpm add vortz/leo
    ```
</details> 
<details> 
    <summary>yarn</summary>

    ```
    yarn add your-library-name
    ```
</details>



# 🧪 Testing

This project uses Vitest, React Testing Library, and pnpm for running unit and component tests.

## Run Tests

Install dependencies (if not already):
```
pnpm install
```
Run all tests:
```
pnpm test
```
Run tests in watch mode (good for development):
```
pnpm test:watch
```
## Linting and Type Checking
Lint the code:
```
pnpm lint
```
Check TypeScript types:
```
pnpm tsc --noEmit
```

## Test Coverage
Generate a coverage report:
```
pnpm vitest run --coverage
```


# 📜 License

MIT License © Vortz