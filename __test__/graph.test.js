'use strict';

const graph = require('../graph/graph');

describe('Testing graph methods', () => {

  it('Node can be successfully added to the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    test.addVertex(one);

    expect(test.adjacencyList).toBeTruthy();
    expect(test.adjacencyList.get(one)).toEqual([]);
  });

  it('An edge can be successfully added to the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);
    const testValue = test.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);
    test.addEdge(two, one);
    const testValue = test.adjacencyList.get(one);
    const testValueTwo = test.adjacencyList.get(two);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];
    const expectedValueTwo = [{ 'vertex': { 'value': 'one' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
    expect(testValueTwo).toEqual(expectedValueTwo);
  });

  it('All appropriate neighbors can be retrieved from the graph ', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addEdge(one, two);
    test.addEdge(one, three);

    const testValue = test.getNeighbors(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }, { 'vertex': { 'value': 'three' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
  });

  it('Neighbors are returned with the weight between nodes included ', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addEdge(one, two);
    test.addEdge(one, three);
    const testValue = test.getNeighbors(one);
    const testWeight = testValue[0]['weight'];
    const testWeightTwo = testValue[1]['weight'];
    

    expect(testWeight).toEqual(0);
    expect(testWeightTwo).toEqual(0);
  });

  it('The proper size is returned, representing the number of nodes in the graph  ', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);

    expect(test.size(one)).toEqual(2);
  });

  it('A graph with only one node and edge can be properly returned ', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    test.addVertex(one);
    test.addEdge(one);
    const testValue = test.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': undefined, 'weight': 0 }];


    expect(testValue).toEqual(expectedValue);
  });

  it('An empty graph properly returns null', () => {
    let test = new graph.Graph();
    let testValue = test.adjacencyList.values();

    expect(testValue).not.toBeUndefined();
  });
  it('Should properly traverse a graph breadth first', () => {
    let test = new graph.Graph();
   
    let exBFSGraph = [
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0]
    ];
    //console.log(bfs(exBFSGraph, 1));
    expect(test.bfs(exBFSGraph,1)).toEqual({"0": 2, "1": 0, "2": 1, "3": 3, "4": Infinity})
  });


  

  it('Should return true that a trip is possible through the graph and return the total price', () => {
    let test = new graph.Graph();
    const pandora = new graph.Vertex('Pandora');
    const arendelle = new graph.Vertex('Arendelle');
    const metroville = new graph.Vertex('Metroville');
    const monstroplolis = new graph.Vertex('Monstroplolis');
    const narnia = new graph.Vertex('Narnia');
    const naboo = new graph.Vertex('Naboo');
    test.addVertex(pandora);
    test.addVertex(arendelle);
    test.addVertex(metroville);
    test.addVertex(monstroplolis);
    test.addVertex(narnia);
    test.addVertex(naboo);
    test.addEdge(pandora, arendelle, 150);
    test.addEdge(metroville, pandora, 82);
    test.addEdge(arendelle, metroville, 99);
    test.addEdge(arendelle, monstroplolis, 42);
    test.addEdge(metroville, monstroplolis, 105);
    test.addEdge(metroville, narnia, 37);
    test.addEdge(metroville, naboo, 26);
    test.addEdge(monstroplolis, naboo, 73);
    test.addEdge(narnia, naboo, 250);

    expect(graph.businessTrip(test, [metroville, pandora])).toEqual('true, 82');
    expect(graph.businessTrip(test, [arendelle, monstroplolis, naboo])).toEqual('true, 115');
  });



    it(' traverse graph depth first', () => {
      let test = new graph.Graph();
      const one = new graph.Vertex('1');
      const two = new graph.Vertex('2');
      const three = new graph.Vertex('3');
      const four = new graph.Vertex('4');
      const five = new graph.Vertex('5');
     
      test.addVertex(one);
      test.addVertex(two);
      test.addVertex(three);
      test.addVertex(four);
      test.addVertex(five);
     
      test.addEdge(one, two);
      test.addEdge(one, three);
      test.addEdge(two, three);
      test.addEdge(three,four);
      test.addEdge(four,five);
     ;
      let testValue = test.dfs(test, one);
      let arrayValues = Array.from(testValue);
     
      expect(arrayValues[0].value).toEqual('1');
      expect(arrayValues[4].value).toEqual('5');
    });

});

