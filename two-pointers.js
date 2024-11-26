function twoSumSorted(nums, target) {
    let left = 0; // Start pointer
    let right = nums.length - 1; // End pointer

    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === target) {
            return [nums[left], nums[right]]; // Found the pair
        } else if (sum < target) {
            left++; // Move left pointer forward to increase sum
        } else {
            right--; // Move right pointer backward to decrease sum
        }
    }

    return []; // No pair found
}

// Example usage
const nums = [1, 2, 3, 4, 6];
const target = 6;
console.log(twoSumSorted(nums, target)); // Output: [2, 4]
