const score=400
const balance =new Number(100)
console.log(balance)
console.log(typeof balance.toString())
console.log(balance.toFixed(2)) // precision is upto two decimal places

const othernum= 23.8966
console.log(othernum.toPrecision(3))

const hundreds =1000000000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++-------MATHS------++++++++++++++++++//
const k=Math.PI
console.log(k)
console.log(Math)
console.log(Math.abs(-34))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.9))
console.log(Math.max(3,4,5,6))
console.log(Math.random()) // gives onle values between 0 and 1 , Use mathamatical Operations to get optimum results
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)