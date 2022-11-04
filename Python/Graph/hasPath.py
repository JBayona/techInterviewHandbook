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