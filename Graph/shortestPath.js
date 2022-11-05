/*
Find the shortest path between two nodes.
*/
/*
edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]
*/

// Linear complexity
// Time O(N)
// Space O(N)
const shortestPath = (edges, src, dst) => {
  let graph = buildGraph(edges);
  let visited = new Set();
  let queue = [];
  queue.push({ node: src, distance: 0 });
  visited.add(src);
  while (queue.length) {
    let {node, distance} = queue.shift();
    if (node === dst) {
      return distance;
    }
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({node: neighbor, distance: distance + 1});
      }
    }
  }
  return "-1";
};

// Linear complexity
// Time O(N)
// Space O(N)
const shortestPath_V2 = (edges, src, dst) => {
  let graph = buildGraph(edges);
  let visited = new Set();
  let queue = [];
  queue.push({ node: src, distance: 0 });
  visited.add(src);
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let n = queue.shift();
      let node = n.node;
      visited.add(node);
      let distance = n.distance;
      for (let neighbor of graph[node]) {
        // If the node is found, return the shortes distance
        if (dst === neighbor) {
          return distance + 1;
        }
        // If the node has been already visited, continue to the next neighbor
        // As the graph is cyclic, we don´t want to end-up in a loop
        if (visited.has(neighbor)) {
          continue;
        }
        queue.push({ node: neighbor, distance: distance + 1 });
      }
    }
  }
  return "-1";
};

const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    let connection = edge;
    let [from, to] = connection;
    if (!(from in graph)) {
      graph[from] = [];
    }
    if (!(to in graph)) {
      graph[to] = [];
    }
    graph[from].push(to);
    graph[to].push(from);
  }
  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
const src = "w";
const dst = "z"; // 2
// const src = "g";
// const dst = "x"; // 2
console.log(shortestPath(edges, src, dst));
