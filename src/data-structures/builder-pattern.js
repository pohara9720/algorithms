/** SECTION
 * ***************************
 *  Builder Pattern Class
 * ***************************
*/

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
