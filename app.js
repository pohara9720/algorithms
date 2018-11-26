// var inquirer = require('inquirer')

// // List of animals 
// const animals =
//  [
//  "alligator","alpaca","antelope","ape","armadillo",
//  "baboon","badger","bat","bear","beaver",
//  "bee","bison","boar","buffalo","bull",
//  "camel","canary","cat","chameleon","cheetah",
//  "chimpanzee","chinchilla","chipmunk","cougar","cow",
//  "coyote","crocodile","crow","deer","dingo",
//  "dog","donkey","elephant","elk","ferret",
//  "fish","fox","frog","gazelle","gila monster",
//  "giraffe","goat","gopher","gorilla","grizzly bear",
//  "ground hog","guinea pig","hamster","hedgehog",
//  "hippopotamus","hog","horse","hyena","iguana",
//  "impala","jackal","jaguar","kangaroo","koala",
//  "lamb","lemur","leopard","lion","lizard",
//  "llama","mole","mongoose","monkey","moose",
//  "mouse","mule","mustang","newt","ocelot",
//  "opossum","orangutan","otter","ox","panda",
//  "panther","parrot","pig","platypus","polar bear",
//  "porcupine","prairie dog","puma","rabbit","raccoon",
//  "ram","rat","reindeer","reptile","rhinoceros","salamander",
//  "seal","sheep","skunk","sloth","snake",
//  "squirrel","tiger","toad","turtle","walrus",
//  "warthog","weasel","whale","wildcat","wolf",
//  "woodchuck","zebra","spider"
//  ]


// const attributes = [
//  {Does_it_have_spots_or_Stripes:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0]},
//  {Is_it_bigger_than_a_suitcase :[1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0]},
//  {Does_it_have_a_tail:          [1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0]},
//  {Does_it_have_fur:             [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1]},
//  {Does_it_have_four_legs:       [1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0]},
//  {Is_it_a_water_animal :        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0]},
//  {Is_it_a_flying_animal :       [0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
//  {Is_it_a_mammal:               [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0]},
//  {Does_it_have_a_beak :         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
//  {Does_it_have_feathers:        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
// ]

// const formatQuestion = (str) => {
//   const key = Object.keys(str)
//   const question = key[0].split('_').join(' ')
//   return question
// }

// const playAgain = () => {
//     console.log(`
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************

//                 Push ctrl + c to exit

//           Then type nodemon app.js to replay

//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           `)
// }


// const removePossibilities = (arr) => {
//     arr.forEach((a,i) => {delete animals[a]})
//       const remaining = animals.filter((x) => {
//           return x != null
//       })
//       console.log(remaining)
//       return remaining
// }


// const gameOver = (num,answer) => {
//     if(num === 1){
//         console.log(`
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************

//             Is the answer ${answer}?

//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           `)
//         playAgain()
//     }
//     else if(num === 0){
//         console.log(`
//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************

//         None of the animals match that criteria

//           ***********************************
//           ***********************************
//           ***********************************
//           ***********************************
//           `)

//         playAgain()
//     }
// }

// const askQuestion = (v,i) => {
//    if(v === null || v === undefined){
//       gameOver(0)
//    }
//    else{
//       const attr = Object.values(v)
//       inquirer.prompt([{
//           type: "confirm",
//           name: 'question',
//           message: `${formatQuestion(v)}?`,
//           choices: ["Yes","No"]
//       }]).then((answers) => {
//           let remaining 
//           if(answers.question === true){
//               const toBeRemoved = []
//               const matches = attr[0].forEach((x,i) => {
//                   x === 1 ? null : toBeRemoved.push(i)
//                   remaining =  removePossibilities(toBeRemoved)
//               })
//           }
//           else{
//               const matches = attr[0].forEach((x,i) => {
//                 const toBeRemoved = []
//                   x === 0 ? null : toBeRemoved.push(i)
//                   remaining = removePossibilities(toBeRemoved)
//               })
//           }
//           remaining.length === 1 ? gameOver(1,remaining[0]) : remaining.length === 0 ? gameOver(0) :askQuestion(attributes[i+1],i+1)
//       }) 
//    }
// }


// askQuestion(attributes[0],0)

//Algorithms

// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BINARY SEARCH ALGO

//FIND ANSWER BY HALVING RESULTS EACH INTERATION

const data = [1,4,2,4,5,7,77,88,9,100,122,155,434,231241,5345,2,3,555,3,22,342,4059,2487,3948,2937,29374,34,5463,3,4,2,34,3434,556,55,6,565,655,4,2,2,1212,3323,22,34,67,4,745,456,456,4564,37,78,997,566,45,45,8,57,3,7,32,4,7,134,42,3,42,34,1,35,66,7,88,2200,220,101,2,344,5]
const sorted = data.sort((b,c) => {return b - c})

const binary = (a,v) => {
    let high = a.length - 1
    let low = 0
    let mid = 0

    while (low <= high){
        mid = Math.floor((high + low) / 2)
        // middle = value being searched
        if(a[mid] === v){
           return a[mid]
        }
        else if(v > a[mid] ){
            //move the low up one
            low = mid + 1
        }
        else{
            // move high down one 
            high = mid - 1
        } 
    }
    return -1
}

let result = binary(sorted,434)
// console.log('Result',result)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// FIND BIGGEST BINARY GAP 

const convertToBinary = (dec) => {
  const bin  = (dec >>> 0).toString(2)
  // console.log(`Binary Conversion ${dec}`,bin)
  const array = bin.split('')
  const lengths = []
  let length = null
  const gap = array.map(b => {
    b === '0' ?
        length ++
    :
    (
        lengths.push(length),
        length = 0
    )
  })
  return Math.max(...lengths)

}
const values = [1,2,147,483,647]
let answer = values.map( x => convertToBinary(x))
// console.log('Answer',answer)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Rotate indexes by 1 to the right k number of times (Recursive)

const A = [1,2,3,4,5,6,7,8,9,10]
const K = 5

const rotate = (a,k) => {
    let count = 0
    let answer 
    while(count < k){
        var set = a
        const o = set.pop()
        set.splice(0, 0, o)
        count ++
        answer = set
    }
    return answer
}

const repeat = rotate(A,K)
// console.log('Repeat',repeat)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Find the element(s) that does not have a partner


const pairs = [1,1,1,1,2,2,4,4,3,3,3,55,6,6,4,4,3,7,7,8,8,9,9,10,10]

const sift = (a) => {
    let single = []
    const sort = a.sort((a,b) => {return a - b})
    sort.map((x,i) => x === sort[i + 1] ? (delete sort[i],delete sort[i + 1]) : single.push(x))
    return single
}
const solo = sift(pairs)
// console.log('Solos',solo)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Find missing number in sequence 

const sequence = [9,6,7,1,2,4,10,8,3,5,11,13] 

const missing = (a) => {
    let miss
    const sort = a.sort((a,b) => {return a - b})
    sort.map((x,i) => sort[i] - sort[i - 1] != 1 ? miss = sort[i] - 1 : null)
    return miss
}

const found = missing(sequence)
// console.log('Found',found) 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// A small frog wants to get to the other side of the road.
// The frog is currently located at position X and wants to get to a position greater than or equal to Y.
// The small frog always jumps a fixed distance, D.
// Count the minimal number of jumps that the small frog must perform to reach its target.

const start = 10
const finish = 100
const jump = 5

const position = (x,y,z) => {
    let current = x 
    let count = 0
    let positions = []
    while(current < y){
        current =  current + z
        positions.push(current)
        count ++
    }
    const payload = {positions,count}
    return payload
}

const jumpNumber = position(start,finish,jump)
// console.log('Number of jumps',jumpNumber)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Decide whether array is permutation or not 
const perm = [1,2,3,4,5,6,7,8] 

const isPerm = (a) => {
    const sort = a.sort((a,b) => {return a - b})
    let verdict
    sort.map((x,i) => sort[i] - sort[i - 1] != 1 ? verdict = false : verdict = true)
    return verdict 
}

const permutation = isPerm(perm)
// console.log('Is Permutation',permutation)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// const int = [1,2,3,4,5,6,7,8,9,10]

// const findMissing = (a) => {
//     const sort = a.sort((a,b) => {return a - b})
//     let r 
    
//     isPerm()
// } 

// const isMissing = findMissing(int)
console.log(isMissing,'Is missing')


