'use strict'

const BT=require('../breadth-first/breadth-first');
describe('Breadth-First Traversal', () => {

    const test = new BT.BinaryTree();
    test.root = new BT.node(2);
    test.root.left = new BT.node(7);
    test.root.left.left=new BT.node(2);
    test.root.left.right=new BT.node(6);
    test.root.left.right.left=new BT.node(5);
    test.root.left.right.right=new BT.node(11);
    test.root.right = new BT.node(5);
    test.root.right.right=new BT.node(9);
    test.root.right.right.left=new BT.node(4);
   
    const testArray = test.breadthFirst();

   

    it(' Can successfully output breadth first traversal.', () => {
       // same example in code challenge 
        expect(testArray).toEqual([2,7,5,2,6,9,5,11,4]);
      
    });
})