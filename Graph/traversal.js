// DFS
// Iterative
const depthFirstPrint = (graph, source) => {
  const stack = [source];
  while(stack.length) {
    let currentNode = stack.pop();
    console.log(currentNode);
    for(let neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }
}

// Recursive
const depthFirstPrint = (graph, source) => {
  console.log(source);
  for(let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

// Graph and the starting point
depthFirstPrint(graph, 'a');