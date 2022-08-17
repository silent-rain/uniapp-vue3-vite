module.exports = {
    moduleFileExtensions: [
      'ts',
      'js',
      'jsx',
      'tsx',
      'json',
      'vue'
    ],
    transform: {
      '^.+\\.vue$': require.resolve('vue-jest'),
      '^.+\\.tsx?$': require.resolve('ts-jest'),
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub'),
      '^.+\\.jsx?$': require.resolve('babel-jest')
    },
    transformIgnorePatterns: ['/node_modules/'],
    // support the same @ -> src alias mapping in source code
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: ['**/tests/**/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
    collectCoverageFrom: [
      'src/utils/**/*.{js,vue}',
      '!src/utils/auth.js',
      '!src/utils/axiosReq.js',
      'src/components/**/*.{js,vue}',
    ],
    coverageDirectory: '<rootDir>/tests/coverage',
    // collectCoverage: true,
    // https://github.com/facebook/jest/issues/6766
    testURL: 'http://localhost/'
  };
  