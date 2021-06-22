'use strict';

const hash = require('../hashtable/hashtable');
const leftJoin = require('../leftJoin/leftJoin');

let hash1 = new hash.HashTable(50);
let hash2 = new hash.HashTable(50);

hash1.add('fond', 'enamored');

hash1.add('wrath', 'anger');
hash1.add('diligent', 'employed');
hash1.add('outfit', 'garb');
hash1.add('guide', 'usher');

hash2.add('fond', 'averse');

hash2.add('wrath', 'delight');
hash2.add('diligent', 'idle');
hash2.add('guide', 'follow');
hash2.add('flow', 'jam');


describe('testing ', () => {

  it(' join two hashmaps into a single data structure', () => {

    expect(leftJoin(hash1, hash2)).toEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });

});