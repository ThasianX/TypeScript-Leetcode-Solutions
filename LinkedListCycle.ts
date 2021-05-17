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

/*
  The idea behind this solution has to deal primarily with cycled
  lists. For uncycled lists, once `fastPtr` becomes null, we know
  there is no cycle. For cycled lists, the `slowPtr` and `fastPtr`
  will end up aligning.
*/

function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }

  let slowPtr = head;
  let fastPtr = head.next;

  while (fastPtr.next !== null && fastPtr.next.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return true;
}
