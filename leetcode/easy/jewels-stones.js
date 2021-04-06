/**
 * https://leetcode.com/problems/jewels-and-stones
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let jewelsCount = 0;
    const jewelsMap = new Map();
    for (let i = 0; i < jewels.length; i++) {
        jewelsMap.set(jewels[i], true);
    }
    
    for(let i = 0; i < stones.length; i++) {
        if (jewelsMap.has(stones[i])) {
            jewelsCount++;    
        }
    }
    
    return jewelsCount;
};