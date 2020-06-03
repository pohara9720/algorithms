/** SECTION
 * ***************************
 *  Tree Traversal
 * ***************************
*/

// NOTE These should be added to the binary search class as we will use it to search a tree
// Order changes based on when you visit or push the node to data array

//REVIEW Breadth First Search
export const breadthFirstSearch = () => {
    let data = []
    let queue = []
    let node = this.root
    queue.push(this.root)
    while (queue.length) {
        node = queue.shift()
        data.push(node.value)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return data
}


//REVIEW Depth First Search Preorder
export const depthFirstSearchPreorder = () => {
    let data = []
    let current = this.root
    const traverse = node => {
        data.push(node.value)
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
}

//REVIEW Depth First Search PostOrder
export const depthFirstSearchPostorder = () => {
    let data = []
    let current = this.root
    const traverse = node => {
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        data.push(node.value)
    }
    traverse(current)
    return data
}

// REVIEW Depth First Search InOrder
export const depthFirstSearchInOrder = () => {
    let data = []
    let current = this.root
    const traverse = node => {
        if (node.left) traverse(node.left)
        data.push(node.value)
        if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
}