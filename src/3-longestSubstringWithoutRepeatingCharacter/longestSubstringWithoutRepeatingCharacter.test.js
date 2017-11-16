/**
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring,
 *  "pwke" is a subsequence and not a substring.
 */
const lengthOfLongestSubstring = require('./longestSubstringWithoutRepeatingCharacter');
describe('longestSubstringWithoutRepeatingCharacter', () => {
  test('longestSubstringWithoutRepeatingCharacter', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('abcade')).toBe(5);
  });
});
