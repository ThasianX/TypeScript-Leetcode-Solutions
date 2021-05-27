/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  let traversedNums: number[] = [];

  const traverse = (root: Node | null) => {
    if (root === null) {
      return;
    }

    traversedNums.push(root.val);
    root.children.forEach(traverse);
  };

  traverse(root);

  return traversedNums;
}
