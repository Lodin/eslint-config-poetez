module.exports = {
  plugins: ['react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    // Specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      },
    ],

    // Prevent missing displayName in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    // EXPLANATION: Disabled by default; enable if necessary
    'react/display-name': 'off',

    // Forbid certain propTypes (any, array, object)
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    // EXPLANATION: Disabled by default; enable if necessary
    'react/forbid-prop-types': 'off',

    // Forbid certain props on DOM Nodes
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-dom-props.md
    // EXPLANATION: No specific properties to forbid
    'react/forbid-dom-props': 'off',

    // Enforce a specific function type for function components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', {always: []}],

    // Validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Validate closing tag location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 'error',

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': ['error', 'never', {allowMultiline: true}],

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    // EXPLANATION: Too strict. It works in functional component as well while
    // they don't use the same convention for handlers.
    'react/jsx-handler-names': 'off',

    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': ['error', {maximum: 1, when: 'multiline'}],

    // Prevent usage of .bind() in JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],

    // Prevent duplicate props in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],

    // Prevent usage of unwrapped JSX strings
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    // EXPLANATION: Unnecessary rule
    'react/jsx-no-literals': 'off',

    // Prevent usage of javascript: URLs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['to'],
        },
      ],
    ],

    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': ['error', {allowGlobals: true}],

    // Disallow unnecessary fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'error',

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Prevent adjacent inline elements not separated by whitespace
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
    'react/no-adjacent-inline-elements': 'error',

    // Enforce propTypes declarations alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],

    // Enforce props alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    // Enforce defaultProps declarations alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true,
      },
    ],

    // Prevent React to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': ['error'],

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 'error',

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    // EXPLANATION: This is necessary for server-rendering
    'react/no-did-mount-set-state': 'off',

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // Prevent usage of isMounted
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 'off',

    // Prevent usage of setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 'off',

    // Prevent using string references
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Prevent usage of unknown DOM property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // Require ES6 class declarations over React.createClass
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],

    // Prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'error',

    // Require render() methods to return something
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],

    // Require that the first prop in a JSX element be on a new line when the element is multiline
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // Enforce spacing around jsx equals signs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': ['error', 'never'],

    // Enforce JSX indentation
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['error', 2],

    // Disallow target="_blank" on links
    // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['error', {enforceDynamicLinks: 'always'}],

    // Restrict file extensions that may contain JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],

    // Prevent accidental JS comments from being injected into JSX as text
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // Disallow using React.render/ReactDOM.render's return value
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // Require a shouldComponentUpdate method, or PureRenderMixin
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    // EXPLANATION: The latest React documentations advices not to use this optimization
    'react/require-optimization': 'off',

    // Warn against using findDOMNode()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',

    // Forbid certain props on Components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    // EXPLANATION: No props to forbid
    'react/forbid-component-props': 'off',

    // Forbid certain elements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    // EXPLANATION: No elemenets to forbid
    'react/forbid-elements': 'off',

    // Prevent problem with children and props.dangerouslySetInnerHTML
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // Prevent unused propType definitions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],

    // Require style prop value be an object or var
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // Prevent invalid characters from appearing in markup
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',

    // Prevent passing of children as props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    // Validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'never',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    // Enforce spaces before the closing bracket of self-closing JSX elements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    // EXPLANATION: Deprecated in favor of jsx-tag-spacing
    'react/jsx-space-before-closing': 'off',

    // Prevent usage of Array index in keys
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
      },
    ],

    // Forbids using non-exported propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    // EXPLANATION: Disabled by default; enable if you are going to use
    // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
    'react/forbid-foreign-prop-types': ['warn', {allowInPropTypes: true}],

    // Prevent void DOM elements from receiving children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',

    // Enforce all defaultProps have a corresponding non-required PropType
    // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
    // EXPLANATION: Won't work with absent PropTypes.
    'react/default-props-match-prop-types': 'off',

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',

    // Prevent unused state values
    // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
    'react/no-unused-state': 'error',

    // Enforces consistent naming for boolean props
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
    // EXPLANATION: Too strict
    'react/boolean-prop-naming': 'off',

    // Prevents common casing typos
    // https://github.com/yannickcr/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'never', children: 'never'},
    ],

    // One JSX Element Per Line
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'error',

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always'],

    // Prevent using this.state within a this.setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // Prevent usage of button elements without an explicit type attribute
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],

    // Ensures inline tags are not rendered without spaces between them
    'react/jsx-child-element-spacing': 'off',

    // Prevent this from being used in stateless functional components
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // Validate JSX maximum depth
    // https://github.com/yannickcr/eslint-plugin-react/blob/abe8381c0d6748047224c430ce47f02e40160ed0/docs/rules/jsx-max-depth.md
    // EXPLANATION: Too strict
    'react/jsx-max-depth': 'off',

    // Disallow multiple spaces between inline JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'error',

    // Prevent usage of UNSAFE_ methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/157cc932be2cfaa56b3f5b45df6f6d4322a2f660/docs/rules/no-unsafe.md
    // EXPLANATION: Too strict
    'react/no-unsafe': 'off',

    // Enforce shorthand or standard form for React fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce linebreaks in curly braces in JSX attributes and expressions.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],

    // Enforce state initialization style
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    // EXPLANATION: Too strict
    'react/state-in-constructor': 'off',

    // Enforces where React component static properties should be positioned
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'static public field'],

    // Disallow JSX props spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    // EXPLANATION: JSX spreading is an important part of developer experience
    'react/jsx-props-no-spreading': 'off',

    // Enforce that props are read-only
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    // EXPLANATION: Flow is not a subject for this configuration
    'react/prefer-read-only-props': 'off',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.jsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
      'exact', // https://www.npmjs.com/package/prop-types-exact
      'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  },
};
