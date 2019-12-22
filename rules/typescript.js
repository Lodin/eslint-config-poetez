const stylisticIssuesRules = require('./stylistic-issues').rules;
const possibleErrorsRules = require('./possible-errors').rules;
const variablesRules = require('./variables').rules;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${process.cwd()}/tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Require that member overloads be consecutive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],

    // Disallows awaiting a value that is not a Promise
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
    '@typescript-eslint/await-thenable': 'error',

    // Bans “// @ts-ignore” comments from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
    // EXPLANATION: Usually allows to avoid different TS errors
    '@typescript-eslint/ban-ts-ignore': 'off',

    // Bans specific types from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    // EXPLANATION: No specific types to ban
    '@typescript-eslint/ban-types': 'off',

    // Enforce consistent brace style for blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': stylisticIssuesRules['brace-style'],

    // Enforce camelCase naming convention
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    camelcase: 'off',
    '@typescript-eslint/camelcase': stylisticIssuesRules['camelcase'],

    // Require PascalCased class and interface names
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
    '@typescript-eslint/class-name-casing': 'error',

    // Enforces consistent usage of type assertions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter'},
    ],

    // Consistent with type definition either interface or type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // Require or disallow spacing between function identifiers and their invocations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing':
      stylisticIssuesRules['func-call-spacing'],

    // Enforces naming of generic type variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
    // EXPLANATION: Too strict
    '@typescript-eslint/generic-type-naming': 'off',

    // Enforce consistent indentation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    indent: 'off',
    '@typescript-eslint/indent': stylisticIssuesRules['indent'],

    // Require that interface names be prefixed with I
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
    // EXPLANATION: Too strict
    '@typescript-eslint/interface-name-prefix': 'off',

    // Require a specific member delimiter style for interfaces and type literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: true,
        },
      },
    ],

    // Enforces naming conventions for class members by visibility
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
    '@typescript-eslint/member-naming': 'off',

    // Require a consistent member declaration order
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          'field',

          'constructor',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',
          'abstract-method',

          'method',
        ],
        interfaces: ['field', 'constructor', 'method'],
        typeLiterals: ['field', 'constructor', 'method'],
      },
    ],

    // Disallow generic Array constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow Empty Functions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',

    // Disallow the declaration of empty interfaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of the any type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    // EXPLANATION: Too strict
    '@typescript-eslint/no-explicit-any': 'off',

    // Disallow unnecessary parentheses
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens':
      possibleErrorsRules['no-extra-parens'],

    // Forbids the use of classes as namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': 'error',

    // Requires Promise-like values to be handled appropriately
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    '@typescript-eslint/no-floating-promises': 'error',

    // Disallow iterating over an array with a for-in loop
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {ignoreParameters: true, ignoreProperties: true},
    ],

    // Disallows magic numbers
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    // EXPLANATION: Too strict
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    // Enforce valid definition of new and constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
    '@typescript-eslint/no-misused-new': 'error',

    // Avoid using promises in places not designed to handle them
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
    '@typescript-eslint/no-misused-promises': [
      'error',
      {checksVoidReturn: true, checksConditionals: true},
    ],

    // Disallow the use of custom TypeScript modules and namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
    '@typescript-eslint/no-namespace': ['error', {allowDefinitionFiles: true}],

    // Disallows non-null assertions using the ! postfix operator
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    // EXPLANATION: ! postfix operator is usually quite useful
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Disallow the use of parameter properties in class constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    '@typescript-eslint/no-parameter-properties': 'error',

    // Disallows invocation of require()
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],

    // Disallow the use of type aliases
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
    // EXPLANATION: conflicts with @typescript-eslint/consistent-type-definitions
    '@typescript-eslint/no-type-alias': 'off',

    // Prevents conditionals where the type is always truthy or always falsy
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    '@typescript-eslint/no-unnecessary-condition': 'error',

    // Warns when a namespace qualifier is unnecessary
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // Warns if an explicitly specified type argument is the default for that type parameter
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // Warns if a type assertion does not change the type of an expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Disallow unused variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': variablesRules['no-unused-vars'],

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ...variablesRules['no-use-before-define'][1],
        typedefs: true,
      },
    ],

    // Disallow unnecessary constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallows the use of require statements except in import statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    // EXPLANATION: handled by @typescript-eslint/no-require-imports
    '@typescript-eslint/no-var-requires': 'off',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
    '@typescript-eslint/prefer-for-of': 'error',

    // Use function types instead of interfaces with call signatures
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
    '@typescript-eslint/prefer-function-type': 'error',

    // Enforce includes method over indexOf method
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
    '@typescript-eslint/prefer-includes': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    // EXPLANATION: Unusable with ES modules
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // Requires that private members are marked as readonly if they're never modified outside of the constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
    '@typescript-eslint/prefer-readonly': 'error',

    // Prefer RegExp#exec() over String#match() if no global flag is provided
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    '@typescript-eslint/prefer-regexp-exec': 'error',

    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // Requires any function or method that returns a Promise to be marked async
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
    '@typescript-eslint/promise-function-async': 'error',

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    quotes: 'off',
    '@typescript-eslint/quotes': stylisticIssuesRules['quotes'],

    // Enforce giving compare argument to Array#sort
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
    '@typescript-eslint/require-array-sort-compare': 'error',

    // Disallow async functions which have no await expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    // When adding two variables, operands must both be of type number or of type string
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Require or disallow semicolons instead of ASI
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    semi: 'off',
    '@typescript-eslint/semi': 'error',

    // Restricts the types allowed in boolean expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    // EXPLANATION: Too strict
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {path: 'never', types: 'never', lib: 'never'},
    ],

    // Require consistent spacing around type annotations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    '@typescript-eslint/type-annotation-spacing': 'error',

    // Requires type annotations to exist
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
    // EXPLANATION: Typescript compiler rules are preferred
    '@typescript-eslint/typedef': 'off',

    // Enforces unbound methods are called with their expected scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
    '@typescript-eslint/unbound-method': ['error', {ignoreStatic: true}],

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
    '@typescript-eslint/unified-signatures': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Require explicit return types on functions and class methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],

        // Require explicit accessibility modifiers on class properties and methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'explicit',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      },
    },
  },
};
