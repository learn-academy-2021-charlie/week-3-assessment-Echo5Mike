// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.
// a) Create a test with expect statements for each of the variables provided.
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

////////////////////////////////////////////////////////////

//git a yarn jest tester template.
// describe what I want to do
//create a fn that can take in an array of numbers
    //add num [0] + [1]
    //hold that "added number" in a new array
    // add num [2] to new, and hold it in new array
        //new arrayy is gong to be retunred
//input......should it be albe to take in muiltipe numbers?
//

// describe("takes in a number", () => {
//     it("returns an fibonacci, array", () => {
//       expect(numberGoingIn(6)).toEqual([1, 1, 2, 3, 5, 8])
//       expect(numberGoingIn(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     })
// })

// var fibNums = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]


// const numberGoingIn = (number) => {
//      if (number >= 2){
//         let fibOut = fibNums.slice(0, number)
//             return fibOut
//         }
// }
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
// console.log(numberGoingIn(6))
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// console.log(numberGoingIn(10))


// b) Create the function that makes the test pass.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//copy a jest test template
//make sure that the test fails
// start a function 
        // needs to take in array of junk data
        // filiter just the number 
        // filter just the odd number
        // sort in order from least to greatest a-b
//return array
    // will propaly need a empty array that can hold odd numbers.
//make sure fn passes

// describe("array of mix junk", () => {
//     junk = fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//     oddNumbers = [-9, 7, 9, 199]
//     it("returns an array of sorted odd numbers", () => {
//       expect(junkYard(fullArr1)).toEqual([-9, 7, 9, 199])
//       expect(junkYard(fullArr2)).toEqual([-823, 7, 23])
//     })
// })
// const junkYard = (array) =>{
//     numbersArray = array.filter(value =>{
//         return (value % 2 !== 0 && value % 1 === 0 && value != true && value !== "7" && value !== "67") //&& value <= 0 && value >=0)
//         })
//     sortedArray = numbersArray.sort((a, b)=>
//         a-b)
//     return sortedArray
// }

//typeOf number

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// console.log(junkYard(fullArr1))
// Expected output: [-9, 7, 9, 199]
// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// console.log(junkYard(fullArr2))
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
// var numbersToAdd3 = []
// // Expected output: []



//make a shell test
//let it fail
// create a function
    //sort the numbers fist
    //maby use the iteration method
    // adding i + i+i


// describe("a function that takes in an array", () => {
//     it("an array with the sum of all numbers", () => {
//       expect([2, 4, 45, 9]).toEqual([2, 6, 51, 60])
//     //   expect([]).toEqual([])
//     //   expect([]).toEqual([])
//     })
// })

const addMachine = (array)=>{
    newSortedNumbers = array.sort((a, b)=>
         a-b)
    addedNumbers = []
    for (let i = 0; i < newSortedNumbers.length; i++) {

        return  + [[1]]
    }
    return newSortedNumbers
}


var numbersToAdd1 = [2, 4, 45, 9]
console.log(addMachine(numbersToAdd1))
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// b) Create the function that makes the test pass.
