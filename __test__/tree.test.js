'use strict';

const trees = require('../tree/tree');

describe('testing functionality of binary trees and binary search trees', () => {
  it ('Can successfully instantiate an empty tree', () => {
    const test = new trees.BinaryTree();

    expect(test.root).toEqual(null);
  });

  it ('Can successfully instantiate a tree with a single root node', () => {
    const test = new trees.BinaryTree();
    test.root = new trees.node(1);

    expect(test.root.value).toEqual(1);
  });

  it ('Can successfully add a left child and right child to a single root node', () => {
    const test = new trees.BinarySearchTree();
    test.root = new trees.node(5);
    test.add(2);
    test.add(9);
console.log('----------------------------------->>'+test.root.right.value)
    expect(test.root.left.value).toEqual(2);
    expect(test.root.right.value).toEqual(9);
  });

  it ('Can successfully return a collection from a preorder traversal', () => {
    const test = new trees.BinaryTree();
    test.root = new trees.node(1);
    test.root.left = new trees.node(2);
    test.root.right = new trees.node(3);
    const testArray = test.preOrder();

    expect(testArray).toEqual([1,2,3]);
  });

  it ('Can successfully return a collection from an inorder traversal', () => {
    const test = new trees.BinaryTree();
    test.root = new trees.node(1);
    test.root.left = new trees.node(2);
    test.root.right = new trees.node(3);
    const testArray = test.inOrder();

    expect(testArray).toEqual([2,1,3]);
  });

  it ('Can successfully return a collection from a postorder traversal', () => {
    const test = new trees.BinaryTree();
    test.root = new trees.node(1);
    test.root.left = new trees.node(2);
    test.root.right = new trees.node(3);
    const testArray = test.postOrder();

    expect(testArray).toEqual([2,3,1]);
  });

});