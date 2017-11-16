/**
 * 通过Map来解决，i是左坐标，j是右坐标。增加时发现重复，就移动左坐标
 * @param {String} s 
 * @return {Number} maxLength
 */
const lengthOfLongestSubstring = s => {
  let maxLength = 0;
  const map = new Map();
  const { length } = s;
  for (let j = 0, i = 0; j < length; j++) {
    if (map.has(s[j])) {
      // 如果重复，i坐标右移
      i = Math.max(map.get(s[j]) + 1, i);
    }
    maxLength = Math.max(maxLength, j - i + 1);
    map.set(s[j], j);
  }

  return maxLength;
};
module.exports = lengthOfLongestSubstring;
