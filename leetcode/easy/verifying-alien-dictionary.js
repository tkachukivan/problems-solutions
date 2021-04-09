/**
 * https://leetcode.com/problems/verifying-an-alien-dictionary
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    const lettersOrders = new Map();
    for (let i = 0; i < order.length; i++) {
        lettersOrders.set(order[i], i);
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        if (!inOrder(words[i], words[i + 1])) return false;
    }
    
    return true;
    
    function inOrder(word1, word2) {
        const minLen = Math.min(word1.length, word2.length);
        for (let i = 0; i < minLen; i++) {
            const l1 = lettersOrders.get(word1[i]);
            const l2 = lettersOrders.get(word2[i]);
            if (lettersOrders.get(word1[i]) !== lettersOrders.get(word2[i])) return l1 < l2;
        }
        
        return word1.length <= word2.length;
    }
};