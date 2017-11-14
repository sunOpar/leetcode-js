const ListNode = require('./ListNode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumber = (l1, l2) => {
  let l1Node = l1;
  let l2Node = l2;
  let resultNode = new ListNode();
  let shouldCarry = false;
  let accumulateResult = resultNode;
  while (l1Node || l2Node) {
    let l1NodeVal = 0,
      l2NodeVal = 0;
    if (l1Node) {
      l1NodeVal = l1Node.val;
      l1Node = l1Node.next;
    }
    if (l2Node) {
      l2NodeVal = l2Node.val;
      l2Node = l2Node.next;
    }
    accumulateResult.val = l1NodeVal + l2NodeVal;
    if (shouldCarry) {
      accumulateResult.val += 1;
      shouldCarry = false;
    }
    if (accumulateResult.val > 9) {
      shouldCarry = true;
      accumulateResult.val -= 10;
    }
    if (l1Node || l2Node) {
      accumulateResult.next = new ListNode();
      accumulateResult = accumulateResult.next;
    } else if (shouldCarry) {
      accumulateResult.next = new ListNode();
      accumulateResult.next.val = 1;
    } else {
      accumulateResult.next = null;
    }
  }

  return resultNode;
};
module.exports = addTwoNumber;
