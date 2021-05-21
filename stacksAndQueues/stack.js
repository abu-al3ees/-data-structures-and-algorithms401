
'use strict'

class Node {
    constructor (value, next){
        this.value = value;
        this.next = next;
    }
    pointer(node){
        this.next = node;
    }
}
class Stack {
    constructor(){
        this.top=null;
    }
  
    isEmpty(){
        return this.top=== null;
    }
    push(value) {
       
        let nextTop = new Node(value);
        nextTop.pointer(this.top);
        this.top = nextTop;
    }

    pop(){
        
        let popTop = this.top;
        this.top = this.top.next;
        popTop.pointer(null);
       
    }

    peek(){
       
        return this.top.value;
    }
}

module.exports ={
Stack:Stack,
Node:Node
} 