/*
There are a total of numCourses courses you have to take, labeled from
0 to numCourses - 1. You are given an array prerequisites where
prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false

Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also
have finished course 1. So it is impossible.
*/

var canFinish = function(numCourses, prerequisites) {
    let graph = [];
    // Create graph
    for(let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    // Fill directed graph
    for(let i = 0; i < prerequisites.length; i++) {
        let node = prerequisites[i];
        let from = node[0];
        let to = node[1];
        graph[from].push(to);
    }
    
    console.log(graph);
    // states:
    // 0 - no visited
    // 1 = visited but not processed
    // 2 = processed
    let states = new Array(numCourses).fill(0);
    for(let i = 0; i < numCourses; i++) {
        if(states[i] === 0) {
            // Check that there is no cycle
            if(dfsHasCycle(graph, i, states)) {
                return false;
            }
        }
    }
    // All the graph is connected and there is no cycle at this point
    return true;
};

// Has cycle
function dfsHasCycle(graph, node, states) {
    // Processing
    states[node] = 1;

    for(let vertex of graph[node]){
        if(states[vertex] === 0) {
            if(dfsHasCycle(graph, vertex, states)) {
                return true;
            }
        }
        if(states[vertex] === 1) {
            return true;
        }
    }
    // Processed
    states[node] = 2;
    return false;
}