/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const groups = new Map();
    
    for (let word of strs) {
        // const key = buildKey(count(word));
        const key = word.split('').sort().join('');
        if (groups.has(key)) groups.get(key).push(word);
        else groups.set(key, [word]);
    }
    
    return [...groups.values()];
    
//     function count(word) {
//         const letters = new Uint8Array(26);
//         for (let i = 0; i < word.length; i++) {
//             letters[word.charCodeAt(i) - 97]++;
//         }
        
//         return letters;
//     }
    
//     function buildKey(letters) {
//         let key = '';

//         for (let i = 0; i < 26; i++) {
//             if (letters[i] === 0) continue;
//             key += String.fromCharCode(i + 97).repeat(letters[i]);
//         }
        
//         return key;
//     }
};
