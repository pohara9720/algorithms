/** SECTION
 * ***************************
 *  Stacks
 * ***************************
*/

class StackNode {
    constructor (value) {
        this.value = value
        this.next = null
    }
}


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
        let newNode = new StackNode(value);
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