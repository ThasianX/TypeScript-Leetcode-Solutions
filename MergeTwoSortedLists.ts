class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// n: length of `l1` + `l2`
// Space: O(n) - Worst/Avg/Best will always be this
// Time: O(n) - the while loop does all the merging instead
// of short circuiting to append the rest of a given list
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l1Current = l1;
  let l2Current = l2;
  // Useful for holding a reference to the head of our list
  let dummy = new ListNode();
  // The current node of the merged list
  let mergedCurrent = dummy;

  while (l1Current != null && l2Current != null) {
    // Comparator is ascending
    if (l1Current.val < l2Current.val) {
      mergedCurrent.next = new ListNode(l1Current.val);
      l1Current = l1Current.next;
    } else {
      mergedCurrent.next = new ListNode(l2Current.val);
      l2Current = l2Current.next;
    }
    mergedCurrent = mergedCurrent.next;
  }

  // At this point, we could have leftover nodes from either
  // l1 or l2. We also know that either `l1Current` or `l2Current`
  // is null. As such, we just need to append whatever is left of
  // the other list to the list
  mergedCurrent.next = l1Current === null ? l2Current : l1Current;

  // Return the head of the list
  return dummy.next;
}
