'use strict';

const Node = require('../linkedList/node');

describe('LL Node Class', ()=> {
    it('constructor()' , ()=> {
        let value = 24;
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull(); 
    });
})