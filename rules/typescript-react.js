module.exports = {
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.tsx']},
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json', '.jsx', 'tsx'],
      },
    },
  },
};
