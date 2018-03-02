// https://leetcode.com/problems/longest-common-prefix/description/

const func = require('./longestCommonPrefix');

describe('longest common prefix', () => {
  test('common test', () => {
    expect(func(['abc', 'abdf', 'abbb'])).toBe('ab')
  })
})