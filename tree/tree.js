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
class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    add(value) {
      let newNode = new Node(value);
      if(this.root === null){
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while(current){
        if(value === current.value){
          return undefined;
        }
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if(current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    contains(value) {
      
      if(this.root === null) {
        return 'no nodes in tree';
      }
      let current = this.root;
      console.log('current-----++-1------->'+current)
      let found = false;
      while(current && !found){
        if(value < current.value){
          current = current.left;
        } else if (value > current.value){
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }
    findMax(){
let current=this.root;

while(current.right!==null){
  current=current.right;
}
return current.value;
    }
    sumOdd(){
      let sum =0;
      let current=this.root;
      while(current.right !==null){
        if(!current.right.value%2==0){
          sum+=current.right.value
           
        }
        current=current.right
      }
      return sum;
    }
}



module.exports = {
    node: Node,
    BinaryTree: BinaryTree,
    BinarySearchTree: BinarySearchTree,
  };