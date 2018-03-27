// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

const func = require("./removeDuplicatesFromSortedArray");

describe("removeDuplicatesFromSortedArray", () => {
  test("common test", () => {
    expect(func([1,1,2])).toBe(2);
  });
});
