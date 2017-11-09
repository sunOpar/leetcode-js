/**
 * 暴力搜索
 * @param {*} nums 
 * @param {*} target 
 */
const twoSum = (nums, target) => {
  let result = [];
  wrap: for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        result = [i, j];
        break wrap;
      }
    }
  }
  return result;
};

module.exports = twoSum;
