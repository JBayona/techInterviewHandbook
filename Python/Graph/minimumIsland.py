def min_island(grid):
    if not len(grid) > 0:
        return 0
    
    ROW = len(grid)
    COL = len(grid[0])
    visited = [[0 for _ in range(len(grid[0]))] for _ in range(len(grid))]
    
    min_val = 10000000
    result = 10000000
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 1 and visited[i][j] == 0:
                visited[i][j] = 1
                min_val = dfs(grid, i, j, visited)
                result = min(min_val, result)
                
    return result

def dfs(grid, row, col, visited):
    row_k = [0, -1, 0, 1]
    col_k = [-1, 0, 1, 0]
    
    count = 1
    for i in range(4):
        next_row = row + row_k[i]
        next_col = col + col_k[i]
        if is_safe(grid, next_row, next_col, visited):
            visited[next_row][next_col] = 1
            count += dfs(grid, next_row, next_col, visited)
    
    return count

def is_safe(grid, row, col, visited):
    ROW = len(grid)
    COL = len(grid[0])
    return (
        row >= 0 and row < ROW and
        col >= 0 and col < COL and
        grid[row][col] == 1 and
        visited[row][col] == 0
    )
    
    

grid = [
  [0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0],
];
print(min_island(grid))
