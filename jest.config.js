module.exports = {
    roots: ['<rootDir>/src'],
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.spec.json'
      }
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    setupFiles: ['<rootDir>/src/setupTests.ts'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: false,
    silent: false,
    moduleNameMapper: {
      '\\.(css|scss)$': '<rootDir>/jest-setup/style.mock.js',
      "utils/$1": "<rootDir>/src/utils/test/$1"
    }
  };