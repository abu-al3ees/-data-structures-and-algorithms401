'use strict';
const binarySearch = require('../arrayBinarySearch/array-binary-search.js');
describe('testing the bainary search module', () => {
  it('should return the index of value', () => {
    const test1 = binarySearch([4,8,15,16,23,42], 15);
    const test2 = binarySearch([11,22,33,44,55,66,77], 90);
    const test3 = binarySearch([1, 2, 3, 5, 6, 7], 4);
    expect(test1).toEqual(2);
    expect(test2).toEqual(-1);
    expect(test3).toEqual(-1);
  });
});