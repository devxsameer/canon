import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import base from '@repo/eslint-config/base';
import node from '@repo/eslint-config/node';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  ...base,
  node,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
  },
];
