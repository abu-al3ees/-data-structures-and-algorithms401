'use strict';

const queuewithStack = require('../queueWithStacks/queue-with-stacks');

describe('testing pseudoqueue ', () => {
  const pseudoQueue = new queuewithStack.queue();
  const one = new queuewithStack.node(4);
  const tow = new queuewithStack.node(3);
  const three = new queuewithStack.node(2);
  const four = new queuewithStack.node(1);
  pseudoQueue.enqueue(one);
  pseudoQueue.enqueue(tow);
  pseudoQueue.enqueue(three);
  pseudoQueue.enqueue(four);

  it ('should insert value into the pseudoQueue first', () => {
//console.log('value====='+pseudoQueue.inStack.top.value)
    expect(pseudoQueue.inStack.top.value).toEqual( {"next": undefined, "value": 1});
  });

  it ('should insert value into the empty pseudoque', () => {

    const empty = new queuewithStack.queue();
    const newNode = new queuewithStack.node(5);

    empty.enqueue(newNode);
  });

  it ('should output value of last node in pseudoqueue', () => {
    pseudoQueue.dequeue();

    expect(pseudoQueue.dequeue().value).toEqual(4);
  });
});