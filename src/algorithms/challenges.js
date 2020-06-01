//Algorithms
/** SECTION
 * ***************************
 * Additional algorithm practice from https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 * ***************************
*/


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

