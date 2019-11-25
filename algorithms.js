//Algorithms

// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BINARY SEARCH ALGO

//FIND ANSWER BY HALVING RESULTS EACH INTERATION

const data = [1, 4, 2, 4, 5, 7, 77, 88, 9, 100, 122, 155, 434, 231241, 5345, 2, 3, 555, 3, 22, 342, 4059, 2487, 3948, 2937, 29374, 34, 5463, 3, 4, 2, 34, 3434, 556, 55, 6, 565, 655, 4, 2, 2, 1212, 3323, 22, 34, 67, 4, 745, 456, 456, 4564, 37, 78, 997, 566, 45, 45, 8, 57, 3, 7, 32, 4, 7, 134, 42, 3, 42, 34, 1, 35, 66, 7, 88, 2200, 220, 101, 2, 344, 5]
const sorted = data.sort((b, c) => { return b - c })

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

let result = binary(sorted, 434)
console.log('Result', result)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// FIND BIGGEST BINARY GAP 

const convertToBinary = (dec) => {
    const bin = (dec >>> 0).toString(2)
    // console.log(`Binary Conversion ${dec}`,bin)
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
const values = [1, 2, 147, 483, 647]
let answer = values.map(x => convertToBinary(x))
console.log('Answer', answer)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Rotate indexes by 1 to the right k number of times (Recursive)

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const K = 5

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

const repeat = rotate(A, K)
console.log('Repeat', repeat)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Find the element(s) that does not have a partner


const pairs = [1, 1, 1, 1, 2, 2, 4, 4, 3, 3, 3, 55, 6, 6, 4, 4, 3, 7, 7, 8, 8, 9, 9, 10, 10]

const sift = (a) => {
    let single = []
    const sort = a.sort((a, b) => { return a - b })
    sort.map((x, i) => x === sort[i + 1] ? (delete sort[i], delete sort[i + 1]) : single.push(x))
    return single
}
const solo = sift(pairs)
console.log('Solos', solo)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Find missing number in sequence 

const sequence = [9, 6, 7, 1, 2, 4, 10, 8, 3, 5, 11, 13]

const missing = (a) => {
    let miss
    const sort = a.sort((a, b) => { return a - b })
    sort.map((x, i) => sort[i] - sort[i - 1] != 1 ? miss = sort[i] - 1 : null)
    return miss
}

const found = missing(sequence)
console.log('Found', found)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// A small frog wants to get to the other side of the road.
// The frog is currently located at position X and wants to get to a position greater than or equal to Y.
// The small frog always jumps a fixed distance, D.
// Count the minimal number of jumps that the small frog must perform to reach its target.

const start = 10
const finish = 100
const jump = 5

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

const jumpNumber = position(start, finish, jump)
console.log('Number of jumps', jumpNumber)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Decide whether array is permutation or not 
const perm = [1, 2, 3, 4, 5, 6, 7, 8]

const isPerm = (a) => {
    const sort = a.sort((a, b) => a - b)
    const verdict = sort.map((x, i) => sort[i] - sort[i - 1] != 1)
    return verdict
}

const permutation = isPerm(perm)
console.log('Is Permutation', permutation)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Based on string decide if input is valid
const brackets = "({(()))}}"

const validateBrackets = (string) => {
    const isValidBracket = (value, array) => array.includes(value)

    return !string.split('').reduce((acc, current) =>
        isValidBracket(current, ['(', '{', '[']) ?
            ++acc :
            isValidBracket(current, [')', '}', ']']) ?
                --acc :
                acc,
        0);
}

const isValidBracketInput = validateBrackets(brackets)
console.log('is valid input', isValidBracketInput)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




