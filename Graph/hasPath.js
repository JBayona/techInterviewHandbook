/*
Has path, given a graph and a source and destination node. Find if it´s possible to travel from src
to destination.
Assume the graph is acyclic.
*/

const hasPath = (graph, src, dst) => {
  if(src === dst) {
    return true;
  }
  for(let neighbor of graph[src]) {
    if(hasPath(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

const src = 'f';
const dst = 'k';
console.log(hasPath(graph, src, dst));