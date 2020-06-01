//Data Structures

/** SECTION
 * ***************************
 *  Basic Classes
 * ***************************
*/

//REVIEW Basic Class with instance methods
class Student {
    constructor (firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        this.scores = []
    }
    fullName() {
        return `Full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1
        return this.tardies >= 3 ? `You're Expelled` : `Has been late ${this.tardies} times`
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    average() {
        let sum = this.scores.reduce((a, b) => a + b)
        return sum / this.scores.length
    }
}

let student = new Student('John', 'Smith', 1999)
student.fullName()

//REVIEW Basic Class with class methods
class Point {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    static distance(a, b) {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return Math.hypot(dx, dy)
    }
}
//It doesnt make sense for the distance method to be on each instance of a point 
//Instead we add a class method to pass 2 instances and return the distance which is what we want
const p1 = new Point(5, 5)
const p2 = new Point(10, 10)
Point.distance(p1, p2)

//REVIEW Builder pattern - chain methods to build upon this and return
class User {
    constructor (name) {
        this.name = name
    }

    age(age) {
        this.age = age
        return this
    }

    dob(dateOfBirth) {
        this.dateOfBirth = dateOfBirth
        return this
    }

    occupation(occupation) {
        this.occupation = occupation
        return this
    }
}
//Chainable class that will build obj accordingly
const John = new User('John').age(12).occupation('Engineer')

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
//NOTE Takes value and creates node with a next func and prev fun that starts at null (TO BE USED IN DOUBLY LINKED LISTS)
class DLLNode {
    constructor (value) {
        this.value = value
        this.next = null
        this.prev = null
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

/** SECTION
 * ***************************
 *  Doubly Linked Lists
 * ***************************
*/


class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new DLLNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(value) {
        let newNode = new DLLNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count;
        let current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new DLLNode(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let removed = this.get(index)
        removed.prev.next = removed.next
        removed.next.prev = removed.prev
        removed.next = null
        removed.prev = null
        this.length--
        return removed
    }
}

export const DLL = new DoublyLinkedList()

/** SECTION
 * ***************************
 *  Stacks
 * ***************************
*/

// REVIEW Creating a stack by using an array
const stack = [] //Pushing adds to end of array and pop removes last which follows LIFO principle
stack.push('first')
stack.pop()
stack.push('two')
stack.pop()

//REVIEW Creating a stack using a SLL
class Stack {
    constructor () {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(value) { // similiar to shift and unshift from SLL we use the shift methods ecause they are constant time complextiy
        let newNode = new SLLNode(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size++;
    }
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

export const SLLStack = new Stack()

/** SECTION
 * ***************************
 *  Queues
 * ***************************
*/

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
        let node = new SLLNode(value)
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

/** SECTION
 * ***************************
 *  Trees
 * ***************************
*/

class TreeNode {
    constructor (value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }
    insert(value) {
        let node = new TreeNode(value);
        if (this.root === null) {
            this.root = node;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        if (!this.root) return false;
        let current = this.root
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}

export const tree = new BinarySearchTree()
