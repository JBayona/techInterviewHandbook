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