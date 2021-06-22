/**
 * https://leetcode.com/problems/number-of-matching-subsequences/
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
// var numMatchingSubseq = function(s, words) {
//     const n = s.length;
//     const wordsCounts = new Map();
    
//     for (let i = 0; i < words.length; i++) {
//         wordsCounts.set(words[i], (wordsCounts.get(words[i]) || 0) + 1)
//     }
    
//     const uniqueWords = [...wordsCounts.keys()];
//     const m = uniqueWords.length;
//     const indices = new Uint8Array(m);
    
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (uniqueWords[j][indices[j]] && uniqueWords[j][indices[j]] === s[i]) {
//                 indices[j]++;
//             }
//         }
//     }
    
//     let result = 0;
//     for (let i = 0; i < m; i++) {
//         if (indices[i] >= uniqueWords[i].length) {
//             result += wordsCounts.get(uniqueWords[i]);
//         }
//     }
    
//     return result;
// };

var numMatchingSubseq = function(S, words) {
    const bucket = [...Array(26)].map(() => []);
    let counter = 0;
    
    function getCharId(char) {
        return char.charCodeAt() - 'a'.charCodeAt()
    }
    
    for(let word of words) {
        const idx = getCharId(word[0]);
        bucket[idx].push(word);
    }
    
    for(let char of S) {
        const idx = getCharId(char);
        const currBucket = bucket[idx]
        bucket[idx] = []
        
        for(let word of currBucket) {
            word = word.slice(1);
            if(!word.length) {
                counter++;
                continue;
            }
            const nextIdx = getCharId(word[0]);
            bucket[nextIdx].push(word)
        }
    }
    return counter;
};