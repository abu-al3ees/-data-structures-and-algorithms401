'use strict';

const hashing = require('../hashtable/hashtable');

describe('testing hash tables', () => {
  const test = new hashing.HashTable(100);

  it('can Successfully Adding a key/value to your hashtable results in the value being in the data structure', () => {
    test.add('mohammad', 'issa');
  

    expect(test.contains('mohammad')).toEqual(true);
  });

  it('can Successfully Retrieving based on a key returns the value stored', () => {
    test.add('mohammad', 'issa');
   

    expect(test.get('mohammad')).toEqual('issa');
  });

  it('can Successfully returns null for a key that does not exist in the hashtable', () => {
   
    test.add('mohammad', 'alkhazali');

    expect(test.contains('issa')).toEqual(false);;
  });

  it('can Successfully handle a collision within the hashtable', () => {
    test.add('mohammad', 'issa');
  
    expect(test.add('mohammad', 'alkhazali')).toEqual(undefined);
  });

  it('can Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    test.add('mohammad', 'issa');
   
    expect(test.get('mohammad')).toEqual('issa');
  });

});