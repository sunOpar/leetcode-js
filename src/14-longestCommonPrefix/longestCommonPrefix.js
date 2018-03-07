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
  let commonPrefix = '';
  let hasCommonPrefix = true;
  let prefixIndex = 0;
  do {
    const firstElement = strs[0][prefixIndex] || '';
    hasCommonPrefix = strs.every(item => item[prefixIndex] === firstElement);
    if (hasCommonPrefix) {
      // 如果strs为['','']，firstElement有可能为undefined
      commonPrefix += firstElement || '';
    }
    prefixIndex++;
  } while (hasCommonPrefix);
  return commonPrefix;
}
module.exports = longestCommonPrefix;