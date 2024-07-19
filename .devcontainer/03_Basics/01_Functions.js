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


// Multiple inputs of same kind

function calculateCartPrice(val1, ...num1) // ... is rest operator here, 200 will be passed as val1 rest will be handeled by rest operator
{
    return num1 // will return an array related to num1 and rest
}

console.log(calculateCartPrice(200,400,500)) // multiple values can be passed using rest operator


// Handling objects and functions together

const user = 
{
    username : "sharmatarun392000",
    price : 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username : "parashar",
    price: 399
})

// Taking array as parameter

const mynewarr=[5,43,4,6,7]
function returnsecondvalue(arr)
{
    return arr[2]
}
console.log(returnsecondvalue(mynewarr))