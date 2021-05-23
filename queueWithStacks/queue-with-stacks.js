'use strict'

class Node {
    constructor(value, next){
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
    isEmpty() {
        return this.top===null;
    }

    push(value) {
        let nextTop = new Node(value);
        nextTop.pointer(this.top);
        this.top = nextTop;
        console.log('push----->'+this.top.value)
    }

    pop() {
        if (this.isEmpty()){
          return 'it is an empty stack';
        } else {
          let temp = this.top;
      
          this.top = temp.next;
          return temp;
        }
      }

    peek() {
        return this.top? this.top.value : this.top;
    }
}


class PseudoQueue {
    constructor(){
         this.inStack = new Stack();
         this.outStack = new Stack();
       }
    
    

    enqueue(node){
        this.inStack.push(node);
    }
    
    dequeue() {
        if(this.inStack.isEmpty()) {
          while(!this.outStack.isEmpty()) {
            this.inStack.push(this.inStack.pop());
          }
        }
        console.log('fdfdfdfdf------->'+this.inStack.pop().value)
        return this.inStack.pop().value;
      }
    }

module.exports = {
    node: Node,
    stack: Stack,
    queue: PseudoQueue,
  };