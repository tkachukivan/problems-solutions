/**
 * https://leetcode.com/problems/word-subsets
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
 var wordSubsets = function(A, B) {
    const R = 26;
    const INDEX_SHIFT = 97;
    const countB = new Uint8Array(R);
    const result = [];
    
    for(let i = 0; i < B.length; i++) {
        const res = getLettersCounts(B[i]);
        for (let j = 0; j < R; j++) {
            if (res[j] > countB[j]) countB[j] = res[j];
        }
    }
    
    for (let i = 0; i < A.length; i++) {
        if (isSubset(A[i])) result.push(A[i]);
    }
    
    return result;
    
    function getLettersCounts(word) {
        const result = new Uint8Array(R);

        for(let i = 0; i < word.length; i++) {
            result[word.charCodeAt(i) - INDEX_SHIFT]++;
        }

        return result;
    }
    
    function isSubset(word) {
        const countA = getLettersCounts(word);
        
        for (let i = 0; i < R; i++) {
            if(countB[i] > countA[i]) return false;
        }
        
        return true;
    }
};