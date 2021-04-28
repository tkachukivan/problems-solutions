/**
 * https://leetcode.com/problems/circular-array-loop/
 * @param {number[]} nums
 * @return {boolean}
 */
 var circularArrayLoop = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        let slow = i;
        let fast = i;
        const sign = Math.sign(nums[i]);
        while(true) {
            slow = getNext(slow);
            let nextFast = getNext(fast);
            if (nums[nextFast] * sign <= 0 || nextFast === fast) break;
            fast = nextFast;
            nextFast = getNext(fast);
            if (nums[nextFast] * sign <= 0 || nextFast === fast) break;
            fast = nextFast;
            if (fast === slow) return true;
        }
        slow = i;
        while(slow !== fast) {
            const next = getNext(slow)
            nums[slow] = 0;
            slow = next;
        }
    }
    
    return false;
    
    function getNext(currentIndex) {
        let nextIndex = (currentIndex + nums[currentIndex]) % nums.length;
        if (nextIndex < 0) {
            nextIndex = nums.length + nextIndex;
        }
        return nextIndex;
    }
};