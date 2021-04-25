/**
 * https://leetcode.com/problems/top-k-frequent-words/
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const frequencies = new Map();

    for (let word of words) {
        frequencies.set(word, (frequencies.get(word) || 0) + 1);
    }
    
    const frequenciesList = [...frequencies.keys()];
    frequenciesList.sort((a, b) => {
        const res = frequencies.get(b) - frequencies.get(a);
        if (res !== 0) return res;
        return a.localeCompare(b);
    });
    
    return frequenciesList.slice(0,k);
};
