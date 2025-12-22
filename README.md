# librinth

A simple, modern TypeScript API wrapper for Modrinth with built-in mock data support.

[![npm version](https://img.shields.io/npm/v/librinth.svg)](https://www.npmjs.com/package/librinth)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 Simple and intuitive API
- 📦 Built-in TypeScript support
- 🎭 Mock data for testing and development
- 🔧 Compatible with Node.js 16+
- 📝 Comprehensive type definitions
- 🎯 Zero dependencies (runtime)

## Installation

Using pnpm (recommended):

```bash
pnpm add librinth
```

Using npm:

```bash
npm install librinth
```

Using yarn:

```bash
yarn add librinth
```

## Quick Start

```typescript
import { LibrinthClient } from 'librinth';

// Create a client with mock data (default)
const client = new LibrinthClient();

// Search for projects
const results = await client.searchProjects('sodium');
console.log(results.hits);

// Get a specific project
const project = await client.getProject('sodium');
console.log(project?.title);

// Get project versions
const versions = await client.getProjectVersions('AANobbMI');
console.log(versions);
```

## Usage

### Client Options

```typescript
const client = new LibrinthClient({
  useMockData: true, // Use mock data (default: true)
  baseUrl: 'https://api.modrinth.com/v2', // API base URL
  userAgent: 'my-app/1.0.0', // Custom user agent
});
```

### Available Methods

#### `getProject(idOrSlug: string): Promise<Project | null>`

Get a project by its ID or slug.

```typescript
const project = await client.getProject('sodium');
```

#### `searchProjects(query: string, limit?: number): Promise<SearchResult>`

Search for projects matching a query.

```typescript
const results = await client.searchProjects('optimization', 20);
```

#### `getProjectVersions(projectId: string): Promise<Version[]>`

Get all versions for a specific project.

```typescript
const versions = await client.getProjectVersions('AANobbMI');
```

#### `getVersion(versionId: string): Promise<Version | null>`

Get a specific version by its ID.

```typescript
const version = await client.getVersion('version-1');
```

#### `getUser(idOrUsername: string): Promise<User | null>`

Get a user by their ID or username.

```typescript
const user = await client.getUser('jellysquid3');
```

## TypeScript Support

This library is written in TypeScript and includes comprehensive type definitions:

```typescript
import type { Project, Version, User, SearchResult } from 'librinth';
```

## Mock Data

By default, the client uses mock data for testing and development. To use real API calls (when implemented), set `useMockData: false`:

```typescript
const client = new LibrinthClient({ useMockData: false });
```

## Development

### Prerequisites

- Node.js 16 or higher
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build
```

## License

MIT License - Copyright (c) 2025 Keira Hopkins and contributors

See [LICENSE](./LICENSE) for details.

## Modrinth

Modrinth integration, logos, and other Modrinth property (including domain) are copyright Rinth, Inc. This library is not officially affiliated with Modrinth.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Links

- [Modrinth Website](https://modrinth.com)
- [Modrinth API Documentation](https://docs.modrinth.com)
- [GitHub Repository](https://github.com/NotKeira/librinth)
