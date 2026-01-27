export default {
  '*.{ts,tsx,js,jsx}': [() => 'turbo lint -- --fix --max-warnings=0'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
