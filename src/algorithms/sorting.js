
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

