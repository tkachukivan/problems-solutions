/**
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    const n = 9;
    const box = 3;
    // rows
    for (let i = 0; i < n; i++) {
        const used = new Set();
        for (let j = 0; j < n; j++) {
            if (board[i][j] === '.') continue;
            if (used.has(board[i][j])) return false;
            used.add(board[i][j]);
        }
    }
    
    // columns
    for (let i = 0; i < n; i++) {
        const used = new Set();
        for (let j = 0; j < n; j++) {
            if (board[j][i] === '.') continue;
            if (used.has(board[j][i])) return false;
            used.add(board[j][i]);
        }
    }
    
    // boxes
    for (let i = 0; i < box; i++) {
        for (let j = 0; j < box; j++) {
            const used = new Set();
            for (let k = i * box; k < i * box + box; k++) {
                for (let l = j * box; l < j * box + box; l++) {
                    if (board[k][l] === '.') continue;
                    if (used.has(board[k][l])) return false;
                    used.add(board[k][l]);
                }
            }
        }
    }
    
    return true;
};

// var isValidSudoku = function(board) {
//   for (let i = 0; i < 9; i++) {
//     const row = new Set()
//     const col = new Set()
//     const box = new Set();
      
//     for (let j = 0; j < 9; j++) {
//       let rowc = board[i][j];
//       let colc = board[j][i];
//       let boxc = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3];

//       if (row.has(rowc) || col.has(colc) || box.has(boxc)) return false;

//       if (rowc !== ".") row.add(rowc);
//       if (colc !== ".") col.add(colc);
//       if (boxc !== ".") box.add(boxc);
//     }
//   }
    
//   return true;
// };