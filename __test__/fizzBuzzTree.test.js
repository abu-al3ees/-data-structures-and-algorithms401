'use strict';

const ktree = require('../fizzBuzzTree/fizzBuzzTree').ktree;
const FizzBuzzTree = require('../fizzBuzzTree/fizzBuzzTree').FizzBuzzTree;
describe('Binary Tree', () => {
  
  const  tree = new ktree();
         tree.newNode(1);
         tree.newNode(2);
         tree.newNode(9);
         tree.newNode(5);
         tree.newNode(15);
         tree.newNode(7);
 
 
  it('should rturn Fizz' ,() => {

    expect(FizzBuzzTree(tree).arry[1].value).toEqual('Fizz');
  });
  it('should return Buzz', () => {
    
    expect(FizzBuzzTree(tree).arry[2].value).toEqual('Buzz');
  });
  it('should rturn  FizzBuzz', () => {
   
    expect(FizzBuzzTree(tree).arry[3].value).toEqual('FizzBuzz');
  });
  it('If the value is not divisible by 3 or 5, simply turn the number into a String', () => {
    
    expect(typeof FizzBuzzTree(tree).arry[4].value).toEqual('string');
  });
});