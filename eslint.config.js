import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  {
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/consistent-type-imports': 'error',
    },
    ignores: ['dist', '.eslintrc.cjs'],
    // languageOptions: {
    //   parser: typescriptParser,
    //   parserOptions: {
    //     ecmaVersion: 'latest',
    //     sourceType: 'module',
    //     project: ['./tsconfig.json', './tsconfig.node.json'],
    //     tsconfigRootDir: __dirname,
    //   },
    // },
    plugins: {
      // react: pluginReact,
      'react-refresh': reactRefresh,
      'react-hooks': pluginReactHooks,
    },
  },
);
