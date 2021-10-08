/*
Has path, given a graph and a source and destination node. Find if it´s possible to travel from src
to destination.
*/

// DFS
const undirectedPathDFS = (edges, src, dst) => {
  const graph = buildGraph(edges);
  let visited = new Set();
  return hasPath(graph, visited, src, dst);
}

const hasPath = (graph, visited, src, dst) => {
  // Base cases
  if(src === dst) {
    return true;
  }
  if(visited.has(src)) {
    return false;
  }

  visited.add(src);

  for(let neighbor of graph[src]) {
    if(hasPath(graph, visited, neighbor, dst)) {
      return true;
    }
  }
  return false;
}

const buildGraph = edges => {
  const graph = {};
  for(let edge of edges) {
    const [from, to] = edge;
    if(!(from in graph)) {
      graph[from] = [];
    }
    if(!(to in graph)) {
      graph[to] = [];
    }
    graph[from].push(to);
    graph[to].push(from);
  }
  return graph;
}

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["n", "o"]
];
const src = "j";
const dst = "m";
console.log(undirectedPathDFS(edges, src, dst));
