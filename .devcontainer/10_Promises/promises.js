    const promiseOne =  new Promise((resolve,reject)=>
    {
            // Do an async task
            setTimeout(()=>{
                console.log("Async task is complete")
                resolve()
            }, 1000)
      })

      promiseOne.then(()=>{
        console.log("Promise is Consumed")
      })

      new Promise((resolve, reject)=>
        {
            setTimeout(()=>{
                console.log("This is second Print")
                resolve()
            },1000)
        }).then(()=>{console.log("Async 2 resolved")})

    const promiseThree = new Promise((resolve, reject)=>
    {
        setTimeout(()=>{
            resolve({username:"Tarun" , lastname:"Parashar"})
        },1000)
    })

    promiseThree.then((user)=>{
        console.log(user)
    })

const promiseFour= new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            let error=false
            if(!error)
                {
                    resolve({username:"Tarun", password:"Parashar"})
                }
            else
            {
                reject('ERROR:Something went wrong')
            }

        },1000)
    })
// Extracting data from the promise
promiseFour.then((user)=>
    {
        console.log(user);
        return user.username
    }
).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error)
            {
                resolve({username:"Tarun", password:"Parashar"})
            }
        else
        {
            reject('ERROR:Something went wrong')
        }

    },1000)
})

async function consumePromiseFive()
    {   
        try {
            const response=await promiseFive
            console.log(response)
        } 
        catch (error) {
    
        console.log(error)
        }
    }
    consumePromiseFive()

async function getAllUsers()
{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json()
        console.log(data)
     }
     catch (error) {
        console.log("E: ",error)   
    }
}
getAllUsers()
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json
}).then((data)=>{console.log(data)}).catch((error)=>console.log(error))