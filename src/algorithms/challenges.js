//Algorithms
/** SECTION
 * ***************************
 * Additional algorithm practice from https://app.codility.com/programmers/lessons
 * ***************************
*/


// FIND BIGGEST BINARY GAP 
export const binaryGap = (N) => {
    const bin = (N >>> 0).toString(2)
    const array = bin.split('')
    const lengths = []
    let length = null
    array.map(b => {
        b === '0' ?
            length++
            :
            (
                lengths.push(length),
                length = 0
            )
    })
    return Math.max(...lengths)

}

//Rotate indexes by 1 to the right k number of times (Recursive)
export const cyclicRotation = (a, k) => {
    let result = [];
    if (a.length === 1 || k === 0) return a

    a.map((val, i) => {
        const newPos = (i + k) % a.length;
        result[newPos] = val;
    })

    return result;
}

// Find value that occurs in odd number of elements.
export const oddOccurencesInArray = (A) => {
    let agg = 0;
    A.map(val => agg ^= val)
    return agg;
}

// A small frog wants to get to the other side of the road.
// The frog is currently located at position X and wants to get to a position greater than or equal to Y.
// The small frog always jumps a fixed distance, D.
// Count the minimal number of jumps that the small frog must perform to reach its target.
export const frogJump = (X, Y, Z) => {
    if (X === Y) {
        return 0;
    } else if (Z >= (Y - X)) {
        return 1;
    } else {
        let jumps = Math.floor((Y - X) / Z);
        jumps += ((Y - X) % Z > 0) ? 1 : 0;
        return jumps;
    }
}

// Find missing number in sequence 
export const permMissingElement = (A) => {
    A.sort((a, b) => a - b)
    let next = 1;
    let i = 0;
    while (next === A[i]) {
        next++;
        i++;
    }
    return next;
}

// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
export const tapeEquilibrium = (A) => {
    let lower = [A.length];
    let upper = [A.length];

    lower.push(0);

    for (let i = 0; i < A.length; i++) {
        let iRev = A.length - i - 1;
        if (i === 0) {
            lower[i] = 0;
        } else {
            lower[i] = lower[i - 1] + A[i - 1];
        }

        if (iRev === A.length - 1) {
            upper[iRev] = A[iRev];
        } else {
            upper[iRev] = upper[iRev + 1] + A[iRev];
        }
    }

    let result = Math.abs(lower[1] - upper[1]);

    for (let i = 2; i < lower.length; i++) {
        let diff = Math.abs(lower[i] - upper[i]);
        if (diff < result) {
            result = diff;
        }
    }

    return result;
}

//Decide whether array is permutation or not 
export const permCheck = (A) => {
    let control = new Array(A.length);
    let left = 0;

    for (let i = 0; i < A.length; i++) {
        if (i === 0) {
            left = A[i];
        }

        left = left < A[i] ? A[i] : left;
    }

    if (left !== A.length) {
        return 0;
    }

    for (let i = 0; i < A.length; i++) {
        if (!control[A[i] - 1]) {
            control[A[i] - 1] = true;
            left--;
        }
    }
    return left === 0 ? 1 : 0;
}

// Find the earliest time when a frog can jump to the other side of a river.
export const frogRiverOne = (X, A) => {
    let leaves = [];
    let i = 0;
    let result = -1;

    for (i = 0; i < A.length; i++) {
        if (typeof leaves[A[i]] == 'undefined') {
            leaves[A[i]] = i;
        }
    }

    if (leaves.length <= X) {
        return -1;
    }

    for (i = 1; i <= X; i++) {
        if (typeof leaves[i] == 'undefined') {
            return -1;
        } else {
            result = Math.max(result, leaves[i]);
        }
    }

    return result;
}

// Count the number of passing cars on the road.
export const passingCars = (A) => {
    let east = new Array(A.length);
    let west = new Array(A.length);
    let LIMIT = 1000000000;
    let totalPasses = 0;
    let lastEast = 0;

    for (let i = 0; i < A.length; i++) {
        let iRev = A.length - 1 - i;

        let goingEast = A[i] === 0 ? 1 : 0;
        let goingWestRev = A[iRev] === 0 ? 0 : 1;

        if (i === 0) {
            east[i] = goingEast;
        } else {
            east[i] = east[i - 1] + goingEast;
        }

        if (iRev === A.length - 1) {
            west[iRev] = goingWestRev;
        } else {
            west[iRev] = west[iRev + 1] + goingWestRev;
        }
    }

    for (let i = 0; i < east.length; i++) {
        if (east[i] > lastEast) {
            totalPasses += west[i];
            lastEast = east[i];
        }
    }

    return totalPasses > LIMIT ? -1 : totalPasses;
}

// Compute number of distinct values in an array.
export const distinct = A => {
    if (A.length === 0) {
        return 0;
    } else if (A.length === 1) {
        return 1;
    }

    let i = 0;
    let counter = 1;

    A.sort((a, b) => a - b)

    for (i = 1; i < A.length; i++) {
        if (A[i] !== A[i - 1]) {
            counter++;
        }
    }

    return counter;
}

// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
export const maxProductOfThree = (A) => {
    A.sort((a, b) => Math.abs(b) - Math.abs(a))

    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            positiveCount++;
        } else if (A[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    if (positiveCount === 0) {
        if (zeroCount === 0) {
            return A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
        } else {
            return 0;
        }
    } else {
        if (negativeCount === 1) {
            let counter = 0;
            let max = 1;

            for (let i = 0; i < A.length; i++) {
                if (A[i] > 0) {
                    counter++;
                    max *= A[i];
                    if (counter === 3) {
                        return max;
                    }
                }
            }
        } else {
            negativeCount = 0;
            let max = 1;
            for (let i = 0; i < A.length; i++) {
                if (A[i] < 0) negativeCount++;
                if (i < 2) {
                    max *= A[i];
                } else {
                    if (max < 0 && A[i] < 0) {
                        max *= A[i];
                        return max;
                    } else if (max > 0 && A[i] > 0) {
                        max *= A[i];
                        return max;
                    }
                }
            }
        }
    }
}

// Determine whether a triangle can be built from a given set of edges.
export const triangle = (A) => {
    // Helpers - should be seperate not contained but will keep here for this solution
    const validate = (val0, val1, val2) => {
        let result = true;
        result = result && (val0 + val1 > val2);
        result = result && (val0 + val2 > val1);
        result = result && (val1 + val2 > val0);
        return result;
    }
    if (A.length < 3) return 0

    A.sort((a, b) => a - b)
    for (var i = 2; i < A.length; i++) {
        if (validate(A[i - 2], A[i - 1], A[i])) {
            return 1;
        }
    }
    return 0;
}

// Determine whether a given string of parentheses (multiple types) is properly nested.
export const brackets = (S) => {
    // Helpers - should be seperate not contained but will keep here for this solution
    const isOpener = (char) => char === '{' || char === '[' || char === '(' ? true : false
    const checkCloser = (opener, closer) => {
        if (opener === '(' && closer === ')') return true;
        if (opener === '[' && closer === ']') return true;
        if (opener === '{' && closer === '}') return true;

        return false;
    }

    let i = 0;
    let stack = [];

    if (S.length % 2 === 1) {
        return 0;
    }

    for (i = 0; i < S.length; i++) {
        let char = S.charAt(i);
        if (isOpener(char)) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return 0;
            } else {
                let lastChar = stack.pop();
                if (!checkCloser(lastChar, char)) {
                    return 0;
                }
            }
        }
    }

    if (stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}

// N voracious fish are moving along a river. Calculate how many fish are alive.
export const fish = (A, B) => {
    let i = 1;
    let fishs = [];
    fishs.push(0);

    while (i < A.length) {
        let curFish = i;
        let lastFish = fishs.pop();
        if (B[lastFish] === 0 || B[curFish] === 1) {
            fishs.push(lastFish);
            fishs.push(curFish);
            i++;
        } else if (B[lastFish] === 1 && B[curFish] === 0) {
            if (A[lastFish] > A[curFish]) {
                fishs.push(lastFish);
                i++;
            }

            if (fishs.length === 0) {
                fishs.push(curFish);
                i++;
            }
        }
    }

    return fishs.length;
}

// Determine whether a given string of parentheses (single type) is properly nested.
export const nesting = (S) => {
    if (S.length === 0) return 1

    let str = S.split('');
    let control = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            control++;
        } else {
            control--;
        }

        if (control < 0) {
            return 0;
        }
    }

    if (control === 0) {
        return 1;
    } else {
        return 0;
    }
}

// Cover "Manhattan skyline" using the minimum number of rectangles.
export const stonewall = (H) => {
    let counter = 0;
    let height = 0;
    let blocks = [];
    let i = 0;

    while (i < H.length) {
        if (H[i] > height) {
            let newBlock = H[i] - height;
            blocks.push(newBlock);
            height += newBlock;
            counter++;
            i++;
        } else if (H[i] < height) {
            let lastBlock = blocks.pop();
            height -= lastBlock;
        } else {
            i++;
        }
    }

    return counter;
}

// Find an index of an array such that its value occurs at more than half of indices in the array.
export const dominator = (A) => {
    let stack = [];
    let i = 0;
    let arr = JSON.parse(JSON.stringify(A));

    arr.sort((a, b) => a - b)

    if (arr.length === 0) {
        return -1;
    } else {
        stack.push(arr[0]);
    }

    for (i = 1; i < arr.length; i++) {
        if (stack.length === 0) {
            stack.push(arr[i]);
        } else {
            let lastItem = stack.pop();
            if (lastItem === arr[i]) {
                stack.push(lastItem);
                stack.push(arr[i]);
            }
        }
    }

    if (stack.length === 0) {
        return -1;
    }

    let candidate = stack[0];
    let counter = 0;
    let pos = -1;

    for (i = 0; i < A.length; i++) {
        if (A[i] === candidate) {
            counter++;
            pos = i;
        }
    }

    if (counter > Math.floor(A.length / 2)) {
        return pos;
    } else {
        return -1;
    }
}

// Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
export const equiLeader = (A) => {
    let stack = [];
    let arr = JSON.parse(JSON.stringify(A));
    let i = 0;

    if (A.length < 2) {
        return 0;
    }

    arr.sort((a, b) => a - b)
    stack.push(arr[0]);

    for (i = 1; i < arr.length; i++) {
        if (stack.length === 0) {
            stack.push(arr[i]);
        } else {
            let last = stack.pop();

            if (last === arr[i]) {
                stack.push(last);
                stack.push(arr[i]);
            }
        }
    }

    if (stack.length === 0) {
        return 0;
    }

    let candidate = stack[0];
    let counter = 0;
    let pos = [];
    let sum = [];
    for (i = 0; i < A.length; i++) {
        if (A[i] === candidate) {
            counter++;
            pos.push(i);
        }

        sum.push(counter);
    }

    let equi = [];
    if (counter <= Math.floor(A.length / 2)) {
        return 0;
    } else {
        for (i = 0; i < sum.length; i++) {
            let leftMin = Math.floor((i + 1) / 2);
            let rightMin = Math.floor((sum.length - i - 1) / 2);

            if (sum[i] > leftMin && (counter - sum[i]) > rightMin) {
                equi.push(i);
            }
        }
    }

    return equi.length;
}

// Given a log of stock prices compute the maximum possible earning.
export const maxProfit = (A) => {
    if (A.length < 2) return 0

    let buy = [];
    let sell = [];
    let profit = 0;
    let i = 0;

    buy[0] = A[0];
    sell[A.length - 1] = A[A.length - 1];

    for (i = 0; i < A.length; i++) {
        let iRev = A.length - i - 1;

        if (i > 0) {
            buy[i] = Math.min(buy[i - 1], A[i]);
        }

        if (iRev < A.length - 1) {
            sell[iRev] = Math.max(sell[iRev + 1], A[iRev]);
        }
    }

    for (i = 0; i < sell.length; i++) {
        profit = Math.max(profit, sell[i] - buy[i]);
    }

    return profit;
}

// Find a maximum sum of a compact subsequence of array elements.
export const maxSliceSum = (A) => {
    if (A.length === 1) return A[0]

    let maxSum = -Infinity;
    let sums = [];
    let i = 0;

    for (i = 0; i < A.length; i++) {
        if (i === 0) {
            sums[i] = A[i];
        } else {
            sums[i] = Math.max(sums[i - 1] + A[i], A[i]);
        }

        maxSum = Math.max(sums[i], maxSum);
    }

    return maxSum;
}

// Count factors of given number n.
export const countFactors = (N) => {
    let counter = 0;
    let limit = Math.floor(Math.sqrt(N));
    for (let i = 1; i <= limit; i++) {
        if (N % i === 0) {
            counter++;
            let factor = N / i;
            if (factor !== i) {
                counter++;
            }
        }
    }

    return counter;
}

// Find the minimal perimeter of any rectangle whose area equals N.
export const minPerimeterRectangle = N => {
    let limit = Math.floor(Math.sqrt(N));
    let i = 0;
    let minPerimeter = Infinity;
    for (i = 1; i <= limit; i++) {
        if (N % i === 0) {
            let side = N / i;
            let perimeter = 2 * (side + i);
            if (perimeter < minPerimeter) {
                minPerimeter = perimeter;
            }
        }
    }

    return minPerimeter;
}

// There are N chocolates in a circle. Count the number of chocolates you will eat.
export const chocolateByNumbers = (N, M) => {
    // Helpers - should be seperate not contained but will keep here for this solution
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b)
    if (N === 1) return 1
    if (M === 1) return N
    return N / gcd(N, M);
}

// Compute number of distinct absolute values of sorted array elements.
export const absDistinct = (A) => {
    let left = 0;
    let right = left;
    let i = 0;
    let total = 1;
    let lastVal = 0;
    let newVal = 0;

    for (i = 0; i < A.length; i++) {
        if (A[i] >= 0) {
            left = i;
            right = left;
            break;
        } else {
            A[i] *= -1;
        }
    }

    if (A.length === 1) {
        return 1;
    }

    lastVal = A[left];
    newVal = lastVal;

    while (left >= 0 && right <= A.length - 1) {
        if (A[left] !== A[right] && lastVal !== newVal) {
            total++;
        }

        if (left > 0 && A[left] < A[right]) {
            lastVal = A[left];
            left--;
            newVal = A[left];
        } else if (right < A.length - 1 && A[right] < A[left]) {
            lastVal = A[right];
            right++;
            newVal = A[right];
        } else if (left > 0) {
            lastVal = A[left];
            left--;
            newVal = A[left];
        } else if (right < A.length - 1) {
            lastVal = A[right];
            right++;
            newVal = A[right];
        } else {
            lastVal = A[left];
            left--;
        }
    }

    return total;
}

// Count the number of distinct slices (containing only unique numbers).
export const countDistinctSlices = (M, A) => {
    const LIMIT = 1000000000;

    let lastPos = [];
    let i = 0;
    let count = 0;
    let start = 0;

    if (A.length === 1) return 1

    for (i = 0; i <= M; i++) {
        lastPos[i] = -1;
    }

    for (i = 0; i < A.length; i++) {
        let item = A[i];

        if (lastPos[item] + 1 > start) {
            start = lastPos[item] + 1;
        }

        lastPos[item] = i;
        count += i - start + 1;

        if (count > LIMIT) break;
    }

    return count > LIMIT ? LIMIT : count;
}

// Count the number of triangles that can be built from a given set of edges.
export const countTriangles = (A) => {
    const check = (arr, base, mid, end) => arr[base] + arr[mid] > arr[end]

    let start = 0;
    let mid = 1;
    let end = 2;
    let count = 0;

    if (A.length < 3) return 0

    A.sort((a, b) => a - b)

    for (start = 0; start < A.length - 2; start++) {
        for (mid = start + 1; mid < A.length - 1; mid++) {
            end = mid + 1;
            while (end < A.length && check(A, start, mid, end)) {
                end++;
            }
            count += end - mid - 1;
        }
    }

    return count;
}

// Find a maximal set of non-overlapping segments.
export const maxNonOverlappingSegments = (A, B) => {
    let i = 0;
    let count = 1;
    let last = 0;

    if (A.length === 0) return 0

    last = B[0];

    for (i = 1; i < A.length; i++) {
        if (A[i] > last) {
            count++;
            last = B[i];
        }
    }

    return count;
}

// Tie adjacent ropes to achieve the maximum number of ropes of length >= K.
export const tieRopes = (K, A) => {
    let count = 0;
    let size = 0;

    A.map((val, i) => {
        size += val
        if (size >= K) {
            count++;
            size = 0;
        }
    })

    return count;
}

// Find a symmetry point of a string, if any.
export const StrSymmetryPoint = (S) => {
    if (S.length % 2 === 0) return -1

    let mid = (S.length - 1) / 2;
    let i = 0;

    for (i = 1; i <= mid; i++) {
        if (S.charAt(mid - i) != S.charAt(mid + i)) {
            return -1;
        }
    }

    return mid;
}

// Compute the height of a binary tree.
export const treeHeight = (T) => {
    // Helpers - should be seperate not contained but will keep here for this solution
    const checkTree = node => {
        if (!node) return -1
        const heightLeft = checkTree(node.l);
        const heightRight = checkTree(node.r);
        return 1 + Math.max(heightLeft, heightRight);
    }

    return checkTree(T);
}

//Given array of 2 strings return matching values (avoiding .includes removes the O(n^2) complexity)
export const findIntersection = array => {
    let count1 = {}
    let results = []
    const [right, left] = array
    right.split(',').forEach(x => count1[x] = 1)
    left.split(',').map(x => count1[x] ? results.push(x) : null)
    return results
}

// Given array of ints return lowest possible integer that does no occur in array (Greater than zero)
export const missingInteger = array => {
    let min = 1
    array.sort((a, b) => a - b)
    if (array[array.length - 1] < 0) return 1
    array.map((_, i) => array[i] > -1 && array[i] === min ? min++ : null)
    return min
}


// Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
export const maxCounters = (N, A) => {
    let j;
    let i;
    let len = A.length;
    let lastMax = 0;
    let max = 0;
    let counters = new Array(N);
    for (j = 0; j < N; j++) counters[j] = 0;
    let n1 = N + 1;

    for (j = 0; j < len; j++) {
        if (A[j] < n1) {
            i = A[j] - 1;
            if (counters[i] < lastMax) counters[i] = lastMax;
            counters[i]++;
            if (max < counters[i]) max = counters[i];
        } else {
            lastMax = max;
        }
    }

    for (j = 0; j < N; j++) {
        if (counters[j] < lastMax) counters[j] = lastMax;
    }

    return counters;
}

// given 2 numbers return a range array
export const range = (x, y) => {
    let range = []
    for (let i = x; i <= y; i++) {
        range.push(i);
    }
    return range
}

// Compute number of integers divisible by k in range[a..b].
export const countDiv = (A, B, K) => {
    const offset = A % K === 0 ? 1 : 0;
    const b = Math.floor(B / K)
    const a = Math.floor(A / K)
    return b - a + offset;
}

// Find the minimal nucleotide from a range of sequence DNA.
export const genomicRangeQuery = (S, P, Q) => {
    const genMap = {
        A: 1,
        C: 2,
        G: 3,
        T: 4,
    }
    const sStr = 'ACGT'
    const res = []
    for (let i = 0; i < P.length; i++) {
        const start = P[i]
        const end = Q[i] + 1
        const slice = S.slice(start, end)
        let min
        for (let i = 0; i < 4; i++) {
            const char = sStr[i]
            if (slice.indexOf(char) > -1) {
                min = genMap[char]
                break
            }
        }
        res.push(min)
    }
    return res
}

// Find the minimal average of any slice containing at least two elements.
export const minAvgTwoSlice = (A) => {
    let start = 0;
    let currentSum = A[0] + A[1];
    let minAvgSlice = currentSum / 2;
    for (let i = 2; i < A.length; i++) {
        currentSum += A[i];
        let newAvg = currentSum / 3;
        if (newAvg < minAvgSlice) {
            minAvgSlice = newAvg;
            start = i - 2;
        }
        currentSum -= A[i - 2];
        newAvg = currentSum / 2;
        if (newAvg < minAvgSlice) {
            minAvgSlice = newAvg;
            start = i - 1;
        }
    }
    return start;
}

//Compute the number of intersections in a sequence of discs.
export const numberOfDiscIntersections = (A) => {
    const numPoints = A.length;
    let numIntersections = 0;
    let startAndEndPoints = A.map((currentDisc, i) => [i - A[i], i + A[i]]);

    // [[5,5], [0,4], [-4, 6]] => [[-4, 6], [0,4], [5,5]]
    startAndEndPoints = startAndEndPoints.sort((a, b) => a[0] - b[0]);

    for (let j = 0; j < numPoints; j++) {
        const discPoint = startAndEndPoints[j];
        const discEndPoint = discPoint[1];
        for (let k = j + 1; k < numPoints; k++) {
            const comparisonDisc = startAndEndPoints[k];
            const comparisonStartPoint = comparisonDisc[0];
            if (comparisonStartPoint <= discEndPoint) {
                // comparison disc is within this disc's area
                numIntersections++;
                if (numIntersections > 10000000) {
                    return -1;
                }
            } else {
                // all other discs will be further right than this disc
                break;
            }
        }
    }
    return numIntersections;
}

// Find the maximal sum of any double slice.
export const maxDoubleSliceSum = (A) => {
    let maxsum = 0;
    let max_end_at = Array(A.length);
    let max_start_at = Array(A.length);
    max_end_at[0] = max_start_at[A.length - 1] = max_end_at[A.length - 1] = max_start_at[0] = 0;
    let { max } = Math;
    for (let i = 1; i < A.length - 1; i++) {
        max_end_at[i] = max(0, max_end_at[i - 1] + A[i]);
    }

    for (let n = A.length - 2; n > 0; n--) {
        max_start_at[n] = max(0, max_start_at[n + 1] + A[n]);
    }

    for (let m = 1; m < A.length - 1; m++) {
        maxsum = max(maxsum, max_end_at[m - 1] + max_start_at[m + 1]);
    }
    return maxsum;
}

// Find the maximum number of flags that can be set on mountain peaks.
export const flags = (A) => {
    if (A.length <= 2) return 0;
    let peaks = [];
    let size = 0;
    for (let i = 1; i < A.length - 1; ++i) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks[size] = i;
            ++size;
        }
    }

    if (size <= 2) return size;

    let maxFlag = Math.floor(Math.sqrt(peaks[size - 1] - peaks[0]) + 1);

    for (let i = maxFlag; i >= 2; --i) {
        let count = 1;
        let curPos = peaks[0];
        for (let j = 1; j < size; ++j) {
            if (curPos + i <= peaks[j]) {
                curPos = peaks[j];
                ++count;
            }
        }
        if (count >= i) return i;
    }

    return 2;
}

// Divide an array into the maximum number of same-sized blocks, each of which should contain an index P such that A[P - 1] < A[P] > A[P + 1].
export const peaks = (A) => {
    let n = A.length;
    let peaks = [];
    for (let i = 1; i < n - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    let max = 0;
    for (let i = 1; i < n; i++) {
        if ((n % i) == 0) {
            let bi = 0;
            let block = n / i;
            for (let ind in peaks) {
                let p = peaks[ind]
                if (bi * block <= p && p < (bi + 1) * block) {
                    bi++;
                }
            }
            if (bi == i) {
                max = i;
            }
        }
    }
    return max;
}

//Calculate the number of elements of an array that are not divisors of each element.
export const countNonDivisble = (A) => {
    let result = [];
    let max = 0;
    let i = 0;
    let k = 0;
    let arr = JSON.parse(JSON.stringify(A));
    arr.sort((a, b) => a - b);

    max = arr[arr.length - 1];
    let divs = [];
    let totals = [];

    for (i = 0; i <= max; i++) {
        divs[i] = false;
        totals[i] = 0;
    }

    for (i = 0; i < A.length; i++) {
        let total = 0;
        let j = 0;


        divs[A[i]] = true;
        totals[A[i]]++;
    }

    for (i = 0; i < A.length; i++) {
        for (k = 2; A[i] * k <= max; k++) {
            if (divs[A[i] * k]) {
                totals[A[i] * k]++;
            }
        }
    }

    for (i = 0; i < A.length; i++) {
        result.push(A.length - totals[A[i]]);
    }

    return result;
}

// Count the semiprime numbers in the given range [a..b]
export const countSemiPrimes = (N, P, Q) => {

    let i = 0;
    let primes = [];
    let subprimes = [];
    let count = [];
    let result = [];

    primes[0] = false;
    primes[1] = false;

    subprimes[0] = false;
    subprimes[1] = false;

    for (i = 2; i < N; i++) {
        primes[i] = true;
        subprimes[i] = false;
    }

    for (i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
        for (let j = i; j * i <= N; j++) {
            primes[j * i] = false;
            if (primes[i] && primes[j]) {
                subprimes[j * i] = true;
            } else {
                subprimes[j * i] = false;
            }
        }
    }

    for (i = 0; i < subprimes.length; i++) {
        if (i === 0) {
            count[i] = 0;
        } else {
            count[i] = count[i - 1];
        }

        if (subprimes[i]) {
            count[i]++;
        }
    }

    for (i = 0; i < P.length; i++) {
        result.push(count[Q[i]] - count[P[i] - 1]);
    }

    return result;
}

// Check whether two numbers have the same prime divisors.
export const commonPrimeDivisors = (A, B) => {
    // Helpers - should be seperate not contained but will keep here for this solution
    const gcd = (a, b) => {
        if (a % b === 0) {
            return b;
        } else {
            return gcd(b, a % b);
        }
    }

    const check = (a, b) => {
        var gcdA = gcd(a, b);

        if (gcdA === a) {
            return true;
        } else if (gcdA === 1) {
            return false;
        } else {
            a /= gcdA;
            gcdA = gcd(a, gcdA);
            return check(Math.max(a, gcdA), Math.min(a, gcdA));
        }
    }


    let count = 0;
    let i = 0;

    for (i = 0; i < A.length; i++) {
        let big = Math.max(A[i], B[i]);
        let small = Math.min(A[i], B[i]);
        let div = gcd(big, small);

        if (big === small) {
            count++;
        } else if (check(big, div) && check(small, div)) {
            count++;
        }
    }

    return count;
}

// Count the number of different ways of climbing to the top of a ladder.
export const ladder = (A, B) => {
    let i = 0;
    let result = [];
    let max = 0;
    let steps = [];
    let maxB = 0;

    steps[0] = 1;
    steps[1] = 1;

    for (i = 0; i < A.length; i++) {
        max = Math.max(max, A[i]);
        maxB = Math.max(maxB, B[i]);
    }

    i = 1;
    while (i++ <= max) {
        steps[i] = (steps[i - 1] + steps[i - 2]) % Math.pow(2, maxB);
    }

    for (i = 0; i < A.length; i++) {
        let div = steps[A[i]] & (Math.pow(2, B[i]) - 1);
        result.push(div);
    }

    return result;
}

// Count the minimum number of jumps required for a frog to get to the other side of a river.
export const fibFrog = (A) => {
    let fib = [];
    let N = A.length + 1;
    let i = 1;
    let steps = [];
    let arr = [];

    arr[0] = 1;
    for (i = 1; i <= A.length; i++) {
        arr[i] = A[i - 1];
    }

    if (N < 3) {
        return 1;
    }

    fib[0] = 0;
    fib[1] = 1;

    i = 1;

    while (fib[i++] < N) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    steps[0] = 1;
    for (i = 1; i <= N; i++) {
        steps[i] = 0;
    }

    let base = 0;
    i = 2;

    let result = -1;

    while (i < fib.length && base <= N) {
        let nextPos = base + fib[i];
        if (steps[base] === 0) {
            base++;
        } else if (nextPos > N) {
            base++;
            i = 2;
        } else {
            if (nextPos === N) {
                if (base === 0) {
                    return 1;
                } else {
                    if (result < 0) {
                        result = steps[base] + 1;
                    } else {
                        result = Math.min(result, steps[base] + 1);
                    }
                }
            } else if (arr[nextPos] === 1) {
                if (steps[nextPos] === 0) {
                    if (base === 0) {
                        steps[nextPos] = 1;
                    } else {
                        steps[nextPos] = steps[base] + 1;
                    }
                } else {
                    steps[nextPos] = Math.min(steps[nextPos], steps[base] + 1);
                }
            }

            i++;
        }

    }

    return result;
}

// Divide array A into K blocks and minimize the largest sum of any block.
export const minMaxDivision = (K, M, A) => {
    // Helpers - should be seperate not contained but will keep here for this solution
    const neededBlocks = (arr, maxValue) => {
        let count = 1;
        let sum = arr[0];

        for (let j = 1; j < arr.length; j++) {
            if (sum + arr[j] > maxValue) {
                sum = arr[j];
                count++;
            } else {
                sum += arr[j];
            }
        }

        return count;
    }

    let min = 0;
    let max = 0;
    let mid = 0;
    let i = 0;

    for (i = 0; i < A.length; i++) {
        max += A[i];
        min = Math.max(min, A[i]);
    }

    if (K === 1) {
        return max;
    } else if (K >= A.length) {
        return min;
    }

    while (min <= max) {
        let temp = mid;
        mid = Math.floor((max + min) / 2);

        if (mid === temp) {
            break;
        }

        let blocks = neededBlocks(A, mid);

        if (blocks > K) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }

    return max;
}

// Count the minimum number of nails that allow a series of planks to be nailed.
export const nailingPlanks = (A, B, C) => {
    // Helpers - should be seperate not contained but will keep here for this solution
    const allNailed = (arrA, arrB, totalNails) => {
        for (var i = 0; i < arrA.length; i++) {
            if (totalNails[arrA[i] - 1] === totalNails[arrB[i]]) {
                return false;
            }
        }

        return true;
    }

    let maxB = 0;
    let min = 0;
    let max = C.length;
    let atLeastOne = false;
    let i = 0;
    let totalNails = [];

    if (C.length === 1) {
        if (A[0] <= C[0] && C[0] <= B[0]) {
            return 1;
        } else {
            return -1;
        }
    }

    for (i = 0; i < A.length; i++) {
        maxB = Math.max(maxB, B[i]);
    }

    for (i = 0; i <= maxB; i++) {
        totalNails[i] = 0;
    }

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        for (i = 0; i < totalNails.length; i++) {
            totalNails[i] = 0;
        }

        for (i = 0; i < mid; i++) {
            totalNails[C[i]] = 1;
        }

        for (i = 1; i < totalNails.length; i++) {
            totalNails[i] += totalNails[i - 1];
        }

        let result = allNailed(A, B, totalNails);

        if (result) {
            atLeastOne = true;
            if (max === mid) {
                break;
            }

            max = mid;
        } else {
            min = mid + 1;
        }
    }

    if (!atLeastOne) {
        return -1;
    } else {
        return min;
    }
}

// Find the minimal absolute value of a sum of two elements.
export const minAbsSumOfTwo = (A) => {
    let positives = [];
    let negatives = [];
    let i = 0;
    let min = 0;

    let start = 0;
    let end = 0;

    if (A.length === 1) {
        return Math.abs(A[0] + A[0]);
    }

    A.sort((a, b) => a - b);

    for (i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            negatives.push(A[i]);
        } else {
            positives.push(A[i]);
        }
    }

    negatives.sort((a, b) => b - a)

    if (positives.length === 0) {
        return Math.abs(2 * negatives[0]);
    }

    if (negatives.length === 0) {
        return 2 * positives[0];
    }

    if (positives[0] === 0) {
        return 0;
    }

    min = positives[0] * 2;

    for (i = 0; i < negatives.length; i++) {
        start = 0;
        end = positives.length - 1;
        var neg = A[i];

        while (start <= end) {
            var mid = Math.floor((start + end) / 2);
            var pos = positives[mid];
            var sum = Math.abs(neg + pos);

            if (min > sum) min = sum;

            if (pos > Math.abs(neg)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return min;
}

// Given array of integers, find the lowest absolute sum of elements.
export const minAbsSum = (A) => {
    let i = 0;
    let j = 0;
    let max = 0;
    let total = 0;
    let target = 0;
    let dp = [];
    let count = [];
    let minDiff = Infinity;

    if (A.length === 0) return 0

    A.sort((a, b) => Math.abs(a) - Math.abs(b));

    max = Math.abs(A[A.length - 1]);

    for (i = 0; i <= max; i++) {
        count[i] = 0;
    }

    for (i = 0; i < A.length; i++) {
        A[i] = Math.abs(A[i]);
        count[A[i]]++;
        total += A[i];
    }

    dp[0] = 0;
    for (i = 1; i <= total; i++) {
        dp[i] = -1;
    }

    target = total / 2;

    for (i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            let step = i;
            for (j = 0; j < dp.length; j++) {
                if (dp[j] >= 0) {
                    dp[j] = count[i];
                } else if (j >= step && dp[j - step] > 0) {
                    dp[j] = dp[j - step] - 1;
                }

                if (dp[j] >= 0) {
                    if (j === target) {
                        return 0;
                    } else {
                        minDiff = Math.min(minDiff, Math.abs(total - 2 * j));
                    }
                }
            }
        }
    }

    return minDiff;
}

// In a given array, find the subset of maximal sum in which the distance between consecutive elements is at most 6.
export const numberSolitaire = (A) => {
    let i = 0;
    let j = 0;
    let result = [];

    result[0] = A[0];
    for (i = 1; i < A.length; i++) {
        result[i] = -Infinity;
    }

    for (i = 1; i < A.length; i++) {
        for (j = Math.max(0, i - 6); j < i; j++) {
            result[i] = Math.max(result[i], result[j] + A[i]);
        }
    }

    return result[result.length - 1];
}

// Compute number of inversion in an array.
export const arrayInversionCount = (A) => {
    // Helpers - should be seperate not contained but will keep here for this solution
    const findItem = (item, arr, start, end) => {
        var mid = Math.floor((start + end) / 2);

        if (arr[mid] === item) {
            return mid;
        } else if (arr[mid] < item) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        return findItem(item, arr, start, end);
    }

    let i = 0;
    let j = 0;
    let pos = [];
    let B = [];
    let C = [];
    let total = 0;

    for (i = 0; i < A.length; i++) {
        B[i] = A[i];
    }

    B.sort((a, b) => a - b)

    for (i = 0; i < A.length; i++) {
        let itemPos = findItem(A[i], B, 0, A.length);
        C[i] = itemPos;
        pos[i] = 0;
    }

    for (i = C.length - 1; i >= 0; i--) {
        let count = pos[C[i]];
        total += count;

        for (j = C[i] + 1; j < C.length; j++) {
            pos[j]++;
        }
    }

    return total;
}

// Check whether a given polygon in a 2D plane is convex; if not, return the index of a vertex that doesn't belong to the convex hull.
class Point {
    constructor (point, index) {
        this.x = point.x;
        this.y = point.y;
        this.index = index;
    }
    angle(edge) {
        let rootVector = edge.vector();
        let curEdge = new Edge(edge.start, this);
        let curVector = curEdge.vector();
        let part1 = rootVector.u1 * curVector.u1 + rootVector.u2 * curVector.u2;
        let part2 = Math.sqrt(Math.pow(rootVector.u1, 2) + Math.pow(rootVector.u2, 2));
        let part3 = Math.sqrt(Math.pow(curVector.u1, 2) + Math.pow(curVector.u2, 2));
        return 1 - part1 / (part2 * part3);
    };
}

class Edge {
    constructor (start, end) {
        this.start = start;
        this.end = end;
    }
    vector() {
        return {
            u1: this.end.x - this.start.x,
            u2: this.end.y - this.start.y
        };
    }
    leftTurn(p3) {
        var p2 = this.start;
        var p1 = this.end;

        return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
    };
}

export const polygonConCavityIndex = (A) => {
    let i = 0;
    let root = new Point(A[0], 0);
    let points = [];
    let edges = [];

    points.push(root);

    if (A.length === 3) {
        return -1;
    }

    for (i = 1; i < A.length; i++) {
        var item = new Point(A[i], i);
        points.push(item);
        if (item.y < root.y || (item.y === root.y && item.x > root.x)) {
            root = item;
        }
    }

    points.splice(root.index, 1);

    let firstEdge = new Edge(root, new Point({ x: root.x + 1, y: root.y }));

    points.sort((a, b) => a.angle(firstEdge) - b.angle(firstEdge));

    firstEdge = new Edge(root, points[0]);
    edges.push(firstEdge);

    for (i = 1; i < points.length; i++) {
        let point = points[i];
        let lastEdge = edges.pop();

        if (lastEdge.leftTurn(point) > 0) {
            return lastEdge.end.index;
        } else {
            edges.push(lastEdge);
            edges.push(new Edge(lastEdge.end, point));
        }
    }
    return -1;
}


//Find the element(s) that does not have a partner
export const findMissingPartner = (a) => {
    let single = []
    const sort = a.sort((a, b) => { return a - b })
    sort.map((x, i) => x === sort[i + 1] ? (delete sort[i], delete sort[i + 1]) : single.push(x))
    return single
}



