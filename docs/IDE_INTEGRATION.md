# Installation and Editor Integration Guide

This guide explains how to integrate Prettier and ESLint into common editors so contributors have a consistent development experience.

We support Node-based development (Node >= 20). Ensure you have the repository cloned and dependencies installed:

1. Install dependencies (using pnpm, npm or yarn):
   - pnpm: `pnpm install`
   - npm: `npm install`
   - yarn: `yarn install`

2. Ensure you run the format and lint scripts locally:
   - `pnpm run format`
   - `pnpm run lint`

Editor-specific instructions

WebStorm (JetBrains)
- WebStorm has built-in ESLint and Prettier support.
- Settings > Languages & Frameworks > JavaScript > Prettier:
  - Check 'Enable' and point Prettier package to the workspace node_modules (e.g. `<repo>/node_modules/prettier`).
- Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint:
  - Choose 'Automatic ESLint configuration' or specify the Node interpreter and the ESLint package in node_modules.
- Enable 'Reformat on save' and 'Run ESLint --fix on save' if you prefer automatic fixes.

Zed
- Zed is an editor in active development. If it supports extensions for ESLint and Prettier:
  - Ensure the workspace has node_modules available.
  - Configure the editor to use the project's Prettier and ESLint binaries (node_modules/.bin).

Visual Studio Code (VS Code)
- Install the following extensions:
  - ESLint (dbaeumer.vscode-eslint)
  - Prettier — Code formatter (esbenp.prettier-vscode)
- Workspace recommendations (create `.vscode/extensions.json` to recommend these extensions):
  ```json
  {
    "recommendations": [
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode"
    ]
  }
  ```
- Settings (workspace or user) recommended:
  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "eslint.format.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.run": "onSave"
  }
  ```
- Ensure Prettier uses the project config:
    - In settings: "prettier.configPath": ".prettierrc"

Notes
- We recommend that contributors run `pnpm run format` and `pnpm run lint` before pushing changes.
- The repository includes GitHub Actions to run checks on PRs; CI will prevent incorrect formatting or linting rules being merged.

If you need tailored editor settings or an extensions recommendations file for a different editor, tell me which and I will add it.
