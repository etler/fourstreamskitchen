module.exports = {
  // Using js config with function syntax to avoid passing file list because if tsc gets files as args
  // it ignores the tsconfig or throws if one is passed as arg as well via -p
  // https://github.com/okonet/lint-staged/issues/829#issuecomment-618649288
  "(*.{ts,tsx}|yarn.lock)": () => "tsc",
  // This pattern is the same as ^ but has to be unique since it's an object key
  "**/*.{ts,tsx}": "eslint",
  "*.{css,scss}": "stylelint",
  // Dependency changes can potentially cause type change build fails, so re-lint the entire project when they update
  "yarn.lock": () => "./scripts/lint",
  // Make sure package.json and yarn.lock are in sync when dependencies update
  "package.json|yarn.lock": () => "yarn install --frozen-lockfile",
}
