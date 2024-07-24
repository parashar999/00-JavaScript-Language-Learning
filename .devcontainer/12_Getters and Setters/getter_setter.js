class User
{
    constructor(email,password)
    {
        this.email=email
        this.password=password
    }
    // getter and setter both are defined together one can not be defined alone
    get password()
    {
        return this._password.toUpperCase()
    }
    set password(value)
    {
        this._password=value
    }
}

const tarun = new User("parashartarun392000","abc")
console.log(tarun.password)