import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import { FlatCompat } from '@eslint/eslintrc'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import { fileURLToPath, URL } from 'node:url'

export default [
  {
    ignores: [
      '**/.DS_Store',
      'node_modules/**',
      'dist/**',
      '**/*.css',
      '**/*.htm',
      '**/*.html',
      '**/*.yml',
      '**/*.yaml'
    ]
  },
  {
    files: ['**/*.vue', '**/*.js', '**/*.cjs', '**/*.mjs'],
    ...js.configs.recommended
  },
  ...vuePlugin.configs['flat/recommended']
    .map(config => ({
      ...config,
      files: config.files || ['**/*.vue', '**/*.js', '**/*.cjs', '**/*.mjs']
    })),
  ...new FlatCompat({
    baseDirectory: fileURLToPath(new URL('.', import.meta.url))
  }).extends('eslint-config-standard')
    .map(config => ({
      ...config,
      files: ['**/*.vue', '**/*.js', '**/*.cjs', '**/*.mjs']
    })),
  {
    files: ['**/*.vue', '**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'import/extensions': ['error', 'always', { ignorePackages: true }]
    }
  },
  {
    files: ['**/*.json'],
    ignores: ['**/package-lock.json', '**/jsconfig.json'],
    language: 'json/json',
    ...json.configs.recommended
  },
  {
    files: ['**/jsconfig.json'],
    language: 'json/jsonc',
    ...json.configs.recommended
  },
  ...markdown.configs.recommended
    .map(config => ({
      ...config,
      files: ['**/*.md', '**/*.markdown']
    }))
]
