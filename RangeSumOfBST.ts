class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
  let rangeSum = 0;

  if (root !== null) {
    if (root.val >= L && root.val <= R) {
      rangeSum += root.val;
    }

    rangeSum += rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
  }

  return rangeSum;
}
