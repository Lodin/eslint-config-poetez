module.exports = {
  rules: {
    // React usually uses PascalCase for component naming
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    // Handled by react/sort-comp
    '@typescript-eslint/member-ordering': 'off',
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.tsx']},
    ],
    // We don't need PropTypes for Typescript
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json', '.jsx', 'tsx'],
      },
    },
  },
};
