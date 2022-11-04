def depth_first_print(graph, source):
    stack = [source]
    while len(stack) > 0:
        current = stack.pop()
        print(current)
        for neighbor in graph[current]:
            stack.append(neighbor)

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
#console.log('BFS');
#breadthFirstPrint(graph, 'a')