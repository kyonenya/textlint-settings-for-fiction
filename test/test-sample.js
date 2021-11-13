const TextLintTester = require('textlint-tester').default;
const rule = require('textlint-rule-no-todo').default;

const tester = new TextLintTester();

// ruleName, rule, { valid, invalid }
tester.run('no-todo', rule, {
  valid: [
    'This is ok',
    {
      // text with options
      text: 'This is test',
      options: {
        key: 'value',
      },
    },
  ],
  invalid: [
    // line, column
    {
      text: '- [ ] string',
      errors: [
        {
          message: "Found TODO: '- [ ] string'",
          line: 1,
          column: 3,
        },
      ],
    },
    // index
    {
      text: '- [ ] string',
      errors: [
        {
          message: "Found TODO: '- [ ] string'",
          index: 2,
        },
      ],
    },
    {
      text: 'TODO: string',
      options: { key: 'value' },
      errors: [
        {
          message: "Found TODO: 'TODO: string'",
          line: 1,
          column: 1,
        },
      ],
    },
  ],
});
