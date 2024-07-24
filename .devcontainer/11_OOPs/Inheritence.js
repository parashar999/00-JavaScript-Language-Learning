class User
{
    constructor(username)
    {
        this.username=username
    }
    logMe()
    {
        console.log(this.username)
    }
}

class Teacher extends User
{
    constructor(username, email, password)
    {
        super(username) // classes are dealt like this
        this.email=email
        this.password=password
    }

    addCourse()
    {
        console.log(`A new Course is added by ${this.username}`)
    }
}

const anuj= new Teacher("Anuj" ,  "Anuj@123gmail.com", "3435")

anuj.addCourse("Maths")

const varun = new User("Varun")
console.log(varun)

console.log(anuj instanceof Teacher)
console.log(anuj instanceof User)