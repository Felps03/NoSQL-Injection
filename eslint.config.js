import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/**', 'coverage/**', '__tests__/coverage/**', 'package-lock.json']
  },
  js.configs.recommended,
  {
    // commitlint.config.cjs is CommonJS on purpose (see file comment for why).
    files: ['commitlint.config.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'writable',
        require: 'readonly'
      }
    }
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly'
      }
    },
    rules: {
      'no-console': 'off',
      // 'next' is required by Express to detect 4-arg error-handling middleware even
      // when unused; unused catch bindings are an established pattern across the
      // controllers (error intentionally not inspected).
      'no-unused-vars': ['error', { argsIgnorePattern: '^next$', caughtErrors: 'none' }]
    }
  },
  {
    files: ['__tests__/**/*.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly'
      }
    }
  },
  eslintConfigPrettier
];
