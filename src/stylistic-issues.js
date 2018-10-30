module.exports = {
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': ['error', 'never'],
  // no need for this restriction
  'array-element-newline': 'off',
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs'],
  'camelcase': ['error', {properties: 'always'}],
  'capitalized-comments': ['error', 'always', {ignoreConsecutiveComments: true }],
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': 'error',
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'consistent-this': ['error', 'self'],
  'eol-last': ['error', 'always'],
  'func-call-spacing': ['error', 'never'],
  'func-name-matching': ['error', 'always'],
  'func-names': ['error', 'always'],
  'func-style': ['error', 'declaration', {allowArrowFunctions: true }],
  // disallows single param with linebreak; not good
  'function-paren-newline': 'off',
  // no ID to forbid by default
  'id-blacklist': 'off',
  // too strict
  'id-length': 'off',
  // too strict
  'id-match': 'off',
  // there can be both variants
  'implicit-arrow-linebreak': 'off',
  'indent': ['error', 2, {
    SwitchCase: 1,
  }],
  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  // too strict
  'line-comment-position': 'off',
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': 'error',
  'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
  'max-depth': ['error', 4],
  'max-len': ['error', {
    code: 100,
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreTrailingComments: true,
    tabWidth: 2,
  }],
  // it can be impossible to avoid too big files
  'max-lines': 'off',
  'max-nested-callbacks': ['error', 4],
  'max-params': ['error', 6],
  // too strict
  'max-statements': 'off',
  // handled by other rules
  'max-statements-per-line': 'off',
  // single-line comment will be forced to be multiline too, not good
  'multiline-comment-style': 'off',
  // inconvenient sometimes
  'multiline-ternary': 'off',
  // can be situations when you have to create new object from received variable
  'new-cap': 'off',
  'new-parens': 'error',
  'newline-per-chained-call': ['error', {ignoreChainWithDepth: 3}],
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  // continue is useful and reduces unnecessary nesting
  'no-continue': 'off',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-assign': 'error',
  'no-multiple-empty-lines': ['error', {max: 1}],
  // sometimes negated condition is more explicit
  'no-negated-condition': 'off',
  // nested ternary with parens and multilining are useful
  'no-nested-ternary': 'off',
  'no-new-object': 'error',
  'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
  // no restricted syntax by default
  'no-restricted-syntax': 'off',
  'no-tabs': 'error',
  // ternary are extremely useful
  'no-ternary': 'off',
  'no-trailing-spaces': 'error',
  // disabled by default; enable if necessary
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': 'error',
  'no-whitespace-before-property': 'error',
  // handled by 'curly' rule
  'nonblock-statement-body-position': 'off',
  // too strict
  'object-curly-newline': 'off',
  'object-curly-spacing': ['error', 'never'],
  // disabled by default; enable if necessary
  'object-property-newline': 'off',
  'one-var': ['error', 'never'],
  // handled by 'one-var' rule
  'one-var-declaration-per-line': 'off',
  'operator-assignment': ['error', 'always'],
  'operator-linebreak': ['error', 'before', {overrides: {'=': 'after'}}],
  'padded-blocks': ['error', 'never'],
  'padding-line-between-statements': ['error', {
    blankLine: 'always',
    prev: '*',
    next: 'return',
  }],
  'prefer-object-spread': 'error',
  'quote-props': ['error', 'as-needed'],
  'quotes': ['error', 'single', {allowTemplateLiterals: true}],
  // JSDoc is useful, but enforcing it is too strict
  'require-jsdoc': 'off',
  'semi': ['error', 'always'],
  'semi-spacing': 'error',
  'semi-style': 'error',
  'sort-keys': ['error', 'asc', {caseSensitive: true, natural: true}],
  // handled by "one-var" rule
  'sort-vars': 'off',
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', {
    'anonymous': 'always',
    'named': 'never',
    'asyncArrow': 'always'
  }],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'error',
  'space-unary-ops': ['error', {
    words: true,
    nonwords: false,
  }],
  'spaced-comment': ['error', 'always'],
  'switch-colon-spacing': 'error',
  'template-tag-spacing': ['error', 'never'],
  // disabled by default; enable if necessary
  'unicode-bom': 'off',
  // too strict
  'wrap-regex': 'off',
};
