/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * Initialize your data structure here.
 */
 var Trie = function() {
    this.SHIFT = 97;
    this.root = new Node();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
        const nodeIndex = word.charCodeAt(i) - this.SHIFT;
        if (!current.keys[nodeIndex]) {
            current.keys[nodeIndex] = new Node();
        }
        
        current = current.keys[nodeIndex];
    }
    current.end = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this._searchNode(word);
    if (!node) return false;
    return node.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this._searchNode(prefix) !== null;
};

Trie.prototype._searchNode = function(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
        const nodeIndex = word.charCodeAt(i) - this.SHIFT;
        if (!current.keys[nodeIndex]) return null;
        current = current.keys[nodeIndex];
    }

    return current;
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class Node {
    constructor() {
        this.end = false;
        this.keys = new Array(26);
    }
}
// recursion
// var Trie = function() {
//     this.R = 26;
//     this.SHIFT = 97;
//     this.root = new Array(this.R);
// };

// /**
//  * Inserts a word into the trie. 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//     this.root = this._insertWord(this.root, 0, word);
// };

// Trie.prototype._insertWord = function(children, index, word) {
//     if (!children) children = new Array(this.R);
//     const nodeIndex = word.charCodeAt(index) - this.SHIFT;
//     if (!children[nodeIndex]) {
//         const node = new Node();
//         children[nodeIndex] = node;
//     }

//     if (index === word.length - 1) {
//         children[nodeIndex].end = true;
//     } else {
//         children[nodeIndex].children = this._insertWord(children[nodeIndex].children, index + 1, word);
//     }

//     return children;
// }

// /**
//  * Returns if the word is in the trie. 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//     const node = this._searchNode(this.root, 0, word);
//     if (!node) return false;
//     return node.end;
// };

// /**
//  * Returns if there is any word in the trie that starts with the given prefix. 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
//     return this._searchNode(this.root, 0, prefix) !== null;
// };

// Trie.prototype._searchNode = function(children, index, word) {
//     const nodeIndex = word.charCodeAt(index) - this.SHIFT;
//     if (!children[nodeIndex]) return null;
//     if (index === word.length - 1) return children[nodeIndex];
//     if (!children[nodeIndex].children) return null;

//     return this._searchNode(children[nodeIndex].children, index + 1, word);
// }

// /** 
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */

// class Node {
//     constructor() {
//         this.end = false;
//         this.children = null;
//     }
// }