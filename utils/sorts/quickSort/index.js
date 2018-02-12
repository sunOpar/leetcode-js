const quickSort = nums => {
  _quickSort(nums, 0, nums.length - 1);
  return nums;
};
const _quickSort = (nums, left, right) => {
  if (left < right) {
    const pivot = partition(nums, left, right);
    if (left < pivot) {
      _quickSort(nums, left, pivot - 1);
    }
    if (right > pivot) {
      _quickSort(nums, pivot + 1, right);
    }
  }
};
const partition = (nums, left, right) => {
  const pivot = Math.floor((left + right) / 2);
  const pivotNum = nums[pivot];
  while (left < right) {
    while (nums[left] < pivotNum && left < right) {
      left++;
    }
    while (nums[right] > pivotNum && right > left) {
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
