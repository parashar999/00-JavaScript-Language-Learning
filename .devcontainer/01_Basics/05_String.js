const Name ="tarun"
const repoCount="50"

console.log(Name + " " +repoCount) // type 1 of appending
console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`) // type 2 of appending, it is better

const gameName = new String('Tarun') // gameName is an object here with key-value pairs and methods
console.log(gameName)
console.log(gameName[2])
console.log(gameName.indexOf('r')) // accessing a method
console.log(typeof gameName)

/////---------Methods---------//////
// .subststring(start_i, end_i) :- end here is exclusive
// .slice(start_i,end_i) :- end here is also exclusive
// .trim() :- Trim the empty space and new line
// .replace('what to repace', 'with what to replace'):- replace within as string
// .include('what you want to find is included or not')  
// .split('seprator',  limit) :- Convert a string into array
const another = gameName.slice(2,4)
console.log(another) // Negative input will start from the back side and negative input can not be used in case of substring