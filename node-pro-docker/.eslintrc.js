module.exports = {
  extends: ['eslint-config-imweb', 'eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       paths: ['src'], // 兼容src目录下的子目录路径简写，否则会报 import/extensions
  //     },
  //   },
  // },
  rules: {
    'react/sort-comp': 0,
    'no-unused-vars': 1,
    'no-restricted-syntax': 0,
    'import/extensions': 0,
    'no-console': 0,
    'no-unused-expressions': 0,
    'arrow-parens': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'space-before-function-paren': 0,
    'no-debugger': 0,
    'no-prototype-builtins': 0,
    'no-await-in-loop': 0,
    'no-multi-assign': 0,
    'prefer-promise-reject-errors': 0,
    camelcase: 0,
    'import/prefer-default-export': 0,
    'no-sync': 0,
    'no-shadow': 0,
    'import/no-duplicates': 0,
    'no-multi-str': 0,
    'no-void': 0,
    'import/no-mutable-exports': 0,
    'import/first': 2,
    'default-case': 0,
    'no-nested-ternary': 0,
    'no-use-before-define': ['error', { functions: false }],
    'jsx-a11y/media-has-caption': 0,
  },
};
