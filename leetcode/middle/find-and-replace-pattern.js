/**
 * https://leetcode.com/problems/find-and-replace-pattern/
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    return words.filter(matchPattern);
    
    function matchPattern(word) {
        const mappingP = new Map();
        const mappingW = new Map();
        let newWord = '';
        for (let i = 0; i < pattern.length; i++) {
            if (!mappingP.has(pattern[i]))
                mappingP.set(pattern[i], word[i]);
            if (!mappingW.has(word[i]))
                mappingW.set(word[i], pattern[i]);
            if (mappingP.get(pattern[i]) !== word[i] || mappingW.get(word[i]) !== pattern[i]) return false;
        }
        
        return true;
    }
};

// const serialize = (str) => {
//   const BASE = 96;
//   const map = new Uint8Array(27);
//   let ret = '';
//   for (let i = 0, cur = BASE; i < str.length; ++i) {
//     const code = str.charCodeAt(i) - BASE;
//     if (map[code]) {
//       ret += String.fromCharCode(map[code]);
//     } else {
//       ret += String.fromCharCode(cur);
//       map[code] = cur++;
//     }
//   }
//   return ret;
// };
// const findAndReplacePattern = (words, pattern, metaPattern = serialize(pattern)) => words.filter((word) => serialize(word) === metaPattern);