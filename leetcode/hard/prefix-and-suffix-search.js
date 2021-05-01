/**
 * https://leetcode.com/problems/prefix-and-suffix-search/
 * @param {string[]} words
 */
var WordFilter = function(words) {
    this.trie = new Trie();
    
    for (let i = 0; i < words.length; i++) {
        this.trie.add(words[i], i);
    }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    const words = this.trie.collect(prefix);
    if (!words || !words.length) return -1;
    let maxIndex = -1;
    for (let [word, index] of words) {
        if (index > maxIndex && word.endsWith(suffix)) {
            maxIndex = index;
        }
    }
    return maxIndex;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */

class Trie {
    root = new Node();
    
    add(word, index) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const key = word.charCodeAt(i) - 97;
            if (!current.keys[key]) {
                current.keys[key] = new Node();
            }
            
            current = current.keys[key];
        }
        
        current.index = index;
    }
    
    collect(prefix) {
        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const key = prefix.charCodeAt(i) - 97;
            if (!current.keys[key]) {
                return null;
            }
            
            current = current.keys[key];
        }
        const words = [];
        this.collectWords(current, prefix, words)
        return words;
    }

    collectWords(node, prefix, words) {
        if (node.index !== null) words.push([prefix, node.index]);
        for (let i = 0; i < 26; i++) {
            if (node.keys[i]) {
                this.collectWords(node.keys[i], prefix + String.fromCharCode(97 + i), words);
            }
        }
    }
}

class Node {
    index = null;
    keys = new Array(26);
}

// solution above can be optimized similarty to below, by creating Trie/Hash with all suffixes + word and then accessing them;
// /**
//  * @param {string[]} words
//  */
// var WordFilter = function(words) {
//   this.dict = new Map()
//   for (let i = 0; i < words.length; i++) {
//     const w = words[i]
//     for (let j = 1; j <= w.length; j++) {
//       const prefix = w.substring(0, j)
//       for (let k = 0; k < w.length; k++) {
//         const suffix = w.substring(k)
//         this.dict.set(`${prefix}-${suffix}`, i)
//       }
//     }
//   }
// };

// /** 
//  * @param {string} prefix 
//  * @param {string} suffix
//  * @return {number}
//  */
// WordFilter.prototype.f = function(prefix, suffix) {
//   return this.dict.get(`${prefix}-${suffix}`) ?? -1
// };

// /** 
//  * Your WordFilter object will be instantiated and called as such:
//  * var obj = new WordFilter(words)
//  * var param_1 = obj.f(prefix,suffix)
//  */