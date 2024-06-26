module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // 'prettier', We are using prettier in the prettier.config.js file,
    // 'plugin:prettier/recommended', so we don't need to use it here (The are also VSCode extensions ESlint error)
    'plugin:react/jsx-runtime',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // TypeScript rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // React rules
    'react/prop-types': 'off', // Disable prop-types validation for TypeScript

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Other recommended rules
    'react/display-name': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['to'] },
    ],
  },
}
