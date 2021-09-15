/**
 * https://leetcode.com/problems/longest-turbulent-subarray/
 * @param {number[]} arr
 * @return {number}
 */
 var maxTurbulenceSize = function(arr) {
    const n = arr.length;
    if (n === 1) return 1;
    if (n === 2) return arr[0] !== arr[1] ? 2 : 1;
    let result = arr[0] === arr[1] ? 1 : 2;
    let currentSize = result;
    let evenBigger = arr[0] > arr[1];
    for (let i = 1; i < n - 1; i++) {
        const isCurrentEven = i % 2 === 0;
        if (
            (evenBigger && ((isCurrentEven && arr[i] > arr[i + 1]) || (!isCurrentEven && arr[i] < arr[i + 1]))) ||
            (!evenBigger && ((!isCurrentEven && arr[i] > arr[i + 1]) || (isCurrentEven && arr[i] < arr[i + 1])))
        ) {
            currentSize++;
        } else {
            currentSize = arr[i] === arr[i + 1] ? 1 : 2;
            evenBigger = !evenBigger;
        }
        
        if (currentSize > result) {
            result = currentSize;
        }
    }
    
    
    return result;
};

var maxTurbulenceSize = function(arr) {
    let max = 0;
    let greater = 0;
    let less = 0
    for (let i = 0; i < arr.length - 1; i++){
        if (i % 2 == 0){
            greater = (arr[i] > arr[i+1]) ? greater + 1 : 0;
            less = (arr[i] < arr[i+1]) ? less + 1 : 0
        } else {
            greater = (arr[i] < arr[i+1]) ? greater + 1 : 0;
            less = (arr[i] > arr[i+1]) ? less + 1 : 0
        }
        max = Math.max(max , greater, less);
    }
    return max + 1
};