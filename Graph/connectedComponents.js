/*
Given a path, count the number of the conneccted components
*/
/*
{
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}
*/

// DFS Connnected components
const connectedComponentsDFS = (graph) => {
  const visited = new Set();
  let count = 0;
  // Iterate over all nodes
  for(let node in graph) {
    if(explore(graph, node*1, visited)) {
      count++;
    }
  }
  return count;
}

const explore = (graph, node, visited) => {
  if(visited.has(node)) {
    return false;
  }
  visited.add(node*1);
  for(let neighbor of graph[node]) {
    explore(graph, neighbor, visited);
  }
  return true;
}

const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
};
console.log(connectedComponentsDFS(graph));
