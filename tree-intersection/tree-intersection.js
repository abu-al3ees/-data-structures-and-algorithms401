'use strict';

class Node {
    constructor(value, left= null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}



class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    // Pre-Order: Root - Left - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    preOrder() {
        let results = [];
        let traverse = (node) => {
            results.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }
    // In-Order: Left - Root - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    inOrder() {
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            results.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }
    // Post-Order:  Left - Right - Root
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    postOrder() {
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            results.push(node.value);
        }
        traverse(this.root);
        return results;
    }
    
   
}


function treeIntersection(tree1, tree2) {
  let treeOneArray = tree1.preOrder();
  let treeTwoArray = tree2.preOrder();
  let results = [];
  
  for(let i = 0; i < treeOneArray.length; i++){
    if(treeOneArray[i] === treeTwoArray[i]){
      results[results.length] = treeOneArray[i];
    }
  }

  return results;

}

module.exports = {
    BinaryTree: BinaryTree,
  Node:Node,
  treeIntersection
};