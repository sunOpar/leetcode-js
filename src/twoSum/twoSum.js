/**
 * 通过map将复杂度控制在O(n)
 * @param {Array} nums 
 * @param {Number} target 
 */
const twoSum = (nums, target) => {
  const numsMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const anotherIndex = numsMap.get(target - element);
    if (typeof anotherIndex !== 'undefined') {
      return [index, anotherIndex];
    }
    numsMap.set(element, index);
  }
};

module.exports = twoSum;
