//Algorithms
/** SECTION
 * ***************************
 * Additional algorithm practice from https://www.hackerrank.com/interview/interview-preparation-kit?h_l=domains&h_r=hrw&utm_source=hrwCandidateFeedback
 * ***************************
*/

// Rotate indexes in Aay A left by X spaces
export const rotLeft = (A, K) => {
    let tail = []
    for (let i = 0; i < K; i++) {
        tail.push(A.shift())
    }
    return A.concat(tail)
}

console.log(rotLeft([1, 2, 3, 4, 5], 2))

// Minimum Bribes
export const minimumBribes = (q) => {
    let swaps = 0
    for (let i = 0; i < q.length; i++) {
        let bribes = q[i] - (i + 1)
        let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0
        if (bribes > 2) return 'Too chaotic'
        for (let j = maxAdvance; j < i; j++) {
            if (q[j] > q[i]) swaps++
        }
    }
    return swaps
}

// Return minimum number of swaps needed to sort array A
export const minimumSwaps = (A) => {
    let swaps = 0 //Init counter
    for (let i = 0, l = Math.max(...A); i < l; i++) { //Loop n number of times n = largest number in array
        while (A[i] !== i + 1) { //While value doesnt equal next (Not sorted)
            const prev = A[i] - 1
            A[i] = [A[prev], A[prev] = A[i]][0] //swap   
            if (!A[i]) break // break if no current
            swaps++ //Incrememnt swap
        }
    }
    return swaps
}

//Return highest sum of hourglasses composes of 2D array
export const hourglassSum = (arr) => {
    let hourglassSums = [];
    if (typeof arr === "object" && arr.length === 6 && arr.map(i => i.length).reduce((p, n) => p + n) === 36) {

        for (let row = 0; row <= 3; row++) { //Hourglass is 3x3 
            for (let col = 0; col <= 3; col++) {
                let sum = 0;
                sum += arr[row][col]         // 1 - top left
                sum += arr[row][col + 1]     // 1 - top middle
                sum += arr[row][col + 2]     // 1 - top right
                sum += arr[row + 1][col + 1] // 1 - middle middle
                sum += arr[row + 2][col]     // 1 - bottom left
                sum += arr[row + 2][col + 1] // 1 - bottom middle
                sum += arr[row + 2][col + 2] // 1 - bottom right

                hourglassSums.push(sum);
            }
        }
    }

    return (hourglassSums.length > 0) ? Math.max(...hourglassSums) : 0;
}

// Given two strings, determine if they share a common substring. A substring may be as small as one character.
export const twoStrings = (str1, str2) => {
    let result = 'NO'
    str1.split('').map(letter => str2.includes(letter) ? result = 'YES' : null)
    return result
}
// Given array of toy prices A return maximum number of toys you can buy with budget K
export const maximumToys = (A, K) => {
    if (Math.min(...A) > K) return 0 //Return if cheapest toy is more expensive than budget
    let sum = 0;
    let sorted = A.sort((a, b) => a - b); //Sorting it will add smallest together first which will give us longest consec toys by default
    let maxToys = 0
    for (let i = 0; i < sorted.length; i++) { //Loop over sorted prices
        if (sorted[i] < K) { //if Price is less than K add it to sum
            sum += sorted[i]
            if (sum <= K) { //After adding to sum If sum is less than or eqal to K add a toy 
                maxToys++
            }
        }
    }
    return maxToys
}

// Return min number of deletions to create alternate characters
export const alternatingCharacters = (S) => {
    const array = S.split('')
    const As = array.filter(letter => letter === 'A').length
    const Bs = array.filter(letter => letter === 'B').length
    return !As ? Bs - 1 : !Bs ? As - 1 : Math.abs(As - Bs)
}

// Return min number of deletions to create alternate characters WITHOUT moving items only deleting in place
export const alternatingCharactersStatic = S => {
    const array = S.split('')
    let deletions = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] && array[i + 1] === array[i]) deletions++
    }
    return deletions
}

// Return number of pairs that can be made that difference = target k
export const pairs = (A, K) => {
    let counter = 0
    let keys = {}
    A.map(v => keys[v] ? keys[v]++ : keys[v] = 1) //Store values in obj
    for (let i = 1; i < A.length; i++) { //Loop over array starting at 1 to get next values
        const target = Math.abs(A[i] - K) // next - k = value we need to meet foal
        if (keys[target]) { //check if the value needed exists in obj
            counter++ //If yes we have a match increase count
        }
    }
    return counter
}

// Given an array of N Player objects, write a comparator that sorts them in order of decreasing score. If 2 or more players have the same score, sort those players alphabetically ascending by name. 
export const checker = A => {
    return A.sort((a, b) => {
        if (a.score === b.score) {
            return a.name - b.name
        }
        return a.score - b.score
    })
}



/** SECTION
 * ***************************
 * Additional algorithm practice from random sites
 * ***************************
*/

// return each charter in string with next in alphabet and cap all vowels
export const mutateString = S => {
    const alpha = "abcdefghijklmnopqrstuvwxyz".split('');
    const isVowel = letter => 'aeiouy'.includes(letter)
    const mutated = S.split('').map(letter => {
        const i = alpha.indexOf(letter)
        const next = i >= 0 ? alpha[(i >= 25 ? -1 : i) + 1] : letter
        return isVowel(next) ? next.toUpperCase() : next
    })
    return mutated.join('')
}

// Return longest word in sentence
export const longestWord = S => {
    const [...all] = S.split(' ')
    const simplify = word => word.replace(/[^\w\s]/gi, '')
    let longest = simplify(all[0])
    all.map(v => {
        const word = simplify(v)
        if (word.length > longest.length) {
            longest = word
        }
    })
    return longest
}

