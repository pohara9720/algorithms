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
