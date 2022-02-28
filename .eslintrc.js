module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  ignorePatterns: ['dist', 'node_modules', 'lib', 'types'],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/*.spec.{j,t}s?(x)',
        '**/*.test.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
