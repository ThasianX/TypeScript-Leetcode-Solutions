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

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let newHead = head.next;
  head.next = swapPairs(head.next.next);
  newHead.next = head;

  return newHead;
}

// ITERATIVE SOLUTION
// function swapPairs(head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) {
//     return head;
//   }

//   let newHead = head.next;
//   let startNode = head;

//   while (startNode !== null && startNode.next !== null) {
//     let nextNode = startNode.next;
//     /*
//       This will be overwritten if a next pair exists.
//       If not, this properly maintains the link structure.
//     */
//     startNode.next = nextNode.next;
//     // Swap the order of the node pair
//     nextNode.next = startNode;
//     // Sets the new start node for next pair swap
//     startNode = nextNode.next?.next;

//     if (nextNode.next.next?.next) {
//       nextNode.next.next = nextNode.next.next.next;
//     }
//   }

//   return newHead;
// }
