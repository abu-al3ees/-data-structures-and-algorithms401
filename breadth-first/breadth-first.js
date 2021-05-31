'use strict';
const nodeyy=require('../linkedList/node');

class Queue {
  constructor() {
      this.front = null;
      this.tail=null;
  }
  enqueue(value) {
    let node = new nodeyy(value);
    if (this.isEmpty()) {
        this.front = node;
        this.tail = this.front.next;
    } else {
        if (this.tail) {
         this.tail.next = node;
           this.tail = node;
        } else {
            this.tail = node;
            this.front.next = this.tail;
        }

    }
    return this;
}
  dequeue() {
      if (this.isEmpty()) {
          return 'Exception';
      } else {
          this.front = this.front.next;
      }
  }

peek(){
    if(!this.front){
      return null;
    }
    return this.front.value;
  }
  
  isEmpty() {
      return this.front === null;
  }
}
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

    breadthFirst(){
      let arrayBT = [];
      let q = new Queue;
      q.enqueue(this.root);
      
      while (q.front) {
         
        arrayBT.push(q.front.value.value);
        if (q.front.value.left) {
          q.enqueue(q.front.value.left);
        }
        if (q.front.value.right) {
          q.enqueue(q.front.value.right);
        }
        q.dequeue();
      }
    
      return arrayBT;
    
    };
   
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
}



module.exports = {
    node: Node,
    BinaryTree: BinaryTree,
    BinarySearchTree: BinarySearchTree,
    Queue:Queue
  };