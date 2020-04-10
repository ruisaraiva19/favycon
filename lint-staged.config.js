module.exports = {
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
  '*.tsx': ['eslint --fix', 'stylelint --fix'],
  '*.{js,ts}': ['eslint --fix'],
  '*.json': ['prettier --write'],
  '*.{css,scss}': ['stylelint --fix'],
}
