module.exports = {
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
      project: './tsconfig.json',
      extraFileExtensions: ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx', '.vue'],
    },
    rules: {
      'vue/html-self-closing': 'off',
      quotes: [1, 'single'],
      semi: [1, 'always'],
      'comma-dangle': [0, 'always'],
    },
  };
  