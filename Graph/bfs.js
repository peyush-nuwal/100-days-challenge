// Graph as adjacency list object
const graph = {
  a: ["b", "c", "d"],
  b: ["a", "c"],
  c: ["a", "b", "d"],
  d: ["a", "c"],
};

const bfs = (graph, start) => {
  if (!graph[start]) {
    console.warn(`Start vertex "${start}" not found`);
    return [];
  }

  const queue = [start];
  const visited = new Set([start]);
  const traversalOrder = [];

  while (queue.length) {
    const vertex = queue.shift();
    traversalOrder.push(vertex);

    for (let neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return traversalOrder; // return array of visited nodes
};


console.log(graph,"a")