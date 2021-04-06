/**
 * https://leetcode.com/problems/ones-and-zeroes/
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    const dp = Array.from({length:m+1},() => new Uint8Array(n+1));

    for (let i = 0; i < strs.length; i++) {
        let zeros = 0;
        let ones = 0;
        for (let j = 0; j < strs[i].length; j++) {
            strs[i][j] === '0' ? zeros++ : ones++;
        }
        
        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j-zeros][k-ones] + 1);
            }
        }
    }

    return dp[m][n];

//     const cache = new Map();
    
//     return countSubsets(m, n, 0);
    
//     function countSubsets(mW, nW, i) {
//         if (i === strs.length || (!mW && !nW)) return 0;
//         const cacheKey = `${i},${mW},${nW}`;
//         if (cache.has(cacheKey)) return cache.get(cacheKey);
//         let zeros = 0;
//         let ones = 0;
//         for (let j = 0; j < strs[i].length; j++) {
//             strs[i][j] === '0' ? zeros++ : ones++;
//         }

        
//         if (mW - zeros < 0 || nW - ones < 0) {
//             const res = countSubsets(mW, nW, i + 1);
//             cache.set(cacheKey, res);
//             return res;
//         }
//         const res = Math.max(
//             countSubsets(mW - zeros, nW - ones, i + 1) + 1,
//             countSubsets(mW, nW, i + 1)
//         );
        
//         cache.set(cacheKey, res);
        
//         return res;
//     }
};

console.log(findMaxForm(["10","0001","111001","1","0"], 5, 3));