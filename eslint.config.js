import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import importPath from 'eslint-plugin-import-path';

export default defineConfig([
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			parser: tseslint.parser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
				project: './tsconfig.json',
			},
		},
		extends: [
			'plugin:prettier/recommended'
		],
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooks,
			import: importPlugin,
			prettier: prettierPlugin,
			'import-path': importPath,
			'@typescript-eslint': tsPlugin,
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				typescript: {
					project: './tsconfig.json',
				},
			},
			'import/external-module-folders': ['node_modules'],
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...reactPlugin.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...importPlugin.configs.recommended.rules,
			...importPlugin.configs.typescript.rules,
			...prettierPlugin.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/display-name': 'off',
			'react/prop-types': 'off',
			'eol-last': ['error', 'always'],
			'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
			'import/no-named-as-default': 'off',
			'import/no-duplicates': 'warn',
			'@typescript-eslint/consistent-type-imports': 'error',
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						'internal',
						'parent',
						['sibling', 'index'],
						'unknown',
					],
					pathGroups: [
						{
							pattern: 'react',
							group: 'builtin',
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: ['react'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			'import-path/parent-depth': ['error', 4],
			'import-path/forbidden': ['error', ['/index$', '/$']],
			'import/namespace': 'off',
			'import/default': 'off',
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
]);
