/**
 * https://leetcode.com/problems/reordered-power-of-2/
 * @param {number} N
 * @return {boolean}
 */
// permutations
 var reorderedPowerOf2 = function(N) {
    if (N <= 2) return true;
    if (N < 20) return isPowerOf2(N);
    if (isPowerOf2(N)) return true;
    const numsArray = N.toString().split('');
    return checkReorders(numsArray, 0);
    
    function isPowerOf2(num) {
       return !(num & (num-1));
    }
    
    function checkReorders(nums, start) {
        if (start == nums.length)
            return isPowerOf2(+nums.join(''));

        // Choose some index i from [start, A.length - 1]
        // to be placed into position A[start].
        for (let i = start; i < nums.length; ++i) {
            // Place A[start] with value A[i].
            swap(start, i);

            // For each such placement of A[start], if a permutation
            // of (A[start+1], A[start+2], ...) can result in A
            // representing a power of 2, return true.
            if (checkReorders(nums, start + 1))
                return true;

            // Restore the array to the state it was in before
            // A[start] was placed with value A[i].
            swap(start, i);
        }

        return false;
        
        function swap(i, j) {
            const temp = numsArray[i];
            numsArray[i] = numsArray[j];
            numsArray[j] = temp;
        }
    }
};

/**
 * @param {number} N
 * @return {boolean}
 */
// better by performance solution with counting 
var reorderedPowerOf2 = function(N) {
    const a = count(N);
    
    for (i = 0; i < 31; i++) {
        if (compareArrays(a, count(1 << i))) return true;
    }
    
    return false;
    
    function count(num) {
        const arr = new Array(10).fill(0);
        while(num > 0) {
            arr[num % 10]++
            num = Math.floor(num / 10);
        }
        return arr;
    }
    
    function compareArrays(a, b) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
};