const quickSort = nums => {
  _quickSort(nums, 0, nums.length - 1);
  return nums;
};

const _quickSort = (nums, left, right) => {
  let pivot;
  if (left < right) {
    pivot = partition(nums, left, right);
    if (left < pivot) {
      _quickSort(nums, left, pivot - 1);
    }
    if (right > pivot) {
      _quickSort(nums, pivot + 1, right);
    }
  }
};
const partition = (nums, left, right) => {
  const pivot = Math.floor((right + left) / 2);
  const pivotNum = nums[pivot];
  while (left < right) {
    while (nums[left] < pivotNum && left < right) {
      left++;
    }
    while (nums[right] > pivotNum && left < right) {
      right--;
    }
    if (left < right) {
      spaw(nums, left, right);
    }
  }
  return left;
};
const spaw = (nums, left, right) => {
  [nums[left], nums[right]] = [nums[right], nums[left]];
};

module.exports = quickSort;
