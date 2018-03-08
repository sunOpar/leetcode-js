/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  const minLen = strs.reduce((prev, current) => {
    return Math.min(prev, current.length)
  }, Number.MAX_SAFE_INTEGER)
  let low = 1;
  let high = minLen;
  while (low <= high) {
    const middle = (low + high) / 2;
    if (isCommonPrefix(strs, middle)) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return strs[0].substring(0, (low + high) / 2)
}
function isCommonPrefix(strs, index) {
  const prefix = strs[0].substring(0, index);
  return strs.every((item) => item.substring(0, index) === prefix)
}
module.exports = longestCommonPrefix;