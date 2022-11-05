def shortest_path(graph, src, dst):
    graph = build_graph(graph)
    print('Graph')
    print(graph)
    
    visited = set()
    queue = []
    queue.append((src, 0))
    visited.add(src)
    
    while len(queue) > 0:
        node, d = queue.pop(0)
        
        if node == dst:
            return d
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, d + 1))
    
    return -1

def build_graph(g):
    graph = {}
    for from_node, to_node in g:
        if from_node not in graph:
            graph[from_node] = []
        if to_node not in graph:
            graph[to_node] = []
        graph[from_node].append(to_node)
        graph[to_node].append(from_node)
    return graph

edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
src = "w";
dst = "z"; # 2
# src = "g";
# dst = "x"; # 2
print(shortest_path(edges, src, dst));