module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
