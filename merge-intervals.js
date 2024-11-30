function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    // Step 1: Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize the result array with the first interval
    let merged = [intervals[0]];

    // Step 3: Iterate through the sorted intervals
    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMergedInterval = merged[merged.length - 1];

        // Step 4: Check for overlapping intervals
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Step 5: Merge overlapping intervals
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // Step 6: Add non-overlapping interval to result
            merged.push(currentInterval);
        }
    }

    return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervals);
console.log("Merged Intervals:", mergedIntervals); // Output: [[1, 6], [8, 10], [15, 18]]
