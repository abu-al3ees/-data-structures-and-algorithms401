'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

    class Queue {
        constructor() {
            this.front = null;
        }
        enqueue(value) {
            let node = new Node(value);
            if (this.isEmpty()) {
                this.front = node;
            } else {
                this.front.next = node;
            }
            return this;
        }
        dequeue() {
            if (this.isEmpty()) {
                return 'Exception';
            } else {
                this.front = this.front.next;
            }
        }
        peek() {
            if (this.isEmpty()) {
                return 'Exception';
            } else {
                return this.front.value;
            }
        }
        isEmpty() {
            return this.front === null;
        }
    }

module.exports ={ 
    queues:Queue,
    Node:Node

}