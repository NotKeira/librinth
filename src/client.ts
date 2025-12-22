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
import { mockProjects, mockVersions, mockUsers } from './mock-data';

export interface ClientOptions {
  /**
   * Use mock data instead of making real API requests
   * @default true
   */
  useMockData?: boolean;
  
  /**
   * Base URL for the Modrinth API
   * @default 'https://api.modrinth.com/v2'
   */
  baseUrl?: string;
  
  /**
   * User agent for API requests
   */
  userAgent?: string;
}

/**
 * Main client for interacting with the Modrinth API
 */
export class LibrinthClient {
  private readonly useMockData: boolean;
  private readonly baseUrl: string;
  private readonly userAgent: string;

  constructor(options: ClientOptions = {}) {
    this.useMockData = options.useMockData ?? true;
    this.baseUrl = options.baseUrl ?? 'https://api.modrinth.com/v2';
    this.userAgent = options.userAgent ?? 'librinth/1.0.0';
  }

  /**
   * Get a project by ID or slug
   */
  async getProject(idOrSlug: string): Promise<Project | null> {
    if (this.useMockData) {
      const project = mockProjects.find(
        p => p.id === idOrSlug || p.slug === idOrSlug
      );
      return project ?? null;
    }

    // Real API call would go here using node:http
    throw new Error('Real API calls not yet implemented');
  }

  /**
   * Search for projects
   */
  async searchProjects(query: string, limit = 10): Promise<SearchResult> {
    if (this.useMockData) {
      const filtered = mockProjects.filter(
        p =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      );

      return {
        hits: filtered.slice(0, limit),
        offset: 0,
        limit,
        total_hits: filtered.length,
      };
    }

    // Real API call would go here using node:http
    throw new Error('Real API calls not yet implemented');
  }

  /**
   * Get versions for a project
   */
  async getProjectVersions(projectId: string): Promise<Version[]> {
    if (this.useMockData) {
      return mockVersions.filter(v => v.project_id === projectId);
    }

    // Real API call would go here using node:http
    throw new Error('Real API calls not yet implemented');
  }

  /**
   * Get a specific version by ID
   */
  async getVersion(versionId: string): Promise<Version | null> {
    if (this.useMockData) {
      const version = mockVersions.find(v => v.id === versionId);
      return version ?? null;
    }

    // Real API call would go here using node:http
    throw new Error('Real API calls not yet implemented');
  }

  /**
   * Get a user by ID or username
   */
  async getUser(idOrUsername: string): Promise<User | null> {
    if (this.useMockData) {
      const user = mockUsers.find(
        u => u.id === idOrUsername || u.username === idOrUsername
      );
      return user ?? null;
    }

    // Real API call would go here using node:http
    throw new Error('Real API calls not yet implemented');
  }
}
