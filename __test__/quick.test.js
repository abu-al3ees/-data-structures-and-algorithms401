'use strict';
const QuickSort = require('../quick/quick');

describe('Testing quick-sort', () => {
  it('should sort an array', () => {
    let arr=[4,2,1,5,3];
    expect(QuickSort(arr)).toStrictEqual([1,2,3,4,5]);
  });
  it('should sort reverse-sorted array', () => {
    let arr=[20,18,12,8,5,-2];
    expect(QuickSort(arr)).toStrictEqual([-2,5,8,12,18,20]);
  });
  it('should sort an array ', () => {
    let arr=[3,12,7,3,3,7];
    expect(QuickSort(arr)).toStrictEqual([3,3,3,7,7,12]);
  });

});