/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if(root === null) { return []; }
  var orderedChildren = [];
  orderedChildren.push(root.val);
  for(let child of root.children) {
    orderedChildren.push(...preorder(child));
  }
  return orderedChildren;
};

