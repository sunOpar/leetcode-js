// https://leetcode.com/problems/palindrome-number/description/

const palindromeNumber = require('./palindromeNumber');
describe('palindromeNumber',()=>{
  test('common test', ()=>{
    expect(palindromeNumber(123321)).toBe(true);
    expect(palindromeNumber(12321)).toBe(true);
    expect(palindromeNumber(1232)).toBe(false);
  })
});

