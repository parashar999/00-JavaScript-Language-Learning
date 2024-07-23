// Object Literal

const user = 
{
    username: "tarun",
    loginCount : 8,
    singedIn : true,

    getUserDetails2:()=>
    {
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
        console.log(this)
        return 0 // 0 will be returned
    },
    getUserDetails:function()
    { 
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
        console.log(this)
        return 0 // 0 will be returned
    }
}

console.log(user.getUserDetails()) // `this` in regular function takes local context as it's context
console.log(user.getUserDetails2()) // `this` in callback function takes global context as it's context

// Constructor function , new is the Constructor function here
// const promiseOne = new Promise()
// const date = new Date()


// concept of this funciton
function User(username, loginCount, isLoggeIn)
{
    this.username=username
    this.loginCount=loginCount
    this.isLoggeIn=isLoggeIn
    // return this it returns this by default
}

const userOne= new User("Tarun", 12, true)
const userTwo= new User("Tarun Parashar", 23 , false)
console.log(userTwo)
console.log(userOne.constructor)

// 1. use of new creates a empty object called instance
// 2. a construction function is called with new keyword
// 3. context in this are injected in object
// 4. function is obtained