/** SECTION
 * ***************************
 *  Queues
 * ***************************
*/

class QueueNode {
    constructor (value) {
        this.value = value
        this.next = null
    }
}


// REVIEW Creating a queue by using an array
const q = [] //adding them in reverse and then popping is faster than shifting first and reindexing the array
q.unshift(1)
q.unshift(2)
q.unshift(3)
q.pop()

// REVIEW Creating a queue by using a SLL
class Queue {
    constructor () {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(value) {
        let node = new QueueNode(value)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        return this.size++
    }
    dequeue() {
        if (!this.first) return null
        let temp = this.first
        if (this.first === this.last) this.last = null
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

export const queue = new Queue()