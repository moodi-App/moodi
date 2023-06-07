/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resolver: 'ts-jest-resolver',
  moduleNameMapper: {
    '\\.css$': '../../../__mocks__/styleMock.ts',
  },
};
