
/** SECTION
 * ***************************
 *  Trees
 * ***************************
*/

import {
    breadthFirstSearch,
    depthFirstSearchPreorder,
    depthFirstSearchPostorder,
    depthFirstSearchInOrder
} from "./tree-traversal";

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
    BFS() {
        breadthFirstSearch()
    }
    DFSPreOrder() {
        depthFirstSearchPreorder()
    }
    DFSPostOrder() {
        depthFirstSearchPostorder()
    }
    DFSInOrder() {
        depthFirstSearchInOrder()
    }
}

export const tree = new BinarySearchTree()


