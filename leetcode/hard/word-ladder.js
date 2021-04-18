/**
 * https://leetcode.com/problems/word-ladder/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const words = new Set(wordList);
    if (!words.has(endWord)) return 0;
    let transformations = 1;
    const queue = [beginWord];
    const L = beginWord.length;
    
    while(queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const word = queue.shift();
            
            for (let j = 0; j < L; j++) {
                for (let k = 0; k < 26; k++) {
                    if (letters[k] === word[j]) continue;
                    const candidate = word.substring(0, j) + letters[k] + word.substring(j+1, L);
                    if (candidate === endWord) return transformations + 1;
                    if (words.has(candidate)) {
                        queue.push(candidate);
                        words.delete(candidate);
                    }
                }
            }
        }
        
        transformations++;
    }
    
    return 0;
};
// more memory but slightly faster
// var ladderLength = function(beginWord, endWord, wordList) {
//     const combinations = new Map();
//     const visited = new Set();
//     const L = beginWord.length;
//     wordList.forEach((word) => {
//         for (let i = 0; i < L; i++) {
//             const newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);
//             const transformations = combinations.get(newWord) || [];
//             transformations.push(word);
//             combinations.set(newWord, transformations);
//         }
//     });
    
//     const queue = [beginWord];
//     let transformationLevel = 1;
//     visited.add(beginWord);
//     while(queue.length) {
//         const len = queue.length;
//         for (let k = 0; k < len; k++) {
//             const word = queue.shift();
            
//             for (let i = 0; i < L; i++) {
//                 const newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);
//                 if (!combinations.has(newWord)) continue;

//                 const transformations = combinations.get(newWord);

//                 for (let j = 0; j < transformations.length; j++) {
//                     if (visited.has(transformations[j])) continue;
//                     if (transformations[j] === endWord) return transformationLevel + 1;
//                     queue.push(transformations[j]);
//                     visited.add(transformations[j]);
//                 }
//             }
//         }
        
//         transformationLevel++
//     }
    
//     return 0;
// };