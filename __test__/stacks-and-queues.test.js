const Stack = require('../stacksAndQueues/stack');
const Queue = require('../stacksAndQueues/queue');
const testingQueues= new Queue.queues();
const testingStack = new Stack.Stack();


describe('stack', () => {
    it('Can successfully push onto a stack', () => {
    
        testingStack.push(4);
        expect(testingStack.top.value).toEqual(4);
    });

    it('Can successfully push multiple nodes onto a stack', () => {
       testingStack.push(2);
       testingStack.push(5);
       testingStack.push(12);
       testingStack.push(20);
       expect(testingStack.top.value).toEqual(20);
    });

    it('Can successfully pop off the stack', () => {
       testingStack.pop();
       expect(testingStack.top[2]).toBeUndefined();
    });

    it('Can successfully empty a stack after multiple pops.', () => {
        testingStack.pop();
        testingStack.pop();
        testingStack.pop();
        testingStack.pop();
        expect(testingStack.top).toBeNull();
    });

    it('Can successfully peek the next item on the stack', () => {
        testingStack.push(5);
        testingStack.push(1);
        expect(testingStack.peek()).toEqual(1);
    });

    it('Can successfully instantiate an empty stack', () => {
       let test2 = new Stack.Stack();
       expect(test2.top).toBeNull();
    });
    it('Can successfully enqueue into a queue', () => {
        const queue = testingQueues ;
        queue.enqueue(1);
        expect(queue.front.value).toEqual(1);
    });
    it('Can successfully enqueue multiple values into a queue', () => {
        const queue = testingQueues ;
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front.value).toEqual(1);
    });
    it('Can successfully dequeue out of a queue the expected value', () => {
        const queue =  testingQueues;
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.front.value).toEqual(2);
    });
    it('Can successfully peek into a queue, seeing the expected value', () => {
        const queue =  testingQueues;
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toEqual(2);
    });
    it('Can successfully empty a queue after multiple dequeues', () => {
        const queue =  testingQueues;
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toBeTruthy();
    });
    it('Can successfully instantiate an empty queue', () => {
        const queue = testingQueues;
        expect(queue.isEmpty()).toBeTruthy();
    });
    it('Can successfully instantiate an empty queue', () => {
        const queue = testingQueues;
        expect(queue.dequeue()).toEqual('Exception');
        expect(queue.peek()).toEqual('Exception');
    });
    it('Calling dequeue or peek on empty queue raises exception', () => {
        const stack = testingQueues;
        expect(stack.dequeue()).toEqual('Exception');
        expect(stack.peek()).toEqual('Exception');
    });

});
