'use strict';

const multiBracketValidation = require('../multiBracketValidation/multi-bracket-validation');


describe('testing the multi bracket validation function', () => {
  it('should return true for matching brackets', () => {
    
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
  });

  it('should return true for matching brackets', () => {
  

    expect(multiBracketValidation('{{[abc]}}')).toBeTruthy();
  });

  it('should return true for matching brackets', () => {
  

    expect(multiBracketValidation('{}{}[}]')).toBeFalsy();
  });


  it('should return false for mismatched brackets', () => {
   
    expect(multiBracketValidation('{(})')).toBeFalsy();
  });

});