/**
 * https://leetcode.com/problems/count-primes
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    if (n < 3) return 0;
    const isPrime = new Array(n).fill(true);
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    let primes = 0;
    for (let i = 2; i < n; i++) {
        if(isPrime[i]) primes++;
    }
    
    return primes;
};