"use strict" // this will make the compiler to use the never version of javascript for entire code in the file
// alert("hello") won't work here , we are using node.js , not browser
// make the code-redability high
// https://tc39.es/ecma262/#sec-intro :- tc39 is the standard for javascript documentation 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript :- Mozilla javascript documentation

// Primitive data types

let Name = "Tarun sharma" // String data type
let age = 18 // int data type
let check= true // boolean data type
let state=null // null data type
let k // undefined data type
let sym=Symbol('*') // symbol should be provide in single braces

console.table([Name , age, check, sym, state, k]);
console.table([typeof Name , typeof age , typeof check , typeof sym , typeof state , typeof k, typeof 200000000000 ]) // type of null is object, type of undefined is undefined
// Primitive data types :- String, Int, Boolean , Big , Null, Undefined
// Non-Primitive data types :- Object, Function
let symbol = '#' // symbol data type