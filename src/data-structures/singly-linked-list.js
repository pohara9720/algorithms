/** SECTION
 * ***************************
 *  Singly Linked Lists
 * ***************************
*/

//NOTE Takes value and creates node with a next func that starts at null (TO BE USED IN SINGLY LINKED LISTS)
class SLLNode {
    constructor (value) {
        this.value = value
        this.next = null
    }
}


class SinglyLinkedList {
    constructor () {
        this.length = 0
        this.head = null
        this.tail = null
    }
    //Add value to end of list
    push(value) {
        //Create new item in list
        const node = new SLLNode(value)
        // If theres no head or empty list then set head and tail to new node
        // Otherwise set next to new node and tail to new node so next will be null
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        // Increase list length
        this.length++
        return this
    }
    //Remove value from end of list
    pop() {
        if (this.length === 0) return undefined
        let current = this.head
        let newTail = current
        //While there is a next value (until its the end of list)
        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail //Set tail to new tail
        this.tail.next = null //This severs value from list officially
        this.length-- // Update the length
        //Reset array if you pop last value
        if (this.length === 0) {
            this.head === null
            this.tail === null
        }
        return current
    }
    // Remove value from start of list
    shift() {
        if (this.length === 0) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) this.tail = null
        return currentHead
    }
    // Add a new node to start of list
    unshift(value) {
        const node = new SLLNode(value)
        //Set head and tail to new node if empty
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            //Swap heads out for new value
            node.next = this.head
            this.head = node
        }
        //update length
        this.length++
        return this
    }
    // Get value from list by position
    get(index) {
        //If index is invalue return null
        if (index >= this.length || index < 0) return null
        let count = 0
        let current = this.head
        //Until count === index being searched incremenet counter and interate through list with next.
        while (count !== index) {
            current = current.next
            count++
        }
        //Return value after count === index and has been found
        return current
    }
    //Update value at given position
    set(value, index) {
        let node = this.get(index)
        if (node) {
            node.value = value
            return true
        }
        return false
    }
    //Insert node at given position
    insert(value, index) {
        //If index is invalue return null
        if (index > this.length || index < 0) return false
        if (index === this.length) return !!this.push(value)
        if (index === 0) return !!this.unshift(value)
        //Create new node from value
        let node = new SLLNode(value)
        //Get item just before index being searched for
        const prev = this.get(index - 1)
        let tempNext = prev.next // Store next in variable to reconnect later
        prev.next = node
        node.next = tempNext // Reassign previous next to reconnect items correctly
        this.length++ //Update length
        return true
    }
    //Remove node from given position
    remove(index) {
        if (index >= this.length || index < 0) return null
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        // Get item just before index being searched for
        let prevNode = this.get(index - 1)
        let removed = prevNode.next
        prevNode.next = removed.next
        this.length--
        return removed
    }
    //Reverse linked list in place 
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    //Return list as array
    toArray() {
        let arr = [];
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

}

export const SLL = new SinglyLinkedList()