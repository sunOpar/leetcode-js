/**
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */
const twoSum = require('./twoSum');

describe('twoSum',()=>{
  test('twoSum test',()=>{
    expect(twoSum([3, 2, 1, 4, 5], 3)).toEqual(expect.arrayContaining([1,2]))
    expect(twoSum([4, 2, 5, 1, 3], 9)).toEqual(expect.arrayContaining([0,2]))
    expect(twoSum([3, 5, 1, 4, 9], 5)).toEqual(expect.arrayContaining([2,3]))
  })
})
