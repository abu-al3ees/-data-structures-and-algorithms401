'use strict';

module.exports= function repeatedWord(str){
  let localArr = str.split(/[\s,]+/);
  console.log(localArr)
  let words = [];
  for(let i = 0; i < localArr.length;i++){
    let word = localArr[i].toLowerCase();
    const check = words.includes(word);
    if(check){
      return word;
    }else{
      words.push(word);
    }
  }
  return null;
}
