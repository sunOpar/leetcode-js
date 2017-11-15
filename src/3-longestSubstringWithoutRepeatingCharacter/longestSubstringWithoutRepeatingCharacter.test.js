const lengthOfLongestSubstring = require('./longestSubstringWithoutRepeatingCharacter');
describe('longestSubstringWithoutRepeatingCharacter', () => {
  test('longestSubstringWithoutRepeatingCharacter', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
