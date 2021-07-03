module.exports = {
  transform: {
    '\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(scss)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom'
}
