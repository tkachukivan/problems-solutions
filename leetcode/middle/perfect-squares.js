/**
 * https://leetcode.com/problems/perfect-squares/
 * @param {number} n
 * @return {number}
 */
// dp
// var numSquares = function(n) {
//     if (n < 4) return n;
//     const cache = new Uint32Array(n + 1);
    
//     helper(n);
    
//     return cache[n];
    
//     function helper(n) {
//         if (n < 4) return n;
//         if (cache[n]) return cache[n];
//         let result = n;
//         let current = 2;
        
//         while (current * current <= n) {
//             result = Math.min(result, helper(n - current * current) + 1);
//             current++;
//         }
        
//         cache[n] = result;
//         return result;
//     }
// };

// dp
function numSquares(n) {
    const dp = new Uint32Array(n + 1);
    
    for (let i = 1; i <= n; i++) {
      dp[i] = n;
      for (let j = 1; j*j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      } 
    }
    
    return dp[n];
  }
  
  // math
  // var numSquares=n=>{
  //     //returns if the number x is a valid square root ( can be represented as the square of an integer)
  //     const isSquare = x => Math.floor(Math.sqrt(x))**2 === x;
  
  //     if (isSquare(n)) return 1 // that would be the fact that its equal to itself
  
  //     // Legendre's three square theorem: A natural number n can be represented as 
  // 	// the sum of AT MOST three squares of integers if and only if : n!= 4^x ( 8*m+7)
  //     while (n%4 === 0) n/=4
  // 	//Try contradicting Legendre
  //     if (n%8 === 7) return 4 
          
  //     // Manually checking for result 2, because Legendre states  AT MOST 3, 
  // 	// so 2 is possible aswell
  //     for (let i = 1; i <=n; i++) {
  //         // if x=n-i*i   and x is a valid square then OBVIOUSLY
  //         // n=i^2 +sqrt(x)^2  ,so n is a square of two numbers   
  //         if (isSquare(n- i * i)) return 2
  //     }
      
  // 	// Legendre applies
  //     return 3
  // }