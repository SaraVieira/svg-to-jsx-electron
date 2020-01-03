export const prettierValues = [
  { key: "printWidth", default: 80, type: "number" },
  { key: "tabWidth", default: 2, type: "number" },
  { key: "useTabs", default: false, type: "boolean" },
  { key: "semi", default: true, type: "boolean" },
  { key: "singleQuote", default: false, type: "boolean" },
  {
    key: "quoteProps",
    default: "as-needed",
    type: "select",
    values: ["as-needed", "consistent", "preserve"]
  },
  { key: "jsxSingleQuote", default: false, type: "boolean" },
  {
    key: "trailingComma",
    default: "none",
    type: "select",
    values: ["none", "es5", "all"]
  },
  { key: "bracketSpacing", default: true, type: "boolean" },
  { key: "jsxBracketSameLine", default: false, type: "boolean" },
  {
    key: "arrowParens",
    default: "always",
    type: "select",
    values: ["always", "avoid"]
  }
]
