// https://leetcode.com/problems/valid-parentheses/description/

const func = require('./validParentheses');

describe('longest common prefix', () => {
  test('common test', () => {
    expect(func('([)]')).toBe(false);
    expect(func('[(())]{}')).toBe(true);
  })
});