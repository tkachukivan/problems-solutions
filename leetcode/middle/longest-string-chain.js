/**
 * https://leetcode.com/problems/longest-string-chain/
 * @param {string[]} words
 * @return {number}
 */
 var longestStrChain = function(words) {
    const n = words.length;
    const cache = new Uint16Array(n);
    
    words.sort((a, b) => a.length - b.length);
    
    let maxChain = 1;
    for (let i = 0; i < n; i++) {
        maxChain = Math.max(maxChain, countChainSize(i, 1));
    }
    
    return maxChain;
    
    function countChainSize(currentWord, chainSize) {
        if (cache[currentWord]) return cache[currentWord];
        const word1 = words[currentWord];
        let maxChain = chainSize;
        
        for (let i = currentWord + 1; i < n; i++) {
            if (word1.length === words[i].length) continue;
            if (words[i].length - word1.length > 1) break;
            if (isPredecessor(word1, words[i])) {
                maxChain = Math.max(maxChain, countChainSize(i, chainSize + 1));
            }
        }
        cache[currentWord] = maxChain;
        
        return maxChain;
    }
    
    function isPredecessor(word1, word2) {
        let foundDifferent = false;
        let i = 0;
        let j = 0;
        while (i < word1.length) {
            if (word1[i] === word2[j]) {
                i++;
                j++;
            } else {
                if (foundDifferent) return false;
                foundDifferent = true;
                j++;
            }
        }
        return true;
    }
};

// var longestStrChain = function(words) {
//     words.sort((a, b) => a.length - b.length)
//     const memo = new Map()
//     for (let j = 0; j < words.length; j++) {
//         memo.set(words[j], 1)
//         for (let i = 0; i < words[j].length; i++) {
//             const x = words[j].slice(0, i) + words[j].slice(i+1)
//             if (memo.has(x)) {
//                 memo.set(words[j], Math.max(memo.get(words[j]), memo.get(x) + 1))
//             }
//         }
//     }
//     return Math.max(...memo.values());
// }