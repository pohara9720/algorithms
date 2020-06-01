//Algorithms

/** SECTION
 * ***************************
 * Recursive Pattern
 * ***************************
*/

//REVIEW countDown - given a number return all numbers counting down from that number
export const countDown = num => {
    if (num <= 0) {
        console.log('Done')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

// REVIEW sumRange - given positive number return sum range of that number
export const sumRange = num => {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

//REVIEW collectOddValuesHelper - !HELPER METHOD RECURSION! given an array of numbers return array of all odds within array
export const collectOddValuesHelper = array => {
    let result = []
    // The helper will do the populating of result with odd numbers
    const helper = input => {
        if (input.length === 0) return
        if (input[0] % 2 !== 0) result.push(input[0])
        helper(input.slice(1))
    }

    helper(array)

    return result
}

// REVIEW collectOddValuesPure - !PURE RECURSION! given an array of numbers return array of all odds within array
export const collectOddValuesPure = array => {
    let result = []
    if (array.length === 0) return result
    if (array[0] % 2 !== 0) {
        result.push(array[0])
    }
    // collectOddValuesPure will set result back to [] and the previous result value will wait til base condition is met then concat
    result = result.concat(collectOddValuesPure(array.slice(1)))
    return result
}

//REVIEW power - given a base and exponent return the base to the power of the exponent
export const power = (base, exponent) => exponent === 0 ? 1 : base * power(base, exponent - 1)

//REVIEW  factorial => 4! => 4 * 3 * 2 * 1 (With recurrection)
export const factorial = num => num < 0 ? 0 : num <= 1 ? 1 : num * factorial(num - 1)

//REVIEW productOfArray - given number array return product of all numbers
export const productOfArray = array => array.length === 0 ? 1 : array[0] * productOfArray(array.splice(1))

//REVIEW recursiveRange - given number return sum of all numbers counting up to that number
export const recursiveRange = num => num === 0 ? 0 : num + recursiveRange(num - 1)

//REVIEW fib - accepts number and returns nth number in fibonacci sequence
export const fib = (n) => n <= 2 ? 1 : fib(n - 1) + fib(n - 2)

//REVIEW reverse - given a string return string reversed
export const reverse = (str) => str.length <= 1 ? str : reverse(str.slice(1)) + str[0]

// REVIEW isPalindrome - return if string given is palindrome
export const isPalindrome = string => {
    if (string.length === 1) return true; //if string length is 1 it is always the same
    if (string.length === 2) return string[0] === string[1]; //if string length is 2 check if they are the same character 
    if (string[0] === string.slice(-1)) return isPalindrome(string.slice(1, -1)) // See if 1st and last character match if so rerun func with the first and last cut off
    return false;
}

//REVIEW someRecursive - given an array and callback return if some of array is true when callback is called
export const someRecursive = (array, callback) => {
    if (array.length === 0) return false
    if (callback(array[0])) return true
    return someRecursive(array.slice(1), callback)
}

// REVIEW flatten - given an array of arrays return a new array comprised of all other array values
export const flatten = array => {
    let newArr = []
    array.map(value => Array.isArray(value) ? newArr = newArr.concat(flatten(value)) : newArr.push(value))
    return newArr;
}

//REVIEW capitalizeFirst - given array of string return array with first letter capitalized
export const capitalizeFirst = (array) => {
    if (array.length === 1) {
        const first = array[0]
        return [first[0].toUpperCase() + first.substr(1)];
    }
    const result = capitalizeFirst(array.slice(0, -1)); //rerun with last idx chopped
    const lastItem = array.slice(array.length - 1)[0]
    const string = lastItem[0].toUpperCase() + lastItem.substr(1);
    result.push(string);
    return result;
}

//REVIEW nestedEvenSum - given object with nested objs return sum of all even number values
export const nestedEvenSum = (obj, sum = 0) => {
    Object.keys(obj).map(key => {
        const value = obj[key]
        if (typeof value === 'object') {
            sum += nestedEvenSum(value)
        }
        if (typeof value === 'number' && value % 2 === 0) {
            sum += value
        }
    })
    return sum
}

//REVIEW capitalizeWords - given array of strings return array with strings all capitalizeFirst
export const capitalizeWords = (array) => {
    if (array.length === 1) return [array[0].toUpperCase()]
    let result = capitalizeWords(array.slice(0, -1))
    result.push(array.slice(array.length - 1)[0].toUpperCase())
    return result
}

//REVIEW stringifyNumbers - given an object return  all numbers in obj as string
export const stringifyNumbers = obj => {
    let result = {}
    Object.keys(obj).map(key => {
        const value = obj[key]
        if (typeof value === 'number') {
            result[key] = value.toString()
        }
        else if (typeof value === 'object' && !Array.isArray(value)) {
            result[key] = stringifyNumbers(value)
        }
        else result[key] = value
    })
    return result
}

//REVIEW collectStrings - given obj return array of strings within obj
export const collectStrings = obj => {
    let result = []
    Object.keys(obj).map(key => {
        const value = obj[key]
        if (typeof value === 'object') result = result.concat(collectStrings(value))
        if (typeof value === 'string') result.push(value)
    })
    return result
}

/** SECTION
 * ***************************
 * Searching Algorithms
 * ***************************
*/

// REVIEW linearSearch - given a value and array search array for that value and return index or -1
export const linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i
    }
    return -1
}

// REVIEW search - DIVIDE AND CONQUER PATTERN - Given sorted array of ints and a value, return idx of value in array
export const binarySearch = (array, num) => {
    let min = 0
    let max = array.length - 1
    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let current = array[middle]
        if (current < num) {
            min = middle + 1
        } else if (current > num) {
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

/** SECTION
 * ***************************
 * Sorting algorithms
 * ***************************
*/

// Swap function for Sorting
const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//REVIEW Built in .sort() =>  Details in .txt file
export const sortAscending = (array) => array.sort((num1, num2) => num1 - num2)
export const sortDescending = (array) => array.sort((num1, num2) => num2 - num1)
export const sortByLength = (array) => array.sort((str1, str2) => str1.length - str2.length)

//REVIEW Bubble Sort
export const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

//REVIEW Selection sort
export const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}

//REVIEW Insertion sort
export const insertionSort = (arr) => {
    let currentVal = 0;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

//REVIEW Merge Sort - Merging sorted arrays 
export const merge = (arr1, arr2) => {
    let result = []
    let i = 0
    let j = 0
    // Loop through both arrays and push values to results accordingly
    while (i < arr1.length && j < arr2.length) {
        const value1 = arr1[i]
        const value2 = arr2[j]
        if (value1 <= value2) {
            result.push(value1)
            i++
        } else {
            result.push(value2)
            j++
        }
    }
    //If arr2 exhausts before arr1 has finished then continue pushing remaining values
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    //If arr1 exhausts before arr2 has finished then continue pushing remaining values
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

export const mergeSort = (array) => {
    if (array.length <= 1) return array
    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))
    return merge(left, right)
}

//REVIEW Quick Sort
export const pivot = (array, start = 0, end = array.length + 1) => {
    const pivot = array[start]
    let swapIdx = start
    for (let i = start + 1; i < array.length; i++) {
        if (pivot > array[i]) {
            swapIdx++
            swap(array, swapIdx, i)
        }
    }
    swap(array, start, swapIdx)
    return swapIdx
}

export const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pivotIdx = pivot(array, left, right)
        //left 
        quickSort(array, left, pivotIdx - 1)
        //right 
        quickSort(array, pivotIdx + 1, right)
    }
    return array
}

//REVIEW Radix Sort
export const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
export const digitCount = (num) => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1
export const mostDigits = array => {
    let maxDigits = 0
    array.forEach(x => maxDigits = Math.max(maxDigits, digitCount(x)))
    return maxDigits
}

export const radixSort = array => {
    let maxDigitCount = mostDigits(array);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < array.length; i++) {
            let digit = getDigit(array[i], k);
            digitBuckets[digit].push(array[i]);
        }
        array = [].concat(...digitBuckets);
    }
    return array;
}

/** SECTION
 * ***************************
 * Frequency Counter Pattern
 * ***************************
*/

// REVIEW anagram - given 2 strings determine if second string is anagram of the first
export const anagram = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false
    }
    const lookup = {}
    string1.split('').forEach(x => lookup[x] ? lookup[x] += 1 : lookup[x] = 1)
    string2.split('').map(x => {
        if (!lookup[x]) {
            return false
        }
        else {
            lookup[x] -= 1
        }
    })
    return true
}

// REVIEW sameFrequency- given 2 positive integers determine if the numbers have the same frequency
export const sameFrequency = (one, two) => {
    const string1 = one.toString()
    const string2 = two.toString()
    if (string1.length !== string2.length) {
        return false
    }
    const count1 = {}
    const count2 = {}
    string1.split('').forEach(x => count1[x] = (count1[x] || 0) + 1)
    string2.split('').forEach(x => count2[x] = (count2[x] || 0) + 1)

    for (let key in count1) {
        if (count1[key] !== count2[key]) return false;
    }

    return true
}

/** SECTION
 * ***************************
 * Multiple points pattern
 * ***************************
*/

// REVIEW countUniqueValues - given sorted array return number of unique values
export const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let unique = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[unique] !== arr[j]) {
            unique++;
            arr[unique] = arr[j]
        }
    }
    return unique + 1;
}

// REVIEW  asDuplicates - check whether there are duplicates passed in as parameters
export const hasDuplicates = (...args) => {
    args.sort();
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}


//REVIEW hasAveragePair - given a sorted array of integers and a target average determine if there is a pair of values that averages to target average
export const hasAveragePair = (array, target) => {
    let start = 0
    let end = array.length - 1;
    while (start < end) {
        const avg = (array[start] + array[end]) / 2
        if (avg === target) return true;
        else if (avg < target) start++
        else end--
    }
    return false;
}

// REVIEW isSubsequent - given 2 string is the first string subsequent in the second without changing order
export const isSubsequent = (str1, str2) => {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}


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

/** SECTION
 * ***************************
 * Additional algorithm practice from https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 * ***************************
*/

//FIND ANSWER BY HALVING RESULTS EACH INTERATION
const binary = (a, v) => {
    let high = a.length - 1
    let low = 0
    let mid = 0

    while (low <= high) {
        mid = Math.floor((high + low) / 2)
        // middle = value being searched
        if (a[mid] === v) {
            return a[mid]
        }
        else if (v > a[mid]) {
            //move the low up one
            low = mid + 1
        }
        else {
            // move high down one 
            high = mid - 1
        }
    }
    return -1
}


// FIND BIGGEST BINARY GAP 
const convertToBinary = (dec) => {
    const bin = (dec >>> 0).toString(2)
    const array = bin.split('')
    const lengths = []
    let length = null
    array.map(b => {
        b === '0' ?
            length++
            :
            (
                lengths.push(length),
                length = 0
            )
    })
    return Math.max(...lengths)

}

//Rotate indexes by 1 to the right k number of times (Recursive)
const rotate = (a, k) => {
    let count = 0
    let answer
    while (count < k) {
        var set = a
        const o = set.pop()
        set.splice(0, 0, o)
        count++
        answer = set
    }
    return answer
}

//Find the element(s) that does not have a partner
const sift = (a) => {
    let single = []
    const sort = a.sort((a, b) => { return a - b })
    sort.map((x, i) => x === sort[i + 1] ? (delete sort[i], delete sort[i + 1]) : single.push(x))
    return single
}

// Find missing number in sequence 
const missing = (a) => {
    let miss
    const sort = a.sort((a, b) => { return a - b })
    sort.map((x, i) => sort[i] - sort[i - 1] != 1 ? miss = sort[i] - 1 : null)
    return miss
}

// A small frog wants to get to the other side of the road.
// The frog is currently located at position X and wants to get to a position greater than or equal to Y.
// The small frog always jumps a fixed distance, D.
// Count the minimal number of jumps that the small frog must perform to reach its target.
const position = (x, y, z) => {
    let current = x
    let count = 0
    let positions = []
    while (current < y) {
        current = current + z
        positions.push(current)
        count++
    }
    const payload = { positions, count }
    return payload
}

//Decide whether array is permutation or not 
const isPerm = (a) => {
    const sort = a.sort((a, b) => a - b)
    const verdict = sort.map((x, i) => sort[i] - sort[i - 1] != 1)
    return verdict
}


//Based on string decide if input is valid
const validateBrackets = (string) => {
    const isOpening = (val) => ['(', '{', '['].includes(val)
    const isClosing = (val) => [')', '}', ']'].includes(val)
    return !string.split('').reduce((acc, current) =>
        isOpening(current) ?
            ++acc :
            isClosing(current) ?
                --acc :
                acc,
        0);
}

//Given array of 2 strings return matching values (avoiding .includes removes the O(n^2) complexity)
const findIntersection = array => {
    let count1 = {}
    let results = []
    const [right, left] = array
    right.split(',').forEach(x => count1[x] = 1)
    left.split(',').map(x => count1[x] ? results.push(x) : null)
    return results
}

