def has_path(graph, source, dst):
    if source == dst:
        return true
    
    for neighbor in graph[source]:
        if has_path(graph, neighbor, dst):
            return true
    
    return false