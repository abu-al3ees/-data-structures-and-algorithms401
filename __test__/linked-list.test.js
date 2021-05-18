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
  it('Can successfully insert a node before the first node of a linked list', ()=> {
    linkedList.insertBefore(3,4);
    //console.log('ssssssssss-------->'+linkedList)
    expect(linkedList.head.value).toEqual(4);
    expect(linkedList.toString()).toEqual('{4} -> {3} -> {2} -> {1} -> {null}');
  
  });

  it('Can successfully insert after a node in the middle of the linked list', ()=> {
    linkedList.insertAfter(3, 7);
    console.log('dddddd-------->'+ linkedList)
    expect(linkedList.toString()).toEqual('{4} -> {3} -> {7} -> {2} -> {1} -> {null}');

  });
  it('Can successfully insert a node after the last node of the linked list', ()=> {
    linkedList.insertAfter(1, 0);
    expect(linkedList.toString()).toEqual('{4} -> {3} -> {7} -> {2} -> {1} -> {0} -> {null}');

  });
  it('should find kth value in a linked list', () => {
    expect(linkedList.kthFromEnd(1)).toEqual(0);
    expect(linkedList.kthFromEnd(2)).toEqual(1);
    expect(linkedList.kthFromEnd(4)).toEqual(7);
    expect(linkedList.kthFromEnd(8)).toEqual('Exception');
    expect(linkedList.kthFromEnd(10)).toEqual('Exception');
  });

  
});


