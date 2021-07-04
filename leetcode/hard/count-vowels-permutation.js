/**
 * https://leetcode.com/problems/count-vowels-permutation/
 * @param {number} n
 * @return {number}
 */
// dp top down
var countVowelPermutation = function(n) {
    const MOD = 10 ** 9 + 7;
    const memo = Array.from({ length: n + 1 }, () => new Array(5));
    let result = 0;
    
    for (let i = 0; i < 5; i++) {
        result = (result + count(1, i)) % MOD;
    }
    
    return result;
    
    function count(size, prevLetter) {
        if (size === n) return 1;
        if (memo[size][prevLetter]) return memo[size][prevLetter];
        size++;
        let result = 0;
        
        switch(prevLetter) {
            case 0:
                result += count(size, 1);
                break;
            case 1:
                result += count(size, 0);
                result += count(size, 2);
                break;
            case 2:
                result += count(size, 0);
                result += count(size, 1);
                result += count(size, 3);
                result += count(size, 4);
                break;
            case 3:
                result += count(size, 2);
                result += count(size, 4);
                break;
            case 4:
                result += count(size, 0);
                break;
        }
        result = result % MOD;
        memo[size - 1][prevLetter] = result;

        return result;
    }
};
// dp bottom up
// var countVowelPermutation = function(n) {
//     const MOD = 1000000007;
//     const dp = Array(n + 1).fill(null).map(() => Array(5).fill(0));
//     dp[1][0] = 1;    // a
//     dp[1][1] = 1;    // e
//     dp[1][2] = 1;    // i
//     dp[1][3] = 1;    // o
//     dp[1][4] = 1;    // u
    
//     for(let i = 2; i <= n; ++i) {
//         dp[i][0] = dp[i - 1][1];                                                       // ae
//         dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;                                // ea, ei
//         dp[i][2] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][3] + dp[i - 1][4]) % MOD;  // ia, ie, io, iu
//         dp[i][3] = (dp[i - 1][2] + dp[i - 1][4]) % MOD;                                // oi, ou
//         dp[i][4] = dp[i - 1][0];                                                       // ua
//     }
//     return (dp[n][0] + dp[n][1] + dp[n][2] + dp[n][3] + dp[n][4]) % MOD;
// };

// dp bottom up optimized
// var countVowelPermutation = function(n) {
//     const MOD = 1000000007;
//     let a_str_count = [0, 1],
//         e_str_count = [0, 1],
//         i_str_count = [0, 1],
//         o_str_count = [0, 1],
//         u_str_count = [0, 1];
    
//     for(let i = 2; i <= n; ++i) {
//         a_str_count[0] = a_str_count[1];
//         e_str_count[0] = e_str_count[1];
//         i_str_count[0] = i_str_count[1];
//         o_str_count[0] = o_str_count[1];
//         u_str_count[0] = u_str_count[1];
//         a_str_count[1] = e_str_count[0];
//         e_str_count[1] = (a_str_count[0] + i_str_count[0]) % MOD;
//         i_str_count[1] = (a_str_count[0] + e_str_count[0] + o_str_count[0] + u_str_count[0]) % MOD;
//         o_str_count[1] = (i_str_count[0] + u_str_count[0]) % MOD;
//         u_str_count[1] = a_str_count[0];
//     }
//     return (a_str_count[1] + e_str_count[1] + i_str_count[1] + o_str_count[1] + u_str_count[1]) % MOD;
// }