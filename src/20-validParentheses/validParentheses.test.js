// https://leetcode.com/problems/valid-parentheses/description/

const func = require('./validParentheses');

describe('longest common prefix', () => {
  test('common test', () => {
    expect(func('([)]')).toBe(false);
    expect(func('[(())]{}')).toBe(true);
    expect(func('[](){}')).toBe(true);
  })
  test('boundary test', ()=>{
    expect(func('[')).toBe(false);
    expect(func('((')).toBe(false);
  })
});