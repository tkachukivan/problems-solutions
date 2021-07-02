/**
 * https://leetcode.com/problems/find-k-closest-elements/
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    let lo = 0;
    let hi = arr.length - 1;
    let mid = 0;
    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);
        
        if (arr[mid] === x) {
            break;
        } else if (arr[mid] > x) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    let left = Math.max(0, mid - 1);
    let right = left + 1;
        
    while (right - left - 1 < k) {
        if (left < 0) {
            right++;
            continue;
        }

        if (right >= arr.length || Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            left--;
        } else {
            right++;
        }
    }

    left++;
    
    return arr.slice(left, right);
};