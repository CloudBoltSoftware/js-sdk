module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
  testMatch: [
    '**/__tests__/*.{j,t}s?(x)',
    '**/*.spec.{j,t}s?(x)',
    '**/*.test.{j,t}s?(x)'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text'],
  testEnvironment: 'jsdom',
  restoreMocks: true
}
