// Immediately Invoked Function Expressions (IIFE)
// IIFE are invoked immediately and prevent pollution from global scope elements

(function fun()
{
    console.log(`DB CONNECTED`)
})();

// () this first parenthesis is decleration of function, () this second parenthesis is it's execution, ; will stop the execution

((name)=>{
    console.log(`DB CONNECTED TO ${name}`)
})("Tarun"); // Arguments is passed within execution paranthesis