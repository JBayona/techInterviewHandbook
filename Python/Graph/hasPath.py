def has_path(graph, source, dst):
    if source == dst:
        return True
    
    for neighbor in graph[source]:
        if has_path(graph, neighbor, dst):
            return True
    
    return False


def has_path_bfs(graph, source, dst):
    queue = [source]
    
    while len(queue)> 0:
        current = queue.pop(0)
        if current == dst:
            return True
        
        for neighbor in graph[current]:
            queue.append(neighbor)
    
    return False


def undirected_graph_has_path(graph, src, dst):
    graph = build_graph(graph)
    print('Graph')
    print(graph)
    visited = set()
    return dfs(graph, src, dst, visited)

def dfs(graph, src, dst, visited):
    if (src == dst):
        return True
    
    if src in visited:
        return False
    
    visited.add(src)
    
    for neighbor in graph[src]:
        if dfs(graph, neighbor, dst, visited):
            return True
    return False
    
def build_graph(graph):
    g = {}
    for from_node,to_node in graph:
        if from_node not in g:
            g[from_node] = []
        if to_node not in g:
            g[to_node] = []
        g[from_node].append(to_node)
        g[to_node].append(from_node)
    return g

edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]
print(undirected_graph_has_path(edges, 'j', 'm'))

