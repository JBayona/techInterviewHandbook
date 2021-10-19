/*
Count the number of Islands
*/
/*
edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]
*/
// Linear complexity
// Time O(N * M) N = number of row, M = number of columns
// Space O(N * M) N = number of row, M = number of columns
const islandCount = (grid) => {
  let ROW = grid.length;
  let COL = grid[0].length;
  let visited = new Array(ROW);
  for(let i = 0; i < ROW; i++) {
    visited[i] = new Array(COL).fill(0);
  }
  
  let count = 0;
  for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < COL; j++) {
      if(grid[i][j] && !visited[i][j]) {
        visited[i][j] = 1;
        dfs(grid, visited, i, j);
        count++;
      }
    }
  }
  return count;
};

const dfs = (grid, visited, row, col) => {
  let ROW = [0, -1, 0, 1];
  let COL = [-1, 0, 1, 0];
  for(let i = 0; i < 4; i++) {
    let newRow = ROW[i] + row;
    let newCol = COL[i] + col;
    if(isSafe(grid, visited, newRow, newCol)) {
      visited[newRow][newCol] = 1;
      dfs(grid, visited, newRow, newCol);
    }
  }
}

const isSafe = (grid, visited, row, col) => {
  let ROW = grid.length;
  let COL = grid[0].length;
  return (
    row >= 0 && row < ROW &&
    col >= 0 && col < COL &&
    grid[row][col] &&
    !visited[row][col]
  );
}

const grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 1, 0, 0, 0],
];
console.log(islandCount(grid));
