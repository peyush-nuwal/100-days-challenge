class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adding vertex
  addVertex(vtx) {
    // only add if it doesn’t exist already
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
    }
    return this;
  }

  addEdge(vtx1, vtx2) {
    if (!this.adjacencyList[vtx1] || !this.adjacencyList[vtx2]) {
      throw new Error("Both vertices must exist before adding an edge");
    }

    if (!this.adjacencyList[vtx1].includes(vtx2)) {
      this.adjacencyList[vtx1].push(vtx2);
    }
    if (!this.adjacencyList[vtx2].includes(vtx1)) {
      this.adjacencyList[vtx2].push(vtx1);
    }

    return this; // 💪 lets you chain more operations
  }
}

const g = new Graph()
console.log("Empty graph =>", g)
console.log("Adding vertex a to list =>",g.addVertex("a"))
console.log("Adding vertex a to list =>",g.addVertex("b"))
console.log("Adding vertex a to list =>",g.addVertex("c"))
console.log("Adding vertex a to list =>",g.addVertex("d"))
console.log("After adding a to list=>",g)