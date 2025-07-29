import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import angular from "@angular-eslint/eslint-plugin";

export default [
	// JS
	{
		files: ["**/*.js"],
		...js.configs.recommended,
	},

	// TS
	{
		files: ["src/**/*.ts"],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: "./tsconfig.eslint.json",
				sourceType: "module",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
			"@angular-eslint": angular,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...angular.configs.recommended.rules,
		},
	},
];
