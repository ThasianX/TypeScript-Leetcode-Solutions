/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) {
    return false;
  }
  return (
    isIdentical(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

const isIdentical = (
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean => {
  /*
    root1 and root2 are identical for a subtree if both
    are null. In the case that only one of them is null,
    that indicates that they are not identical
  */
  if (root1 === null || root2 === null) {
    return root1 === root2;
  }
  return (
    root1.val === root2.val &&
    isIdentical(root1.left, root2.left) &&
    isIdentical(root1.right, root2.right)
  );
};
