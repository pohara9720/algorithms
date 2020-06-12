
/** SECTION
 * ***************************
 * Dynamic Programming
 * ***************************
*/

// REVIEW Using dynamic programming and memoization for fibonacci sequence 
export const fib = (n, memo = []) => {
    if (memo[n]) return memo[n]
    if (n <= 2) return 1
    const res = fib(n - 1, memo) + fib(n - 2, memo)
    memo[n] = res
    return res
}

// REVIEW Using tabulation for fibbonacci sequence
// NOTE This will not overflow the stack as it takes less space complexity
export const fibTab = n => {
    if (n <= 2) return 1
    const fibs = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibs[i] = fibs[i - 1] + fibs[i - 2]
    }
    return fibs[n]
}

