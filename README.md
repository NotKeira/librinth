# librinth

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![npm version](https://img.shields.io/npm/v/librinth.svg)](https://www.npmjs.com/package/librinth) [![Build Status](https://img.shields.io/github/actions/workflow/status/NotKeira/librinth/ci.yml?branch=main)](https://github.com/NotKeira/librinth/actions) [![GitHub stars](https://img.shields.io/github/stars/NotKeira/librinth?style=social)](https://github.com/NotKeira/librinth)

A TypeScript API client for the Modrinth v2 API (TokenAuth, staging and production support, custom HTTP layer).

## Requirements
- Node.js 20 or newer (Node 20+). Older Node versions are not supported.
- pnpm is the preferred package manager (works with npm/yarn in most cases).

## Install
### Preferred (pnpm):
```bash
pnpm add librinth
```

### Alternative:
```bash
npm install librinth
# or
yarn add librinth
```

## Quick usage
### CommonJS:
```js
const Librinth = require('librinth');
const client = new Librinth({ token: process.env.MODRINTH_TOKEN });
await client.getProject('sodium');
```

### ESM / TypeScript:
```ts
import Librinth from 'librinth';
const client = new Librinth({ token: process.env.MODRINTH_TOKEN });
const project = await client.getProject('sodium');
```

## Notes
- pnpm is recommended for development and CI, but npm and yarn are supported for consumers.
- The library ships with TypeScript types.
- Default behavior and API surface are intentionally small and stable.

## License and copyright (IMPORTANT)
- Code license: MIT — Copyright (c) 2025 Keira Hopkins and contributors. See LICENSE.
- Modrinth content and assets: This project uses and references content hosted on or originating from Modrinth. We adhere to Modrinth's terms and copyright policies. All appropriate rights and ownership of Modrinth-hosted assets remain with Modrinth and the original creators; this project does not claim ownership of those assets. If you use or redistribute Modrinth-hosted content, ensure you follow Modrinth's licensing and attribution requirements. See https://modrinth.com and https://docs.modrinth.com for details.

## Contributing
- Keep changes small and focused.
- Run linters and tests before opening PRs.
- Follow repository contribution guidelines.

## Links
- Modrinth: https://modrinth.com
- Modrinth API docs: https://docs.modrinth.com
- Repo: https://github.com/NotKeira/librinth