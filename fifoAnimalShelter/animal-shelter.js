'use strict';
class Animal {
    constructor(type) {
      this.type = type
  
    }
  }
class AnimalShelter {
    constructor() {
       this.cats = []; 
       this.dogs=[]
    }

    enqueue(type) {
        const object=new Animal(type)
        if(object.type=='cat'){
      
     return   this.cats.push(object.type);
        }
        else if(object.type=='dog'){
     
      return  this.dogs.push(object.type);
    }
    return 'null';
    }

    dequeue(pref) {
 // remove from start
        if (pref === 'dog') {
        if (this.dogs.length != 0) {
        return this.dogs.shift();}
 return 'null';} 
 else if (pref === 'cat') {
if (this.cats.length != 0) {
 return this.cats.shift();
}
return 'null';
 } else {
  return 'null';      
}
 }
  
}

module.exports =AnimalShelter;