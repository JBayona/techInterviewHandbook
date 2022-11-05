def largest_component(graph):
    visited = set()
    size_count = 0
    max_count = 0
    for node in graph:
        size_count = dfs(graph, node, visited)
        max_count = max(size_count, max_count)
    return max_count

def dfs(graph, node, visited):
    # The node has been visited already
    if node in visited:
        return 0
    
    visited.add(node)
    size = 1
    for neighbor in graph[node]:
        size += dfs(graph, neighbor, visited)
    return size

graph = {
  '0': ["8", "1", "5"],
  '1': ["0"],
  '5': ["0", "8"],
  '8': ["0", "5"],
  '2': ["3", "4"],
  '3': ["2", "4"],
  '4': ["3", "2"],
};

print(largest_component(graph))