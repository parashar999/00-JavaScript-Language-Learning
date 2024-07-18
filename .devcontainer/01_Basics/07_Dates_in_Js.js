// Dates

let myDate = new Date()
console.log(myDate.toLocaleTimeString())
console.log(myDate.toDateString())
console.log(myDate.toString)
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23 , 5, 4, 33)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString('default' , 
    {
        weekday: "long"
    }))

let datenew= new Date("2024-9-15")
console.log(datenew.toLocaleString())

//time-stamp

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate.getMonth())