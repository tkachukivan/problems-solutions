/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let i = 0;
    let swapWithStart = 0;
    let swapWithEnd = nums.length - 1;
    while(i < nums.length) {
        if (nums[i] === 0) {
            swap(nums, i, swapWithStart);
            if (i >= swapWithStart) {
                i++
            }
            swapWithStart++
        } else if (nums[i] === 1) {
            i++;
        } else {
            if (i <= swapWithEnd) {
                swap(nums, i, swapWithEnd);
                swapWithEnd--
            } else {
                i++
            }
            
        }
    }
};

function swap(nums, i, j) {
    const a = nums[i];
    nums[i] = nums[j];
    nums[j] = a;
}

const array = [2, 0, 2, 1, 0, 1, 0];

sortColors(array);
console.log(array);