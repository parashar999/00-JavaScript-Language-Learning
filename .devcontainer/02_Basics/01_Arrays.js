const myArr = [0,1,2,3,4,5, true, "Tarun"] // In javascript array can store elements of different data types
// Arrays of javascript are re-scalable
// Arrays in javascript make shalow copy by default

const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[3]) // Assccesing an element

// Array methods
myArr.push(6) // PUSH METHOD
console.log(myArr)

myArr.pop() // POP METHOD
console.log(myArr)

myArr.unshift(9) // ADD AT THE BEIGNING
console.log(myArr)

myArr.shift() // REMOVE FROM THE BEIGNING
console.log(myArr)

console.log(myArr.includes(9)) // Telles if present or not in boolean
console.log(myArr.indexOf(2)) // Give number index

const newArr= myArr.join() // Join the elements of an array and convert it into string
console.log(newArr)
console.log(typeof newArr)

const myn1 = myArr.slice(1,3) // Do not manipulate the array
console.log(myn1)
console.log(myArr)

const myn2 = myArr.splice(1,3) // Manipulate the array
console.log(myArr)
console.log(myn2)

myArr.push(myn1) // push will push array as an element
console.log(myArr)

console.log(myArr.concat(myn1)) // concat will take array as an array and will copy the elements
console.log([...myArr, ...myn1 ]) // will work same as concat , mostly used because no of array required to concat are more than two

const another_array=[1,2,3, [4,5,6] ,7 ,[[6,4] ,[4,5]]]
console.log(another_array.flat(Infinity)) // depth is provided in place of infinity to spread out the array

console.log(Array.isArray("Tarun")) // Tells weather input is array or not
console.log(Array.from("Tarun")) // Will convert it to array and returns
console.log(Array.from({Name:"Tarun"})) // Array from object if not provide of what array is to be built it will return an empty array
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))