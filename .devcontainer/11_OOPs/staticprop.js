class User
{
    constructor(username)
    {
        this.username = username
    }

    logMe()
    {
        console.log(username)
    }

    static createId() // --Please do a reasearch on it in future , createId() will be called within function ! It's also a doubt
    {
        return `123`
    }

}

class Teacher extends User
{
    constructor(username, email)
    {
        super(username)
        this.email=email
    }
}

const tarun = new User("Tarun")
const varun = new User("Varun")
const jagmohan = new User("Jagmohan")
const anuj =new Teacher("Anuj", "Anujkumar@gmail.com")
console.log(tarun)
console.log(varun)
console.log(jagmohan)
console.log(anuj)