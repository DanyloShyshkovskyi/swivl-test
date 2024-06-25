export default {
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  jsxSingleQuote: true,
  endOfLine: 'lf',
  importOrder: [
    'react',
    '^widget/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^shared/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  pluginSearchDirs: false,
  tailwindConfig: './tailwind.config.js',
}