/**
 * https://leetcode.com/problems/word-search-ii/
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {
    const M = board.length;
    const N = board[0].length;
    const result = [];
    const wordsTrie = new Trie();

    for (let word of words) {
        wordsTrie.insert(word);
    }
    const visited = Array.from({ length: M }, () => new Array(N));
    
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            dfs(i, j, '');
        }
    }
    
    return result;
    
    function dfs(i, j, word) {
        word += board[i][j];
        if (!wordsTrie.startsWithPrefix(word)) return;
        if (wordsTrie.search(word)) {
            result.push(word);
            wordsTrie.delete(word);
        }
        visited[i][j] = true;
        
        if (i + 1 < M && !visited[i + 1][j]) dfs(i + 1, j, word);
        if (j + 1 < N && !visited[i][j + 1]) dfs(i, j + 1, word);
        if (i - 1 >= 0 && !visited[i - 1][j]) dfs(i - 1, j, word);
        if (j - 1 >= 0 && !visited[i][j - 1]) dfs(i, j - 1, word);
        
        visited[i][j] = false;
    }
};

class Trie {
    constructor() {
        this.root = new Node();
        this.lastNode = null;
    }
    
    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;
            if (!current.keys[index]) {
                current.keys[index] = new Node()
            }
            current = current.keys[index];
        }
        current.end = true;
    }
    
    search(word) {
        const node = this.lastNode || this.#searchNode(word);
        if (!node) return false;
        return node.end;
    }
    
    startsWithPrefix(word) {
        return this.#searchNode(word) !== null;
    }
    
    #searchNode(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;
            if (!current.keys[index]) return null
            current = current.keys[index];
        }
        this.lastNode = current;
        return current;
    }
    // delete can be simplified to just setting last node.end true, but with this it is a bit more efficient
    delete(word) {
        this.root = this.#deleteNode(this.root, 0, word);
    }

    #deleteNode(node, i, word) {
        if (!node) return null;
        const index = word.charCodeAt(i) - 97;

        if (i === word.length - 1) {
            node.keys[index].end = false;
        } else {
            node.keys[index] = this.#deleteNode(node.keys[index], i + 1, word)
        }
        
        if (node.end) return node;
        for (let i = 0; i < 26; i++) {
            if (node.keys[i]) return node;
        }
        return null;
    }
}

class Node {
    constructor() {
        this.keys = new Array(26);
        this.end = false;
    }
}

// there is ways we can optimize it, by, modifing board instead of creating visited array and by simplifing trie passing node to dfs function
// instead of searching word in trie 
// var findWords = function(board, words) {
//     const ans = [];
    
//     if (!board || !words || board.length < 1) return [];
    
//     const root = buildTrie(words);
    
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             dfs(board, i, j, root, ans);
//         }
//     }
    
//     return ans;
// };

// function dfs(board, i, j, trie, ans) {
//     const w = board[i][j];
    
//     if (!trie.children.has(w)) return;
    
//     trie = trie.children.get(w);
    
//     if (trie.word) {
//         ans.push(trie.word);
//         trie.word = null;
//     }
    
//     board[i][j] = '#';
//     if (i > 0) dfs(board, i - 1, j, trie, ans); 
//     if (j > 0) dfs(board, i, j - 1, trie, ans);
//     if (i < board.length - 1) dfs(board, i + 1, j, trie, ans); 
//     if (j < board[0].length - 1) dfs(board, i, j + 1, trie, ans); 
//     board[i][j] = w;
// }

// function buildTrie(words) {
//     const root = new TrieNode();
    
//     words.forEach(w => {
//         let node = root;
        
//         for (let i = 0; i < w.length; i++) {
//             let c = w[i];
            
//             if (!node.children.has(c)) node.children.set(c, new TrieNode());

//             node = node.children.get(c);
//         }
        
//          node.word = w;
//     })
    
//     return root;
// }

// class TrieNode {
//     constructor() {
//         this.word = null;
//         this.children = new Map();
//     }
// }