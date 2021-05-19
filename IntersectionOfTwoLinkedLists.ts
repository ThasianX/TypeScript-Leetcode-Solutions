/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  const nodesInA = getNodesInList(headA);
  const nodesInB = getNodesInList(headB);

  let traverseHeadA: ListNode;
  let traverseHeadB: ListNode;
  if (nodesInA > nodesInB) {
    // Move the head of A forward to align its length with B
    traverseHeadA = moveHeadForward(headA, nodesInA - nodesInB);
    traverseHeadB = headB;
  } else {
    // Move the head of B forward to align its length with A
    traverseHeadA = headA;
    traverseHeadB = moveHeadForward(headB, nodesInB - nodesInA);
  }

  /*
    Iterate through the aligned lists and return the
    intersection node if found
  */
  while (traverseHeadA !== null) {
    if (traverseHeadA === traverseHeadB) {
      return traverseHeadA;
    }
    traverseHeadA = traverseHeadA.next;
    traverseHeadB = traverseHeadB.next;
  }

  return null;
}

const moveHeadForward = (head: ListNode, steps: number): ListNode => {
  let step = 0;
  let traverseHead = head;

  while (step < steps) {
    traverseHead = traverseHead.next;
    step++;
  }

  return traverseHead;
};

const getNodesInList = (head: ListNode | null): number => {
  let count = 0;
  let traverseHead = head;

  while (traverseHead !== null) {
    traverseHead = traverseHead.next;
    count++;
  }

  return count;
};
