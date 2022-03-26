module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  plugins: [],
  rules: {
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "error",
      {
        "code": 100,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true
      }
    ],
    "object-curly-spacing": ["error", "always", { "objectsInObjects": true } ],
    "vue/object-curly-spacing": ["error", "always", { "objectsInObjects": true } ],
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "ignores": []
    }],
    "vue/require-default-prop": "off",
    "no-useless-constructor": "off",
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "any",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3,
        "allowFirstLine": true
      },
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
}
