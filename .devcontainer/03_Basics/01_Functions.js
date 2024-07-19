// Function Defination
function f_name(x,y) // type of inputs is not required to be given , x and y are parameters
{
    // write code here
    console.log(x+y)
}

function f_name1(x,y) // type of inputs is not required to be given , x and y are parameters
{
    // write code here
    return x+y
}

// f_name is reference to the function

f_name(3,4) // function execution, 3 and 4 are arguments here

console.log(f_name1(4,5))

// concept of scope also works here
// type of return data is also not required to be specified

function loginUserMessage(username)
{
    if(username === undefined)
    {
        return 'please enter a username'
    }
    return `${username} just logged in` 
}
console.log(loginUserMessage(""))
console.log(loginUserMessage())
console.log(loginUserMessage("Tarun"))