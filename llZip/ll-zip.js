'use strict';

const LinkedList=require('../linkedList/linked-List');
const Node=require('../linkedList/node.js');
module.exports=function zipLists(list1, list2) {
    
    const ziplist = new LinkedList();
    list1 = list1.head;
    list2 = list2.head;
    ziplist.head = new Node(list1.value);
    list1 = list1.next;
  
    while (list1 || list2) {
      if (list1 && list2) {
        ziplist.append(list2.value);
        ziplist.append(list1.value);
        list2 = list2.next;
        list1 = list1.next;
      } else if (list1 === null && list2) {
       ziplist.append(list2.value);
        list2 = list2.next;
      } else if (list1 && list2 === null) {
       ziplist.append(list1.value);
        list1 = list1.next;
      } else {
        return;
      }
    }
  
    return ziplist;
   
  }