/*
Minimum island
*/
// Linear complexity
// Time O(N * M) N = number of row, M = number of columns
// Space O(N * M) N = number of row, M = number of columns
// DFS.
const minimumIsland = (grid) => {
  let ROW = grid.length;
  let COL = grid[0].length;
  let visited = [];
  for(let i = 0; i < ROW; i++) {
    visited[i] = new Array(ROW).fill(0);
  }

  let min = Number.MAX_SAFE_INTEGER;
  let result = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < COL; j++) {
      // Only run the DFS if the grid has water and has not been visited
      if(grid[i][j] && !visited[i][j]) {
        min = explore(grid, visited, i, j);
        result = Math.min(min, result);
      }
    }
  }
  return result;
}

const explore = (grid, visited, row, col) => {
  let rowInbound = 0 <= row && row < grid.length;
  let colInbound = 0 <= col && col < grid.length;
  // If it´s out of bounds, return 0
  if(!rowInbound || !colInbound) {
    return 0;
  }
  // If the grid is not water, return 0
  if(!grid[row][col]) {
    return 0;
  }
  // If we already visited the element, return 0
  if(visited[row][col]) {
    return 0;
  }
  visited[row][col] = 1;
  // Always start with one, which is the node
  let count = 1;
  count += explore(grid, visited, row + 1, col);
  count += explore(grid, visited, row - 1, col);
  count += explore(grid, visited, row, col + 1);
  count += explore(grid, visited, row, col - 1);

  return count;
}

const grid = [
  [0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0],
];
console.log(minimumIsland(grid));
