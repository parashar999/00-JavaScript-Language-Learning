let score = "33"
console.log(typeof(score)); 

let valueInNumber =Number(score); // conversion of a number is easier but if score is not a number it will convert and store NaN in the valueInNumber
// If value like true is taken it will convert to 1;
console.log(typeof valueInNumber);
console.log(valueInNumber);

// while conversion to boolean. 1 => true; 0 => false, "" => false, "tarun" => true

let str1="Tarun"
let str2="Parashar"
let str3=str1 + " " + str2 // string append operation
console.log(str3)


// return type depends on the type used first
console.log("1"+2) // string
console.log(1+"2") // string
console.log(1+2)// nubmer
console.log(1+2+"2") // string
console.log("1"+2+2) // string

console.log(typeof("1"+2))
console.log(typeof(1+"2"))
console.log(typeof(1+2))
console.log(typeof("1"+2+2))
console.log(typeof(1+2+"2"))