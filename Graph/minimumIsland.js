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

// Option 2
// const minimumIsland = (grid) => {
//   let ROW = grid.length;
//   let COL = grid[0].length;
//   let visited = new Array(ROW);
//   for(let i = 0; i < ROW; i++) {
//     visited[i] = new Array(COL).fill(0);
//   }
  
//   let min = Number.MAX_SAFE_INTEGER;
//   let result = Number.MAX_SAFE_INTEGER;
//   for(let i = 0; i < ROW; i++) {
//     for(let j = 0; j < COL; j++) {
//       if(grid[i][j] && !visited[i][j]) {
//         visited[i][j] = 1;
//         min = dfs(grid, visited, i, j);
//         result = Math.min(min, result)
//       }
//     }
//   }
//   return result;
// };
// const dfs = (grid, visited, row, col) => {
//   let ROW = [0, -1, 0, 1];
//   let COL = [-1, 0, 1, 0];

//   let sum = 1;
//   for(let i = 0; i < 4; i++) {
//     let newRow = ROW[i] + row;
//     let newCol = COL[i] + col;
//     if(isSafe(grid, visited, newRow, newCol)) {
//       visited[newRow][newCol] = 1;
//       sum += dfs(grid, visited, newRow, newCol);
//     }
//   }
//   return sum;
// }
// const isSafe = (grid, visited, row, col) => {
//   let ROW = grid.length;
//   let COL = grid[0].length;
//   return (
//     row >= 0 && row < ROW &&
//     col >= 0 && col < COL &&
//     grid[row][col] &&
//     !visited[row][col]
//   );
// }

const grid = [
  [0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0],
];
console.log(minimumIsland(grid));
