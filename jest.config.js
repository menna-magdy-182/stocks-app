module.exports = {
  preset: 'react-native',
  transform: {
 '^.+\\.(js)$': ['babel-jest', { plugins: ['babel-plugin-syntax-hermes-parser'] }],
    '^.+\\.(ts|tsx)$': 'babel-jest'  },
  setupFilesAfterEnv: [
    './jest.setup.js',
    '@testing-library/jest-native/extend-expect',
  ],
  testPathIgnorePatterns: ['__mocks__', '__utils__', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
