
'use strict';


let Animal = require('../fifoAnimalShelter/animal-shelter')
describe('animal shelter', () => {
    it('insert an dog to the shelter', () => {
        let dog = new Animal();
        dog.enqueue('dog')
        expect(dog.dogs[0]).toEqual('dog')
      });
      it('insert an dog to the shelter', () => {
        let dog = new Animal();
        dog.enqueue('dogddd')
        expect(dog.enqueue('dogddd')).toEqual('null')
      });
  it('insert multi dogs to the shelter', () => {
    let dog = new Animal();
    dog.enqueue('dog');
    dog.enqueue('dog');
    dog.enqueue('dog');
    
    expect(dog.dogs.length).toEqual(3)
  });
  it('delete an a wrong nmar from the dogs', () => {
    const dog = new Animal();
    dog.dequeue('dogfff')
    expect(dog.dequeue('dogfff')).toEqual( "null")
  });
  it('delete an dog from dogs ', () => {
    const dog = new Animal();
  
    dog.enqueue('dog');
    dog.enqueue('dog');
    dog.dequeue('dog')


    expect(dog.dogs.length).toEqual(1)
  });
  it('insert an cat to cats', () => {
    const cat = new Animal();
    cat.enqueue('cat')
    expect(cat.cats[0]).toEqual('cat')
  });

  it('insert multi dogs to the shelter', () => {
    const cat = new Animal();
    cat.enqueue('cat');
    cat.enqueue('cat');
    cat.enqueue('cat');
    
    expect(cat.cats.length).toEqual(3)

});

it('insert multi dogs to the shelter', () => {
    const cat = new Animal();
    cat.enqueue('cat');
    cat.enqueue('cat');
    cat.enqueue('cat');
    cat.dequeue('cat')
    expect(cat.cats.length).toEqual(2)

});
it('delete an a wrong nmar from the cats', () => {
    const cat = new Animal();
    cat.dequeue('dogfff')
    expect(cat.dequeue('dogfff')).toEqual( "null")
  });
});