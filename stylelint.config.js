module.exports = {
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order', 'stylelint-scss'],
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'color-hex-length': 'long',
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['flex-flow'],
      },
    ],
    'declaration-block-no-duplicate-properties': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['after-same-name', 'inside-block', 'blockless-after-same-name-blockless', 'blockless-after-blockless', 'first-nested'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'r'],
      },
    ],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['x'],
      },
    ],
    'order/order': [
      ['custom-properties', 'at-variables', 'declarations', 'at-rules', 'rules', 'less-mixins'],
      {
        severity: 'warning',
      },
    ],
    'order/properties-order': [
      [
        {
          emptyLineBefore: 'never',
          properties: ['content'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
        },
        {
          emptyLineBefore: 'never',
          properties: [
            'box-sizing',
            'display',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'order',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'min-width',
            'min-height',
            'max-width',
            'max-height',
            'width',
            'height',
            'float',
            'clear',
            'clip',
            'visibility',
            'overflow',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'box-shadow',
          ],
        },
        {
          emptyLineBefore: 'never',
          properties: [
            'background',
            'background-attachment',
            'background-clip',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            'background-size',
          ],
        },
        {
          emptyLineBefore: 'never',
          properties: [
            'color',
            'font',
            'font-family',
            'font-size',
            'font-smoothing',
            'font-style',
            'font-variant',
            'font-weight',
            'letter-spacing',
            'line-height',
            'list-style',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-transform',
            'text-wrap',
            'vertical-align',
            'white-space',
            'word-spacing',
          ],
        },
      ],
      {
        severity: 'warning',
      },
    ],
    'block-no-empty': true,
    'rule-empty-line-before': ['always', { except: ['after-single-line-comment', 'first-nested'] }],
    'comment-no-empty': true,
    'comment-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
    'no-duplicate-selectors': true,
    'no-duplicate-at-import-rules': true,
    'no-invalid-position-at-import-rule': null,
    'color-function-notation': 'legacy',
    'import-notation': 'string',
    'at-rule-no-unknown': null,
    "scss/at-rule-no-unknown": true,
    "function-no-unknown": [true, {
      "ignoreFunctions": ["map-get"]
    }]
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'at-rule-no-unknown': null,
        'import-notation': null,
      },
    },
    {
      files: ['components/**/*.css', 'pages/**/*.css'],
      rules: {
        'alpha-value-notation': 'percentage',
        'at-rule-no-unknown': null,
      },
    },
  ],
};
