import js from '@eslint/js'

export default [
  {
    ignores: ['dist/', 'build/', 'coverage/', 'node_modules/']
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module' },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
]
