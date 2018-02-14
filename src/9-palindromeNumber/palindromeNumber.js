/**
 * 不使用额外的空间判断是否回文。
 * 可以通过将数字翻转对比来判断是否回文。
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  function reverse(x) {
    return parseInt(
      Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
  }
  return x === reverse(x);
}
module.exports = isPalindrome;
