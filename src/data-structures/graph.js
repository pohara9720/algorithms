/** SECTION
 * ***************************
 * Graphs
 * ***************************
*/

// REVIEW Adjacency Lists (stores just edges)
// NOTE Takes up less space, Faster to iterate over edges,slow to query
//NOTE array of array can represent a graph when working with nums with i === nodes and 1 and 5 being edges
const adjacencyArray = [
    [1, 5],// index 0 connects to 1 and 5
    [0, 2],// index 1 connects to 0 and 2
    [1, 3],// index 2 connects to 1 and 3
    [2, 4],// index 3 connects to 2 and 4
    [3, 5],// index 4 connects to 3 and 5
    [4, 0]// index 5 connects to 4 and 0
]
//NOTE If we're not working with numebers you can use an obj to store to graph with keys === nodes and value === edges
const adjacencyObj = {
    A: ['B', 'F'],//A connects to B and F
    B: ['A', 'C'],//B connects to A and C
    C: ['B', 'D'],//C connects to B and D
    D: ['C', 'E'],//D connects to C and E
    E: ['D', 'F'],//E connects to D and F
    F: ['E', 'A'],//F connects to E and A
}

// REVIEW Adjacency Matrix (stores everything including empty spaces)
// NOTE connections can be seen on x y axis 1 === connection 0 !== connection
// NOTE Quick to query, Alot of space, slower to iterate over edges
const adjacencyMatrix = [
    [0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0],
]

class Graph {
    constructor () {
        this.adjacencyList = {}
    }
    //Add new vertex to graph
    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = []
    }
    //Create edge between vertex 1 and vertex 2
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
        }
        else {
            console.log('Vertex doesnt exist')
        }
    }
    // Remove connection from vertex 1 and vertex 2
    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
        }
        else {
            console.log('Vertex doesnt exist')
        }
    }
    //Remove vertex and connections associated
    removeVertex(v) {
        if (this.adjacencyList[v]) {
            while (this.adjacencyList[v].length) { //Continue to remove edges from given vertex until they are gone
                const adjV = this.adjacencyList[v].pop() //last connection from vertex
                this.removeEdge(v, adjV) //remove edges from vertex and adjV
            }
            delete this.adjacencyList[v] //Remove key completely
        } else {
            console.log('Vertex doesnt exist')
        }
    }
    // Depth first search recursively
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const dfs = vertex => {
            if (!vertex || !this.adjacencyList[vertex]) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        }
        dfs(start)
        return result;
    }
    // Depth first search iteratively
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }
    // Breadth first search 
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);


            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

export const graph = new Graph()



