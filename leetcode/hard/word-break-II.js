/**
 * https://leetcode.com/problems/word-break-ii/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
 var wordBreak = function(s, wordDict) {
    const n = s.length;
    const wordsSet = new Set(wordDict);
    const result = [];
    
    breakWords(0, 1, []);
    
    return result;
    
    function breakWords(start, end, words) {
        if (end === n) {
            const candidate = s.substring(start, end);
            if (wordsSet.has(candidate)) {
                words.push(candidate);
                result.push(words.join(' '));
                words.pop();
            }
            return;
        }
        
        const candidate = s.substring(start, end);
        if (wordsSet.has(candidate)) {
            words.push(candidate);
            breakWords(end, end + 1, words);
            words.pop();
        }
        breakWords(start, end + 1, words);
    }
};

// const wordBreak = (s, wordDict, cache = new Map()) => {
//     if(cache.has(s)) return cache.get(s);
	    
//     const result = [];
//     for(const word of wordDict){
//         if (s.startsWith(word)){
//             const leftAfter = s.slice(word.length);
//             if(!leftAfter.length) result.push(word);
//             else wordBreak(leftAfter, wordDict, cache).forEach(val => result.push(word + ' ' + val));
//         }
//     }
    
//     cache.set(s, result);
//     return result;
// };

// var wordBreak = function(s, wordDict) {
//     // Create a memo array to store the subString
//     const cache = new Map();

//     //Recursive functions
//     return wordBreakRecursive(s, wordDict, cache);
// };

// function wordBreakRecursive(str, wordDict, cache) {
//     // Check if string exist in cache
//     // If exist than return the string
//     if(cache.has(str)) {
//         return cache.get(str);
//     }

//     // Check the string length
//     if(str.length == 0) {
//         return [];
//     }

//     // Store the result of string concat
//     let result = [];


//     // Run the Loop
//     for(let word of wordDict) {


//         // Find the words in the dict
//         // check for start value
//         if(str.startsWith(word)) {

//             // Slice the string from current word in word DICT
//             let nextValue = str.slice(word.length);

//             // check all the possible paths for the that particular sub string
//             const paths = wordBreakRecursive(nextValue, wordDict, cache);

//             // If paths and nextValue variables are empty that means current word will be the last one in the sequence
//             if(paths.length == 0 && nextValue.length == 0) {
//                 result.push(word);
//             }

//             // map each word in result and append to the previous result value
//             result.push(...paths.map((previousWord) => word + ' ' +  previousWord));
//         }

//     }

//     // Save the cache value to minimize the recursive loop
//     cache.set(str, result);

//     // return the final output
//     return result;
// }