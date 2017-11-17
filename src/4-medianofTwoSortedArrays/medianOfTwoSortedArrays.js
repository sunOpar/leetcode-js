/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const array = mergeSort(nums1.concat(nums2));
  const { length } = array;
  const middleIndex = Math.ceil(length / 2) - 1;
  if (length % 2 === 0) {
    return (array[middleIndex] + array[middleIndex + 1]) / 2;
  }
  return array[middleIndex];
};
const mergeSort = nums => {
  if (nums.length === 1) {
    return nums;
  }
  const middleIndix = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, middleIndix);
  const rightArray = nums.slice(middleIndix, nums.length);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};
const merge = (nums1, nums2) => {
  let i = 0,
    j = 0;
  const resultArray = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      resultArray.push(nums2[j++]);
    } else if (nums1[i] < nums2[j]) {
      resultArray.push(nums1[i++]);
    } else if (nums1[i] === nums2[j]) {
      resultArray.push(nums2[j++]);
      resultArray.push(nums1[i++]);
    }
  }
  if (i === nums1.length && j < nums2.length) {
    resultArray.push.apply(resultArray, nums2.slice(j, nums2.length));
  }
  if (j === nums2.length && i < nums1.length) {
    resultArray.push.apply(resultArray, nums1.slice(i, nums1.length));
  }
  return resultArray;
};
module.exports = findMedianSortedArrays;
