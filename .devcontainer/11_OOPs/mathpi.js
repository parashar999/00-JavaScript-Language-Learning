const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")

console.log(Math.PI);
// tHIS CAN NOT BE OVERWRITED LIKE TIHS
Math.PI=5
console.log(Math.PI)
console.log(descriptor)

const User = 
{
    name :'Tarun',
    lastname: 'Parashar',
    isavailble:'True'
}
console.log(User)
console.log(Object.getOwnPropertyDescriptor(User,"name"))
Object.defineProperty(User, "name" ,{ 
    writable:false, 
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(User,"name"))

User.name="Varun"
console.log(User.name)

// looping
for (let [key,value] of Object.entries(User)) 
    {
        if(typeof value !=='function')
            {
                console.log(`${key}: ${value}`)
            }
    }