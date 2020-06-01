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
