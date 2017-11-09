/**
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */
const assert = require('assert');
const twoSum = require('./twoSum');

assert.deepStrictEqual(twoSum([3, 2, 1, 4, 5], 3), [1, 2]);
assert.deepStrictEqual(twoSum([4, 2, 5, 1, 3], 9), [0, 2]);
assert.deepStrictEqual(twoSum([3, 5, 1, 4, 2], 5), [0, 4]);
