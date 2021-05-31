/**
 * https://leetcode.com/problems/search-suggestions-system/
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const result = [];
    const trie = new Trie();
    
    for (let product of products) trie.add(product);
    let currentPrefix = '';
    for (let i = 0; i < searchWord.length; i++) {
        currentPrefix += searchWord[i]
        result.push(trie.search(currentPrefix));
    }
    
    return result;
};

const R = 26;
const SHIFT = 97;

class Trie {
    root = new Node();
    prevSearchNode = null;
    prevSearch = '';

    add(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const code = word.charCodeAt(i) - SHIFT;
            if (!current.keys[code]) {
                current.keys[code] = new Node();
            }
            
            current = current.keys[code];
        }
        current.end = true;
    }

    search(prefix) {
        const result = [];
        if (!this.prevSearchNode && this.prevSearch) return result;
        
        let current = this.prevSearchNode || this.root;
        for (let i = this.prevSearch.length; i < prefix.length; i++) {
            const code = prefix.charCodeAt(i) - SHIFT;
            if (!current.keys[code]) return result;
            current = current.keys[code];
        }
        this.prevSearch = prefix;
        this.prevSearchNode = current;
        this.#collect(current, prefix, result);

        return result;
    }

    #collect(node, word, result) {
        if (result.length === 3) return;
        if (node.end) result.push(word);
        
        for (let i = 0; i < R; i++) {
            if (!node.keys[i]) continue;
            const letter = String.fromCharCode(i + SHIFT);
            this.#collect(node.keys[i], word + letter, result);
        }
    }
}

class Node {
    end = false;
    keys = new Array(R);
}

// brute forse
// var suggestedProducts = function(products, searchWord) {
//     if (searchWord.length < 1) return [];

//     let sortedProducts = products.sort();
//     const result = [];

//     for (let i = 0; i < searchWord.length; i += 1) {
//         sortedProducts = sortedProducts.filter(product => product[i] === searchWord[i]);
//         result.push(sortedProducts.slice(0, 3));
//     }

//     return result;
// };

// binary search
// var suggestedProducts = function(products, searchWord) {
//     const prodLen = products.length, wordLen = searchWord.length;
//     const result = [...Array(wordLen)].map(() => []);
//     products.sort();
    
//     let prefix = '';
    
//     for(let i = 0; i < wordLen; i++) {
//         prefix += searchWord[i];
//         const match = [];
//         const idx = binarySearch(prefix);
        
//         for(let j = idx; j < prodLen && j < idx+3; j++) {
//             if(products[j].startsWith(prefix)) {
//                 match.push(products[j]);
//             } else break;
//         }
//         if(!match.length) break;
//         result[i] = match;
//     }
//     return result;
    
//     function binarySearch(start) {
//         let left = 0, right = prodLen-1;
        
//         while(left < right) {
//             const mid = Math.floor((left + right) / 2);
//             const subStr = products[mid].slice(0, start.length);
            
//             if(subStr >= start) right = mid;
//             else left = mid + 1;
//         }
//         return left;
//     }
// };

// simplified tree
// var suggestedProducts = function(products, searchWord) {
//     products.sort();
    
//     let trie = {};
//     for (let p of products) {
//         let root = trie;
//         for (let i=0;i<p.length;i++) {
//             if (!root[p[i]]) root[p[i]] = {'sug':[]};
//             if (root[p[i]]['sug'].length < 3) root[p[i]]['sug'].push(p);    
//             root = root[p[i]];
//         }
//     }
    
//     let root = trie, res = [];
//     for (let i=0;i<searchWord.length;i++) {
//         if (root) root = root[searchWord[i]];
//         res.push(!root ? [] : root['sug']);
//     }
    
//     return res;
// };
