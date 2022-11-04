def depth_first_print(graph, source):
    stack = [source]
    while len(stack) > 0:
        current = stack.pop()
        print(current)
        for neighbor in graph[current]:
            stack.append(neighbor)
            
def depth_first_recursive_print(graph, source):
    print(source)
    for neighbor in graph[source]:
        depth_first_recursive_print(graph, neighbor)
        
def breadth_first_print(graph, source):
    queue = [source]
    while len(queue) > 0:
        current = queue.pop(0)
        print(current)
        for neighbor in graph[current]:
            queue.append(neighbor)

graph = {
  'a': ['b', 'c'],
  'b': ['d'],
  'c': ['e'],
  'd': ['f'],
  'e': [],
  'f': []
}

# Graph and the starting point
print('DFS');
depth_first_print(graph, 'a');
print('DFS Recursive');
depth_first_recursive_print(graph, 'a');
print('BFS');
breadth_first_print(graph, 'a')