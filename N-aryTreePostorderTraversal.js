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
var postorder = function(root) {
  if(root === null) { return []; }
  var orderedChildren = [];
  for(let child of root.children) {
    orderedChildren.push(...postorder(child));
  }
  orderedChildren.push(root.val);
  return orderedChildren;
};

