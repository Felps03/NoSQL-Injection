export default {
  bail: 1,
  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: ['src/**', '!src/helpers/**', '!src/app.js', '!src/server.js', '!src/database/**'],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: ['text', 'lcov'],

  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {}
};
