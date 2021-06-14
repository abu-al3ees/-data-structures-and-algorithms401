'use strict';

const mergeSort = require('../merge/merge');

describe('Testing insertion-sort', () => {
  it('should sort an array', () => {
    let arr=[4,2,1,5,3];
    expect(mergeSort(arr)).toStrictEqual([1,2,3,4,5]);
  });
  it('should sort reverse-sorted array', () => {
    let arr=[20,18,12,8,5,-2];
    expect(mergeSort(arr)).toStrictEqual([-2,5,8,12,18,20]);
  });
  it('should sort an array ', () => {
    let arr=[3,12,7,3,3,7];
    expect(mergeSort(arr)).toStrictEqual([3,3,3,7,7,12]);
  });

});