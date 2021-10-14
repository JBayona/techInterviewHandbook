/*
Find the largest component
*/
/*
{
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}
*/

const largestComponentDFS = (graph) => {
  let visited = new Set();
  let size = 0;
  let result = 0;
  for (let node in graph) {
    size = exploreDFS(graph, node, visited);
    result = Math.max(result, size);
  }
  return result;
};

const exploreDFS = (graph, node, visited) => {
  // If the node has been visited already
  if (visited.has(node)) {
    return 0;
  }
  visited.add(node);
  // Our current node counts as 1 for the visited elements
  let size = 1;
  for (let neighbor of graph[node]) {
    size += exploreDFS(graph, neighbor, visited);
  }
  return size;
};

const largestComponentBFS = (graph) => {
  let visited = new Set();
  let result = 0;

  for (let node in graph) {
    // This will be visited for each component
    if (!visited.has(node)) {
      let size = exploreBFS(node, graph, visited);
      result = Math.max(result, size);
    }
  }
  return result;
};

const exploreBFS = (node, graph, visited) => {
  let queue = [];
  queue.push(node);
  let largest = 0;
  let count = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (visited.has(node)) {
        continue;
      }
      count++;
      largest = Math.max(count, largest);
      visited.add(node);
      for (let neighbors of graph[node]) {
        queue.push(neighbors);
      }
    }
  }
  return largest;
};

const graph = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};
console.log(largestComponentDFS(graph));
console.log(largestComponentBFS(graph));
