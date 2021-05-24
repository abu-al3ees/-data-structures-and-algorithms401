'use strict';

const LinkedList=require('../linkedList/linked-List.js');
const Node=require('../linkedList/node.js');
const llZip=require('../llZip/ll-zip.js');

const list1=new LinkedList();

list1.head = new Node(1);
list1.head.next = new Node(2);
list1.head.next.next = new Node(3);

//console.log('list1------>'+list1)
const list2=new LinkedList();

list2.head = new Node(4);
list2.head.next = new Node(5);
list2.head.next.next = new Node(6);

//console.log('list2------>'+list2)

let combain=llZip(list1,list2);
const list3=new LinkedList();
describe('zipLists Testing',()=>{
  it(' zipped correct',()=>{
    expect(combain.toString()).toEqual('{1} -> {4} -> {2} -> {5} -> {3} -> {6} -> {null}');
    expect(llZip(list1,list3).toString()).toEqual('{1} -> {2} -> {3} -> {null}');
  
  });
});