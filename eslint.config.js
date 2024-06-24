import js from '@eslint/js'
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
      'stats.html',
      '**/*.htm',
      '**/*.html',
      '**/*.json',
      '**/*.md',
      '**/*.markdown',
      '**/*.yml',
      '**/*.yaml',
      '**/*.scss',
      '**/*.css'
    ]
  },
  js.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  ...new FlatCompat({
    baseDirectory: fileURLToPath(new URL('.', import.meta.url))
  }).extends('eslint-config-standard'),
  {
    files: ['**/*.vue', '**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  }
]
