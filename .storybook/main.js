module.exports = {
  "stories": [
    "../src/introduce/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react"
}