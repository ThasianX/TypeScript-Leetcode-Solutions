/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  const traverseForDepth = root => {
    if(!root) { return 0; }

    let currentDepth = 0;
    root.children.forEach(child => {
      currentDepth = Math.max(currentDepth, traverseForDepth(child));
    });

    return currentDepth + 1;
  }
  return traverseForDepth(root);
};


