class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjList = new Map();
    }
  
    addEdge(start, end) {
      if (!this.adjList.has(start)) {
        this.adjList.set(start, []);
      }
      if (!this.adjList.has(end)) {
        this.adjList.set(end, []);
      }
      this.adjList.get(start).push(end);
      this.adjList.get(end).push(start); 
    }
  
    display() {
      console.log("Adjacency List:");
      for (const [vertex, neighbors] of this.adjList) {
        console.log(`${vertex} -> ${neighbors.join(' ')}`);
      }
    }
  }