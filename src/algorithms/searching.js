
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

