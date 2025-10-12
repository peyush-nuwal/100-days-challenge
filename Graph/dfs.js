const graph = {
  a: ["b", "c", "d"],
  b: ["a", "c"],
  c: ["a", "b", "d"],
  d: ["a", "c"],
};

const dfs = (graph, start, visted = new Set(), order = []) => {
    if (!graph[start]) return order; 
    
    visted.add(start)
    order.push(start)

    for (let neighbor of graph[start]) {
        if (!visted.has(neighbor)) {
            dfs(graph,neighbor,visted,order)
        }
    }
     return order 
}


console.log(dfs(graph,"a"))