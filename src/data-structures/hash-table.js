/** SECTION
 * ***************************
 *  Hash Table (MAP)
 * ***************************
*/

// REVIEW  Hash function
// NOTE A way of turning a key into a valid array index
export const hashString = (key, arrayLen) => {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

//NOTE Hash functions will sometimes return the same index for different values (COLLISION)
//REVIEW HANDLING COLLISON

// REVIEW Seperate Chaining to prevent collisions (store same index in nested data structure ie: [4] => [[],[]])
export const seperateChaining = () => { }

// REVIEW Linear probing to prevent collisions (stores value in next available index if index returned is occupied)
export const linearProbing = () => { }

// REVIEW Hash Table implementation (Use MAP native to js this is for education purpose)

class HashTable {
    constructor (size) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        return hashString(key, this.keyMap.length)
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
}

export const hashTable = new HashTable(10);
