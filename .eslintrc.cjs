const getTsConfig = require("./eslint-config/typescript.eslint");

const config = getTsConfig();

config.plugins = [...config.plugins, "react", "react-hooks"];
config.extends = [
  ...config.extends,
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "next/core-web-vitals",
];
config.rules = {
  ...config.rules,
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/label-has-associated-control": "off",
  "jsx-a11y/no-noninteractive-element-interactions": "off",
  "jsx-a11y/no-static-element-interactions": "off",
  "react/no-deprecated": "warn",
  "react/display-name": "off",
  "react/prop-types": "off",
  "react/state-in-constructor": ["error", "always"],
  "react/jsx-boolean-value": "error",
  "react/no-unescaped-entities": "off",
  "react/jsx-child-element-spacing": "error",
  "react/jsx-closing-bracket-location": ["error", "line-aligned"],
  "react/require-default-props": "warn",
  "react/jsx-curly-brace-presence": "error",
  "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
  "react/jsx-equals-spacing": ["error", "never"],
  "react/jsx-filename-extension": [
    1,
    { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  ],
  "react/jsx-max-props-per-line": ["error", { when: "multiline" }],

  "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
  "react-hooks/rules-of-hooks": "off",
  "react-hooks/exhaustive-deps": "off",
};
config.settings = {
  ...config.settings,
  react: {
    version: "detect",
  },
};

module.exports = config;
