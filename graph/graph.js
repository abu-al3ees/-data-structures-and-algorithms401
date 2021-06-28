class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}
class Vertex {
    constructor(value) {
        this.value = value
    }
}
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log("VERTEX DOES NOT EXIST");
            return;
        }
        const adjacencies =  this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    size(vertex){
        const queue = [];
        const visited = new Set();
    
        queue.unshift(vertex);
        visited.add(vertex);
    
        while(queue.length) {
          const currentVertex = queue.pop();
          const neighbors = this.getNeighbors(currentVertex); //gives an array of all neighbors
    
          for (let neighbor of neighbors) { // each neighbor is an edge
            const neighborVertex = neighbor.vertex;
    
            if (visited.has(neighborVertex)){ //if we have already visited skip
              continue;
            } else { // if not add to visited list, and queue it up
              visited.add(neighborVertex);
              queue.unshift(neighborVertex);
            }
          }
        }
        return visited.size;
      }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)){
          throw new Error('VERTEX DOES NOT EXIST');
        }
        return [...this.adjacencyList.get(vertex)]; 
      }
    addEdge(startVertex, endVertex, weight = 0) {
        if (!this.adjacencyList.has(startVertex)){
          throw new Error('Invalid start vertex');
        }
        
        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight)); 
      }
     bfs(graph, root) {
        let nodesLen = {};
        
        for (let i = 0; i < graph.length; i++) {
          nodesLen[i] = Infinity;
        }
        nodesLen[root] = 0; 
        
        let queue = [root]; 
        let current; 
      
        while (queue.length != 0) {
          current = queue.shift();
          
          let curConnected = graph[current];
          let neighborIdx = []; 
          let idx = curConnected.indexOf(1); 
          while (idx != -1) {
            neighborIdx.push(idx); 
            idx = curConnected.indexOf(1, idx + 1); 
          }
          
          for (let j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
              nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
              queue.push(neighborIdx[j]); 
            }
          }
        }
        return nodesLen;
      };
      
}
function businessTrip(graph, cityArray) {
  let totalCost = 0;
  let check = false;

  for (let i = 0; i < cityArray.length - 1; i++) {
    let neighbors = graph.getNeighbors(cityArray[i]);
    for (let j = 0; j <= neighbors.length - 1; j++) {
      if (cityArray[i + 1] === neighbors[j].vertex) {
        totalCost += neighbors[j].weight;
        check = true;
      }
    }
    if (check === false) {
      totalCost = 0;
      check = false;
      return `${check}, $${totalCost}`;
    }
  }

  return `${check}, ${totalCost}`;
}


module.exports = {
    Vertex,
    Edge,
    Graph,
    businessTrip,
  };