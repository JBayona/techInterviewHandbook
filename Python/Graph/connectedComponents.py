def count_connected_components(graph):
    count = 0;
    visited = set()
    for node in graph:
        if dfs(graph, node, visited):
           count += 1
    
    return count 

def dfs(graph, node, visited):
    if node in visited:
        return False
    
    visited.add(str(node))
    
    for neighbor in graph[node]:
        dfs(graph, str(neighbor), visited)
    
    return True
    

graph = {
  '3': [],
  '4': [6],
  '6': [4, 5, 7, 8],
  '8': [6],
  '7': [6],
  '5': [6],
  '1': [2],
  '2': [1]
};
print(count_connected_components(graph))