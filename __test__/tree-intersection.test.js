'use strict';

const tree = require('../tree-intersection/tree-intersection');

describe('testing tree intersection function', () => {

  let tree1 = new tree.BinaryTree();
  tree1.root = new tree.Node(150);
  tree1.root.left = new tree.Node(100);
  tree1.root.right = new tree.Node(250);
  tree1.root.left.left = new tree.Node(75);
  tree1.root.left.right = new tree.Node(160);
  tree1.root.left.right.left = new tree.Node(125);
  tree1.root.left.right.right = new tree.Node(175);
  tree1.root.right.left = new tree.Node(200);
  tree1.root.right.right = new tree.Node(350);
  tree1.root.right.right.left = new tree.Node(300);
  tree1.root.right.right.right = new tree.Node(500);

  let tree2 = new tree.BinaryTree();
  tree2.root = new tree.Node(42);
  tree2.root.left = new tree.Node(100);
  tree2.root.right = new tree.Node(600);
  tree2.root.left.left = new tree.Node(15);
  tree2.root.left.right = new tree.Node(160);
  tree2.root.left.right.left = new tree.Node(125);
  tree2.root.left.right.right = new tree.Node(175);
  tree2.root.right.left = new tree.Node(200);
  tree2.root.right.right = new tree.Node(350);
  tree2.root.right.right.left = new tree.Node(4);
  tree2.root.right.right.right = new tree.Node(500);

  it(' output like example', () => {
    let test = tree.treeIntersection(tree1, tree2);

    expect(test).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });

});