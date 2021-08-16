module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
          "./**/tsconfig.json"
        ],
        createDefaultProgram: true,
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        // AirBnB Styleguide rules
        'airbnb-typescript/base',
        // Settings for Prettier
        'plugin:prettier/recommended'
      ],
      rules: {
        "import/prefer-default-export": "off",
      }
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { "code": 140 }]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}
