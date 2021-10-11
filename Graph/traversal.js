// DFS

// Iterative
let depthFirstPrint = (graph, source) => {
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
depthFirstPrint = (graph, source) => {
  console.log(source);
  for(let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
}

// BFS
const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while(queue.length) {
    let currentNode = queue.shift();
    console.log(currentNode);
    for(let neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
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
console.log('DFS');
depthFirstPrint(graph, 'a');
console.log('BFS');
breadthFirstPrint(graph, 'a')
