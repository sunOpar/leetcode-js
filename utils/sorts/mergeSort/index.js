/**
 * 参考： http://blog.csdn.net/acdreamers/article/details/24244643
 */

const mergeSort = arr => {
  const leftIndex = 0;
  const rightIndex = arr.length - 1;
  _mergeSort(leftIndex, rightIndex, arr);
  return arr;
};
const _mergeSort = (leftIndex, rightIndex, arr) => {
  if (leftIndex < rightIndex) {
    const middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    _mergeSort(leftIndex, middleIndex, arr);
    _mergeSort(middleIndex + 1, rightIndex, arr);
    merge(leftIndex, rightIndex, middleIndex, arr);
  }
};
const merge = (leftIndex, rightIndex, middleIndex, arr) => {
  // 定义两个指针
  let i = leftIndex;
  let j = middleIndex + 1;
  /**
   * 首先移动i，直到arr[i]>arr[j]，i经过的这些数组，是两个数组中最小的，然后接着
   * 移动j，直到arr[j]>arr[i]，j经过的数组，都是第二小的，然后把第二小的数组移到第一组的后面；如此反复
   */
  while (i < j && j <= rightIndex) {
    while (arr[i] <= arr[j] && i < j) {
      i++;
    }
    let index = j;
    while (arr[j] <= arr[i] && j <= rightIndex) {
      j++;
    }
    convent(arr, i, index, j);
    i += j - index;
  }
};
/**
 * [i,index)和[index,j)交换
 * 交换利用手摇算法，即三次倒序完成反转，先反转[i,index),再反转[index,j)。最后反转[i,j]
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} index
 * @param {Number} j
 */
const convent = (arr, i, index, j) => {
  reverse(arr, i, index - 1);
  reverse(arr, index, j - 1);
  reverse(arr, i, j - 1);
};
/**
 * 反转，前后两个指针向中间依次扫描交换。
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 */
const reverse = (arr, i, j) => {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j--;
    i++;
  }
};
module.exports = mergeSort;
