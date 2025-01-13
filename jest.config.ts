/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': '@swc/jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/prisma/',
    '/coverage/',
    '/reports/',
    '/src/configs',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/prisma/',
    '/coverage/',
    '/reports/',
    '/src/configs',
  ],
}
