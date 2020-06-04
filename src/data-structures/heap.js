/** SECTION
 * ***************************
 *  Heaps
 * ***************************
*/

// REVIEW Heap 
// NOTE finding children from parent
// 2n + 1 => 1st child
// 2n + 2 => 2nd child
// NOTE finding parent from children
// (n - 1) / 2 floored

class MaxBinaryHeap {
    constructor () {
        this.values = []
    }
    // Compare with parent and swap if greater
    bubble() {
        let index = this.values.length - 1
        const item = this.values[index]
        while (index > 0) { //stop loop if new item has reached top of heap
            let parentIdx = Math.floor((index - 1) / 2)
            let parent = this.values[parentIdx]
            if (parent >= item) break
            //Swap values if item is greater than parent
            this.values[parentIdx] = item
            this.values[index] = parent
            index = parentIdx
        }
    }
    //Add value into heap and place it properly
    insert(value) {
        this.values.push(value)
        this.bubble()
    }
    // Remove root from heap and rearrange values
    extractRoot() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length) {
            this.values[0] = end  //Swap root with last element
            this.sink()
        }
        return max
    }
    sink() {
        let index = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIdx = 2 * index + 1
            let rightChildIdx = 2 * index + 2
            let leftChild
            let rightChild
            let swap = null
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if ((!swap && rightChild > element) || (swap && rightChild > leftChild)) {
                    swap = rightChildIdx
                }
            }
            if (!swap) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

export const heap = new MaxBinaryHeap()

class QueueNode {
    constructor (val, priority) {
        this.val = val
        this.priority = priority
    }
}

//REVIEW Priority Queue
class PriorityQueue {
    constructor () {
        this.values = [];
    }
    //Add to queue
    enqueue(val, priority) {
        let newNode = new QueueNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    //Return lowest priority
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

export const ER = new PriorityQueue()
ER.enqueue('cold', 1)
ER.enqueue('shot', 5)
ER.enqueue('fever', 2)
