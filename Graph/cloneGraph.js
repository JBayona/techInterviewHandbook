/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

https://leetcode.com/problems/clone-graph/
*/

var cloneGraph = function(graph) {
    let map = {};
    return clone(graph, map);
};

function clone(node, map) {
    if(!node) return null;
    if(node.label in map) {
        return map[node.label];
    }
    
    let root = new UndirectedGraphNode(node.label);
    map[node.label] = root;
    if(node.label in map) {
        for(n of node.neighbors) {
            root.neighbors.push(n, map);
        }
    }
    return root;
}