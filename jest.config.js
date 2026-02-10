module.exports = {
  testEnvironment: 'node',
  injectGlobals: true,
  transform: {
    '^.+\\.jsx?$': ['babel-jest', {}],
  },
  testMatch: ['**/*.jest.test.js'],
  collectCoverageFrom: ['**/*.js', '!**/*.test.js', '!**/node_modules/**'],
  moduleFileExtensions: ['js', 'json'],
};
