// https://leetcode.com/problems/merge-two-sorted-lists/description/
const func = require("./21-mergeTwoSortedLists.js");

function ListNode(val) {
  this.val = val;
  this.next = null;
}
function createList(arr) {
  var Node = new ListNode(arr.shift());
  arr.reduce((prev, current) => {
    prev.next = new ListNode(current);
    return prev.next
  }, Node);
  return Node;
}

describe("merge Two Sorted Lists", () => {
  test("common test", () => {
    const a = createList([1, 2, 4]);
    const b = createList([1, 3, 4]);
    const c = createList([1, 1, 2, 3, 4, 4]);
    expect(func(a, b)).toEqual(c);
  });
  test('boundary test', () => {
    
  });
});
