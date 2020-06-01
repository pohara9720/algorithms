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