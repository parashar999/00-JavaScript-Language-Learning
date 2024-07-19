const user =
{
    username : "Tarun",
    price : 999,
    welecomeMessage : function()
    {
        console.log(`${this.username} , welcome to website`) // for using current context this keyword is used, this concept refers to the current scope
        console.log(this) // will print the elements the object user
    },

}

user.welecomeMessage()
user.username="Varun" // Change in context
user.welecomeMessage()

console.log(this) // will print the elements of context in the global scope which is empty

function one(){
    username="Tarun"
    console.log(this) // In function there is a lot of context
    console.log(this.username) // Here can be accessed
}
one()

// Decleration using array functions

const newfun = () => // Explicit Return using return keyword
{
    username="Tarun"
    console.log(this) // Here context will be empty
    console.log(this.username) // will give undefined , function do not no what is username
    return 0
}

newfun()

const addTwo = (num1,num2) => (num1+num2)  //Implicit Return
// if currly braces are used then return will be used otherwise no need

const fun2 =( )=> ({ username: "Tarun "}) // Returning an object