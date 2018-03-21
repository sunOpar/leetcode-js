/**
 *
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const Node = new ListNode();
  let copy = Node;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      copy.next = l1;
      l1 = l1.next;
    } else {
      copy.next = l2;
      l2 = l2.next;
    }
    copy = copy.next;
  }
  copy.next = l1 ? l1 : l2;
  return Node.next;
};

module.exports = mergeTwoLists;
