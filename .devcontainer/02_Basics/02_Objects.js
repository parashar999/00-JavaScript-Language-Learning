// Signleton object built when made by with help of constructor

const tindUser = new Object() // this is a singleton object
const tinderUser = {} // this is not a singleton object
tinderUser.id = "123"
tinderUser.isLoggedIn = false

// Object of Object

const regularUser = 
{
    email: "someone@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstname : "Tarun",
            lastname: "Parashar",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

// Building with the help of literals

const mySym=Symbol("Key1")

const JsUser = {
    name : "Tarun" ,
    lastName : "Parashar",
    "Contact No" : 7495040645,
    email : "parashartarun392000@gmail.com",
    isLoggedIn: false,
    [mySym]: "Key1", // symbol decleration
    lastLoginDays : ["Monday", "Saturday"]
} // currly braces here is object, it stores key value pair

// Accessing the elements of object
console.log(JsUser.email)
console.log(JsUser["email"]) // use of this is preffered
console.log(JsUser["Contact No"])
console.log(JsUser[mySym])

JsUser.email = "tarun@chatgpt.com"
// Object.freeze(JsUser) // will freeze the JsUser
JsUser.email =" tarun@google.com"

console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS user")
}

console.log(JsUser.greeting)
console.log(JsUser.greeting())

const obj1 ={ 1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}
const obj3 = {5: "a", 6 : "b"}

const obj4 =Object.assign(obj1,obj2.obj3) // it will make changes to obj1
console.log(obj4)
const obj5 =Object.assign({},obj1,obj2,obj4) // it return a mofified new target object 
console.log(obj5)

console.log({...obj1,...obj2,...obj3})

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))