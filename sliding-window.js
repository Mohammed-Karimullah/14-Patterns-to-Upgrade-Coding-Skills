Const maxSumSubarray = (nums, k) =>  {
    let maxSum = 0;
    let windowSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        // Expand the window
        windowSum += nums[end]; 

        // Check if window size is k
        if (end >= k - 1) { 
            // Update maxSum
            maxSum = Math.max(maxSum, windowSum); 
            // Shrink the window
            windowSum -= nums[start];   
            // Move the start pointer
            start++;    
        }
    }
    return maxSum;
}

// Example usage
const nums = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(nums, k)); // Output: 9
