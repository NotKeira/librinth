/**
 * librinth - Simple TypeScript API wrapper for Modrinth
 * 
 * Copyright (c) 2025 Keira Hopkins and contributors
 * Licensed under MIT License
 * 
 * Modrinth integration, logos, and other Modrinth property (including domain)
 * are copyright Rinth, Inc.
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  categories: string[];
  client_side: string;
  server_side: string;
  downloads: number;
  followers: number;
  icon_url?: string;
  published: string;
  updated: string;
}

export interface Version {
  id: string;
  project_id: string;
  name: string;
  version_number: string;
  changelog: string;
  downloads: number;
  version_type: 'release' | 'beta' | 'alpha';
  game_versions: string[];
  loaders: string[];
  files: VersionFile[];
  published: string;
}

export interface VersionFile {
  url: string;
  filename: string;
  primary: boolean;
  size: number;
  file_type?: string;
}

export interface User {
  id: string;
  username: string;
  name?: string;
  bio?: string;
  avatar_url?: string;
  created: string;
}

export interface SearchResult {
  hits: Project[];
  offset: number;
  limit: number;
  total_hits: number;
}
