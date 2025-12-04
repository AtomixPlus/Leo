# Leo <img src="https://raw.githubusercontent.com/AtomixPlus/Leo/refs/heads/main/src/assets/leo.png" width="100" height="150"/>

[![CI](https://github.com/atomix/Leo/actions/workflows/ci.yml/badge.svg)](https://github.com/atomix/Leo/actions/workflows/ci.yml?branch=main)
[![Vitest](https://img.shields.io/badge/Test-Vitest-informational?style=flat&logo=vite&color=646CFF)](https://vitest.dev/)
![Version](https://img.shields.io/badge/Version-0.0.3-blue)
[![Pnpm](https://img.shields.io/badge/Manager-Pnpm-informational?style=flat&logo=pnpm&color=F9AD00)](https://pnpm.io/)
[![Vite](https://img.shields.io/badge/Build-Vite-informational?style=flat&logo=vite&color=646CFF)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Build-Node.js-informational?style=flat&logo=nodedotjs&color=3c873a)](https://nodejs.org/)

[![TypeScript](https://img.shields.io/badge/Code-Typescript-informational?style=flat&logo=typescript&color=3178c6)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Library-Storybook-FF4785?style=flat&logo=storybook&logoColor=FF4785)](https://storybook.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React.js](https://img.shields.io/badge/Library-React.js-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)

<style>
  /* Hidden by default */
  .leo-image {
    width: auto;
    height: 100%;
    display: none;
  }


  /* Display at desktop breakpoint */
  @media (min-width: 250px) {
    .leo-image {
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


<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px"><div style="background: transparent; padding: 10px">

  A high-performance, developer-friendly React component library built with `TypeScript`, `Vite`, `Node.js`, and `Tailwind CSS`, designed for modern frontend workflows. Every component is fully typed, tree-shakeable, and optimized for fast builds with `pnpm`, `Bun`, and other contemporary bundlers.

  # 📑 Table of Contents

- [Installation](#💻-Installation)
- [Usage](#usage)
- [Contributing](#🤝-Contributing)
  - [Testing](https://github.com/AtomixPlus/Leo?tab=contributing-ov-file#-testing)
    - [Running Tests](#1️⃣-running-tests)
    - [Adding New Tests](#2️⃣-adding-new-tests)
    - [Guidelines for Writing Tests](#3️⃣-guidelines-for-writing-tests)
  - [Storybook](https://github.com/AtomixPlus/Leo?tab=contributing-ov-file#-storybook)
    - [Running Storybook](#1️⃣-running-storybook)
    - [Building Storybook](#2️⃣-building-storybook)
    - [Writing Stories](#3️⃣-writing-stories)
    - [Tips](#4️⃣-tips)
- [License](#📜-License)

</div>
<div
class="image-wrapper"
style="
  background: transparent;
  padding: 20px;
  display: grid;
  align-items: end;
"
>
  <img
    src="https://raw.githubusercontent.com/AtomixPlus/Leo/refs/heads/main/src/assets/elephant.png"
    alt="Leo"
    class="leo-image"
  />
</div></div>




The library comes with a robust testing setup using `Vitest` and `React Testing Library`, ensuring components are reliable, maintainable, and production-ready. `Tailwind CSS` integration allows for rapid, consistent styling while keeping components flexible and customizable. 

Perfect for developers who want a scalable, fast, and flexible UI foundation for modern React projects, with developer experience and productivity in mind.


# 💻 Installation
You can install this library in your projects using 'pnpm', 'npm', or 'yarn'. Make sure your package registry is correctly configured if using a private registry, or install directly from a public registry or local path.

```bash
pnpm i @vortz/leo
```
<br/>

# 🤝 Contributing
We welcome contributions to improve this component library! Whether you want to add new components, fix bugs, improve documentation, or enhance tests, your help is appreciated. 

Read the contributing guide to learn about our development process, how to propose bug fixes and improvements, and how to build and test your changes.

Contributing to Leo is about more than just issues and pull requests! There are many other ways to support Leo beyond contributing to the code base.

<br/>


# ⚠️ Security
If you discover a security vulnerability within Leo, please send an e-mail to Phil Graham via ijeffrouk@gmail.com. All security vulnerabilities will be promptly addressed.

<br/>


# 📜 License
MIT License © Vortz








