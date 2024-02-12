module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/jsx-uses-react': 'off', // To prevent unnecessary "react/jsx-uses-react" error
    'react/react-in-jsx-scope': 'off', // To prevent unnecessary "react/react-in-jsx-scope" error
    'react-hooks/exhaustive-deps': 'warn', // Change to 'warn' to only give warnings
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
