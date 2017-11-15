/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 *  Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */
const addTwoNumber = require('./addTwoNumber');
const ListNode = require('./ListNode');

const createListNode = arrays => {
  const listNode = new ListNode(arrays.shift());
  let nextListNode = listNode;
  while (arrays.length > 0) {
    nextListNode.next = new ListNode(arrays.shift());
    nextListNode = nextListNode.next;
  }
  return listNode;
};
describe('addTwoNumber', () => {
  test('addTwoNumber', () => {
    expect(
      addTwoNumber(createListNode([1, 2, 3]), createListNode([1, 2, 3]))
    ).toEqual(createListNode([2, 4, 6]));
    expect(addTwoNumber(createListNode([5]), createListNode([5]))).toEqual(
      createListNode([0, 1])
    );
  });
});
