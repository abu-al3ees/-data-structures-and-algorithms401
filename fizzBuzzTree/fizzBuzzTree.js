'use strict';

const Node=require('../linkedList/node')

class ktree {
    constructor() {
        this.root = null;
        this.arry = []; 
    }
    newNode(value) {
       const node = new Node(value);
        if(this.root === null) {
          this.root = node;
        } else {
          this.arry.push(node);
        }
        return node;
      }
}

function FizzBuzzTree(tree) {
   
    for (let i = 0; i < tree.arry.length; i++) {
        if (tree.arry[i].value % 15=== 0) {
            tree.arry[i].value = 'FizzBuzz';
        } else if (tree.arry[i].value % 3 === 0) {
            tree.arry[i].value = 'Fizz';
        } else if (tree.arry[i].value % 5 === 0) {
            tree.arry[i].value = 'Buzz';
        } else {
            tree.arry[i].value = tree.arry[i].value.toString();
        }
        
    }
    return tree;
}

module.exports = {
Node,
ktree,
FizzBuzzTree
}