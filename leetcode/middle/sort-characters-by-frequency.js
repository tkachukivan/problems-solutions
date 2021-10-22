/**
 * @param {string} s
 * @return {string}
 */

// var frequencySort = function(s) {
//     const counts = new Map();
//     for (const letter of s) {
//         counts.set(letter, (counts.get(letter) || 0) + 1);
//     }
    
//     const sortedCounts = [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a));
    
//     let sortedString = '';
    
//     for (const letter of sortedCounts) {
//         sortedString += letter.repeat(counts.get(letter));
//     }
    
//     return sortedString;
// };

var frequencySort = function(s) {
    const counts = new Map();
    for (const letter of s) {
        counts.set(letter, (counts.get(letter) || 0) + 1);
    }
    const bucket = [];
    let result = '';
    
    for (let [char, freq] of counts) {
        if(!bucket[freq]) bucket[freq] = [char];
        else bucket[freq].push(char);
    }
    
    for (let i = bucket.length - 1; i >= 0; i--) {
        if(!bucket[i]) continue;
        
        for (let char of bucket[i]) {
            result += char.repeat(i);
        }
    }
    return result;    
};