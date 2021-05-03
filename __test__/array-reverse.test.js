'use strict';

const reverse = require('../arrayReverse/array-reverse.js');

describe('Reverse', () => {
  it('works', () => {
    expect(reverse([1,2,3,4,5,6,7])).toEqual([7,6,5,4,3,2,1]);
  });
});