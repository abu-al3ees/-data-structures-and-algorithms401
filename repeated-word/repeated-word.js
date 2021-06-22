'use strict';

const hash = require('../hashtable/hashtable.js');


module.exports =function repeatedWord(string) {
  
  const table = new hash.HashTable(256);
  
  const words = string.match(/\w+/g);
 
  
  for(let i = 0; i < words.length; i++){
    let key = words[i].toLowerCase();
    
    if (table.contains(key)){
      return table.get(key);
    }
    table.add(key, key);
  }
  
}
