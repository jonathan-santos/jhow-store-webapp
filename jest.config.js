module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'babel-jest'
  },
  testEnvironment: 'jsdom'
}
