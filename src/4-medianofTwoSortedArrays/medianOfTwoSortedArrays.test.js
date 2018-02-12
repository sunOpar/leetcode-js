/**
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 */

const findMedianSortedArrays = require('./medianOfTwoSortedArrays');
describe('medianOfTwoSortedArrays',()=>{
  test('medianOfTwoSortedArrays',()=>{
    expect(findMedianSortedArrays([1,2],[3,4])).toBe(2.5);
    expect(findMedianSortedArrays([1],[3])).toBe(2);
    expect(findMedianSortedArrays([1,8,9],[3,6,4])).toBe(5);
  })
})