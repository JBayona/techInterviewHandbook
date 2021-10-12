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

// DFS Connnected components
const connectedComponentsBFS = (graph) => {
  const visited = new Set();
  let count = 0;
  let largest = {n: 0}
  // Check all the components in the graph
  for(let i = 1; i < Object.keys(graph).length; i++) {
    if(!visited.has(i)) {
      bfs(i, graph, visited, largest);
      count++;
    }
  }
  console.log('Largest component: ', largest.n);
  return count;
}

const bfs = (node, graph, visited, largest) => {
  let queue = [];
  queue.push(node);
  while(queue.length) {
    let size = queue.length;
    largest.n = Math.max(largest.n, size + 1); // + 1 to count the key node, which is a element in the component as well.
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      if(visited.has(node)) {
        continue;
      }
      visited.add(node);
      for(let neighbors of graph[node]) {
        queue.push(neighbors);
      }
    }
  }
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
console.log(connectedComponentsBFS(graph));
