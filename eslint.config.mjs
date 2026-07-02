// ============================================
// eslint.config.js - TAM KONFİGÜRASYON
// ============================================
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Astro dosyaları için
  ...eslintPluginAstro.configs.recommended,
  
  // TypeScript dosyaları için
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // TypeScript Strict Rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/strict-boolean-expressions': ['warn', {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
      }],
      
      // Clean Code Rules
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      }],
      '@typescript-eslint/consistent-type-exports': 'error',
    },
  },
  
  // Tüm dosyalar için genel kurallar
  {
    rules: {
      // Performans & Optimizasyon
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      
      // Hata Önleme
      'no-unused-vars': 'off', // TypeScript halledecek
      'no-undef': 'off', // TypeScript halledecek
      'prefer-const': 'error',
      'no-var': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-return-await': 'error',
      'require-await': 'warn',
      
      // Clean Code
      'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
      'max-depth': ['warn', 4],
      'max-params': ['warn', 5],
      'complexity': ['warn', 10],
      'no-nested-ternary': 'warn',
      'prefer-arrow-callback': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      
      // Code Quality
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-extend-native': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      
      // Astro Specific
      'astro/no-set-html-directive': 'warn',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/no-deprecated-astro-canonicalurl': 'error',
      'astro/no-deprecated-astro-fetchcontent': 'error',
      'astro/no-deprecated-astro-resolve': 'error',
    },
  },

  // File-specific overrides for intentional patterns and large content files
  {
    files: [
      'src/components/blog/Hero.astro',
      'src/layouts/Layout.astro',
      'src/pages/hizmetler.astro',
    ],
    rules: {
      'max-lines': 'off',
    },
  },
  {
    files: [
      'src/pages/**/blog/posts/*.astro',
      'src/pages/hizmetler.astro',
    ],
    rules: {
      'astro/no-set-html-directive': 'off',
    },
  },
  
  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      'public/**',
      'scripts/**/*.ts',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
      'env.d.ts',
    ],
  },
];
