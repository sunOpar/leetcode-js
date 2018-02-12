/** 
 * https://leetcode.com/problems/reverse-integer/description/
 * 
 */
const reverseInteger = require('./reverseInteger');

describe('reverseInteger', ()=>{
  test('common test',()=>{
    expect(reverseInteger(123)).toBe(321);
    expect(reverseInteger(1)).toBe(1);
    expect(reverseInteger(0)).toBe(0);
    expect(reverseInteger(1234500)).toBe(54321);
  })
  test('return 0 when overflow 32-bit', ()=>{
    expect(reverseInteger(2147483649)).toBe(0);
    expect(reverseInteger(-2147483649)).toBe(0);
  })
})