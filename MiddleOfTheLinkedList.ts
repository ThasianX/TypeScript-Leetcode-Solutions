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

function middleNode(head: ListNode | null): ListNode | null {
  let slowNode = head;
  let fastNode = head!.next;

  while(fastNode !== null) {
    slowNode = slowNode!.next;
    fastNode = fastNode.next?.next || null;
  }

  return slowNode;
};
