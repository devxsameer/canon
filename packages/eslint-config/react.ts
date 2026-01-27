import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default {
  files: ['**/*.{ts,tsx}'],
  plugins: {
    react,
    'react-hooks': reactHooks,
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
