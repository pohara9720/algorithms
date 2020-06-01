
/** SECTION
 * ***************************
 * Sliding window pattern
 * ***************************
*/

// REVIEW maxSubarraySum - given number array and n. Return maximum sum of n consecutive elements in array
export const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// REVIEW minSubarrayLen - given an array and target int return min length of array which the sum is greater than or equal to target

export const minSubarrayLen = (array, target) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < array.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < target && end < array.length) {
            total += array[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= target) {
            minLen = Math.min(minLen, end - start);
            total -= array[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

//REVIEW findLongestSubstring- given string return length of longest substring with distinct characters
export const findLongestSubstring = (string) => {
    let longest = 0;
    let seen = {};
    let start = 0;

    string.split('').map((char, i) => {
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    })

    return longest;
}