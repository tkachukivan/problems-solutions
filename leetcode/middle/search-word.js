/**
 * https://leetcode.com/problems/word-search/
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    // const visited = Array.from({ length: m }, () => new Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && exist(i, j, 0)) return true; 
        }
    }
    
    return false;
    
    function exist(i, j, letter) {
        // if (i < 0 || j < 0 || i === m || j === n || visited[i][j]) return false;
        if (i < 0 || j < 0 || i === m || j === n) return false;

        if (board[i][j] !== word[letter]) return false;
        if (letter === word.length - 1) return true;
        // visited[i][j] = true;
        board[i][j] = '*'
        const nextLetter = letter + 1;
        const result = exist(i + 1, j, nextLetter) ||
                       exist(i - 1, j, nextLetter) ||
                       exist(i, j + 1, nextLetter) ||
                       exist(i, j - 1, nextLetter);
        
        // visited[i][j] = false;
        board[i][j] = word[letter];
        return result;
    }
};