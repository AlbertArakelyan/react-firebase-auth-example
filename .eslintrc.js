module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['prettier', 'react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error'],
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-extra-boolean-cast': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
  },
  globals: {
    ServiceWorkerGlobalScope: true,
  },
};
