
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

