module.exports = [
  // Ignore node_modules and build outputs
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },

  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: require.resolve('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2024,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      import: require('eslint-plugin-import'),
    },
    rules: {
      ...(require('@typescript-eslint/eslint-plugin').configs?.recommended?.rules || {}),

      // Project preferences
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Disable unresolved import rule in many TS setups where TS handles this
      'import/no-unresolved': 'off',
    },
  },

  // JavaScript files
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': ['warn'],
    },
  },

  // CommonJS config files (e.g. .cjs)
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script',
    },
  },
];
