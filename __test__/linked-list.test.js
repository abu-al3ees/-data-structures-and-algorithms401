'use strict';

const LinkedList=require('../linkedList/linked-List');



describe('test Singly Linked Lists',()=>{
  let linkedList=new LinkedList();
  it('instantiate an empty linked list',()=>{
    expect(linkedList.head).toBeNull();
  });
  it(' insert at the linked list',()=>{
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });
  it('The head will  point to the first node ',()=>{
    expect(linkedList.head.value).toEqual(1);
  });
  it(' insert more than one  node at the ',()=>{
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.head.next.value).toEqual(2);
   
  });
  it('check the values insude the linked list',()=>{
    expect(linkedList.includes(2)).toBeTruthy();
    expect(linkedList.includes(4)).toBeFalsy();
  });
  it(' return the data in linked list  it should equal like taht',()=>{
    let newLinkedList=new LinkedList();
    expect(linkedList.toString()).toEqual('{3} -> {2} -> {1} -> {null}');
    expect(newLinkedList.toString()).toEqual('{null}');
  });

});