// After ES-6

class User {
    constructor(username, email, password)
    {
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPassword()
    {
        return this.password
    }

    changeUsername(username)
    {
        this.username=username
        return username
    }
}

const tarun = new User("Tarun", "parashartarun392000@gmail.com", "123")
console.log(tarun.encryptPassword());
console.log(tarun)
console.log(tarun.changeUsername("varun"))
console.log(tarun)

// behind the seen working of method is like this 
User.prototype.changeUserEmail = function(mail)
{
    this.email=mail
    return this.email
}

console.log(tarun.changeUserEmail("varuntarun2324@gmail.com"))