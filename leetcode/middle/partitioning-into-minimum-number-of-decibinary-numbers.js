/**
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/submissions/
 * @param {string} n
 * @return {number}
 */
 var minPartitions = function(n) {
    let result = '0';
    for (let i = 0; i < n.length; i++) {
        if (n[i] > result) {
            result = n[i];
        }
        
        if (result === '9') return 9;
    }
    
    return result;

    //     return Math.max(...n);
};