/** @format */

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-typescript'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		tsconfigRootDir: './',
		project: 'tsconfig.json',
	},
	plugins: ['import'],
	settings: {
		// To kill annoyed React warning:
		// https://github.com/DRD4-7R/eslint-config-7r-building/issues/1#issuecomment-714491844
		react: {
			version: '999.999.999',
		},
	},
	rules: {
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
				maxEOF: 1,
				maxBOF: 1,
			},
		],
		'no-tabs': 0,
		'no-console': 0,
		'@typescript-eslint/indent': 0,
	},
};
