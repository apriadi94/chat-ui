module.exports = {
    parser: '@babel/eslint-parser',
    extends: ['airbnb-base', 'prettier'],
    env: {
      node: true,
      es6: true,
      mocha: true,
    },
    globals: {
      _: true,
      moment: true,
    },
    parserOptions: {
      ecmaVersion: 8,
    },
    plugins: ['prettier', 'mocha'],
    rules: {
      'prettier/prettier': ['error'],
      'global-require': 0,
      'import/no-extraneous-dependencies': 0,
      'import/named': 0,
      'import/prefer-default-export': 0,
      'import/no-unresolved': 0,
      'import/no-dynamic-require': 0,
      'newline-per-chained-call': 1,
      'no-console': 1,
      'no-use-before-define': 0,
      'no-confusing-arrow': 0,
      'mocha/handle-done-callback': 2,
      'mocha/max-top-level-suites': 2,
      'mocha/no-exclusive-tests': 2,
      'mocha/no-global-tests': 2,
      'mocha/no-hooks-for-single-case': 2,
      'mocha/no-hooks': 2,
      'mocha/no-identical-title': 2,
      'mocha/no-mocha-arrows': 0,
      'mocha/no-nested-tests': 0,
      'mocha/no-pending-tests': 2,
      'mocha/no-return-and-callback': 2,
      'mocha/no-setup-in-describe': 2,
      'mocha/no-sibling-hooks': 2,
      'mocha/no-skipped-tests': 2,
      'mocha/no-synchronous-tests': 0,
      'mocha/no-top-level-hooks': 2,
      'mocha/prefer-arrow-callback': 2,
      'mocha/valid-suite-description': 2,
      'mocha/valid-test-description': 2,
    },
  };
  