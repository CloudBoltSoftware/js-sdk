module.exports = {
  testMatch: [
    '**/__tests__/*.{j,t}s?(x)',
    '**/*.spec.{j,t}s?(x)',
    '**/*.test.{j,t}s?(x)'
  ],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text']
  //TODO: Uncomment and determine thresholds
  // Certain areas can have different thresholds
  // https://jestjs.io/docs/configuration#coveragethreshold-object
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // }
}
