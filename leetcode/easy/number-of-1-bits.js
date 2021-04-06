/**
 * https://leetcode.com/problems/number-of-1-bits
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    const binary = n.toString(2);
    let ones = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') ones++;
    }
    return ones;
//     let count = 0;

// 	while (n !== 0) {
// 		count++;
// 		n = n & (n - 1);
// 	}

// 	return count;
};