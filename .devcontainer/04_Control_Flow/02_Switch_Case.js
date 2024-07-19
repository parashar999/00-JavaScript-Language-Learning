const key=5

switch (key) {
    case 1:
        //code here
        break;
    case 5:
        //code here
        break;
    case 4:
        //code here
        break;
    case 3:
        //code here
        break;
    case 2:
        //code here
        break;
    default:
        //code here
        break;
}
// Without break every line in code after case match is executed
// False values :- false, 0, -0, BigInt 0n, " ", null, undefined, NaN
// truth values which are suprising:- "0" , value inside strings are true values, [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined
 
const a= 5 ?? 10
const b= null ?? 15
const c= undefined ??20

console.log(a)
console.log(b)
console.log(c)
console.log(null??10 ?? 20 );

// Terniary Operator
// condition ? true : false

const iceTeaPrice =100
iceTeaPrice >=60 ? console.log("Less than 50") : console.log("Morethan 80")