# Leo <img src="./src/assets/leo.png" width="100" height="150"/>

![CI](https://github.com/vortzify/Leo/actions/workflows/ci.yml/badge.svg)
![Version](https://img.shields.io/badge/Version-0.0.1-blue)
[![Pnpm](https://img.shields.io/badge/Manager-Pnpm-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)
[![Vite](https://img.shields.io/badge/Build-Vite-informational?style=flat&logo=vite&color=646CFF)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Build-Node.js-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/)

[![TypeScript](https://img.shields.io/badge/Code-Typescript-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React.js](https://img.shields.io/badge/Library-React.js-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Express.js](https://img.shields.io/badge/Library-Express.js-35495E?logo=express&color=00ffff)](https://expressjs.com/)

<!-- ![Bun](https://img.shields.io/badge/Manager-Bun-informational?style=flat&logo=bun&color=F9AD00) -->

A high-performance, developer-friendly React component library built with `TypeScript`, `Vite`, `Node.js`, and `Tailwind CSS`, designed for modern frontend workflows. Every component is fully typed, tree-shakeable, and optimized for fast builds with `pnpm`, `Bun`, and other contemporary bundlers.

The library comes with a robust testing setup using `Vitest` and `React Testing Library`, ensuring components are reliable, maintainable, and production-ready. `Tailwind CSS` integration allows for rapid, consistent styling while keeping components flexible and customizable. 

Perfect for developers who want a scalable, fast, and flexible UI foundation for modern React projects, with developer experience and productivity in mind.

# 📑 Table of Contents

- [Installation](#💻-Installation)
- [Usage](#usage)
- [Testing](#testing)
  - [Running Tests](#1️⃣-running-tests)
  - [Adding New Tests](#2️⃣-adding-new-tests)
  - [Guidelines for Writing Tests](#3️⃣-guidelines-for-writing-tests)
- [Storybook](#storybook)
  - [Running Storybook](#1️⃣-running-storybook)
  - [Building Storybook](#2️⃣-building-storybook)
  - [Writing Stories](#3️⃣-writing-stories)
  - [Tips](#4️⃣-tips)
- [Badges](#badges)
- [Contributing](#🤝-Contributing)
- [License](#📜-License)

<br/><br/>

## 💻 Installation
You can install this library in your projects using 'pnpm', 'npm', or 'yarn'. Make sure your package registry is correctly configured if using a private registry, or install directly from a public registry or local path.




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

<br/><br/>

# 🤝 Contributing
We welcome contributions to improve this component library! Whether you want to add new components, fix bugs, improve documentation, or enhance tests, your help is appreciated.

<br/><br/>


# ⚠️ Security Vulnerabilities
If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via taylor@laravel.com. All security vulnerabilities will be promptly addressed.

<br/><br/>


# 📜 License

MIT License © Vortz