/**
 * https://leetcode.com/problems/3sum-with-multiplicity
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var threeSumMulti = function(arr, target) {
    let result = 0;
    const MOD = 10 ** 9 + 7;
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        const T = target - arr[i];
        while(j < k) {            
            if (arr[j] + arr[k] > T) {
                k--;
            } else if (arr[j] + arr[k] < T) {
                j++
            } else if (arr[j] !== arr[k]) {
                let left = 1;
                let right = 1;
                while (j + 1 < k && arr[j] == arr[j+1]) {
                    left++;
                    j++;
                }
                
                while (k - 1 > j && arr[k] == arr[k-1]) {
                    right++;
                    k--;
                }
                
                result += left * right;
                result %= MOD;
                j++;
                k--;
            } else {
                // M = k - j + 1
                // We contributed M * (M-1) / 2 pairs.
                result += (k-j+1) * (k-j) / 2;
                result %= MOD;
                break;
            }
        }
    }
    
    
    return result;
};