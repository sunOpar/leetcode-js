const mergeSort = arr => {
  const result = _mergeSort(arr);
  return result;
};
const _mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex, arr.length);
  return twoArraySort(_mergeSort(left), _mergeSort(right));
};
const twoArraySort = (left, right) => {
  // 定义两个指针
  let i = 0,
    j = 0;
  const { length: leftLength } = left;
  const { length: rightLength } = right;
  const resultArray = [];
  while (i < leftLength || j < rightLength) {
    const leftValue = left[i];
    const rightValue = right[j];
    if (leftValue < rightValue || rightValue === undefined) {
      resultArray.push(left[i++]);
    } else if (leftValue > rightValue || leftValue === undefined) {
      resultArray.push(right[j++]);
    } else if (leftValue === rightValue) {
      resultArray.push(left[i++], right[j++]);
    }
  }
  return resultArray;
};
module.exports = mergeSort;
