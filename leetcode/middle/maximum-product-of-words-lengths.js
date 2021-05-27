/**
 * https://leetcode.com/problems/maximum-product-of-word-lengths/
 * @param {string[]} words
 * @return {number}
 */
// var maxProduct = function(words) {
//     const n = words.length;
//     const letters = new Map();
    
//     for (let word of words) {
//         const wordLetters = new Set();
//         for (let i = 0; i < word.length; i++) {
//             wordLetters.add(word[i]);
//         }
        
//         letters.set(word, wordLetters);
//     }
    
//     let result = 0;
    
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (!hasCommonLetters(letters.get(words[i]), letters.get(words[j]))) {
//                 result = Math.max(result, words[i].length * words[j].length);
//             }
//         }
//     }
    
//     return result;
// };

// function hasCommonLetters(word1Letters, word2Letters) {
//     for (let letter of word1Letters) {
//         if (word2Letters.has(letter)) return true;
//     }
    
//     return false;
// }

var maxProduct = function(words) {
    words.sort((a,b) => b.length - a.length);
    
    let best = 0, bitsets = new Uint32Array(words.length);
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i], wlen = word.length, bitset = 0;
        
        if (wlen * words[0].length < best)
            return best;
        
        for (let j = 0; j < wlen; j++)
            bitset |= 1 << (word.charCodeAt(j) - 97);
        
        for (let j = 0; j < i; j++)
            if ((bitsets[j] & bitset) === 0)
                best = Math.max(best, wlen * words[j].length);
        
        bitsets[i] = bitset;
    }
    
    return best;
};