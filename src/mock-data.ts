/**
 * librinth - Simple TypeScript API wrapper for Modrinth
 * 
 * Copyright (c) 2025 Keira Hopkins and contributors
 * Licensed under MIT License
 * 
 * Modrinth integration, logos, and other Modrinth property (including domain)
 * are copyright Rinth, Inc.
 */

import type { Project, Version, User, SearchResult } from './types';

/**
 * Mock data for testing and development
 */
export const mockProjects: Project[] = [
  {
    id: 'AANobbMI',
    slug: 'sodium',
    title: 'Sodium',
    description: 'A modern rendering engine for Minecraft',
    categories: ['optimization', 'fabric'],
    client_side: 'required',
    server_side: 'unsupported',
    downloads: 50000000,
    followers: 25000,
    icon_url: 'https://cdn.modrinth.com/data/AANobbMI/icon.png',
    published: '2020-07-01T00:00:00Z',
    updated: '2024-12-20T00:00:00Z',
  },
  {
    id: 'P7dR8mSH',
    slug: 'fabric-api',
    title: 'Fabric API',
    description: 'Essential hooks for modding with Fabric',
    categories: ['library', 'fabric'],
    client_side: 'optional',
    server_side: 'optional',
    downloads: 100000000,
    followers: 30000,
    icon_url: 'https://cdn.modrinth.com/data/P7dR8mSH/icon.png',
    published: '2019-01-01T00:00:00Z',
    updated: '2024-12-21T00:00:00Z',
  },
];

export const mockVersions: Version[] = [
  {
    id: 'version-1',
    project_id: 'AANobbMI',
    name: 'Sodium 0.5.0',
    version_number: '0.5.0',
    changelog: 'Major performance improvements',
    downloads: 1000000,
    version_type: 'release',
    game_versions: ['1.20.1', '1.20.2'],
    loaders: ['fabric'],
    files: [
      {
        url: 'https://cdn.modrinth.com/data/AANobbMI/versions/version-1/sodium-0.5.0.jar',
        filename: 'sodium-0.5.0.jar',
        primary: true,
        size: 1024000,
        file_type: 'application/java-archive',
      },
    ],
    published: '2024-12-20T00:00:00Z',
  },
];

export const mockUsers: User[] = [
  {
    id: 'user-1',
    username: 'jellysquid3',
    name: 'JellySquid',
    bio: 'Developer of Sodium and other performance mods',
    avatar_url: 'https://cdn.modrinth.com/user/jellysquid3/avatar.png',
    created: '2020-01-01T00:00:00Z',
  },
];
