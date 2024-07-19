// for of

const arr=[1,2,3,4,5,6,7,8]

for(const i of arr) // any type of object can be written in place of arr and any iterator in place of i
    {
        console.log(i);
    }

// Maps

const map= new Map()

map.set('a',1)
map.set('b',2)
map.set('c',3)
map.set('d',4)
map.set('e',5)
map.set('f',6)

console.log(map)

for(const key of map)
    {
        console.log(key)
    }

for(const [key,value] of map) // destructuring
    {
        console.log(key)
    }


// for in loop for objects 

const myObject = 
{
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift: 'swift by apple'
}

for(const key in myObject)
    {
        console.log(key);
        console.log(myObject[key]);
    }

for(const key in arr)
    {
        console.log(key)
        console.log(arr[key])
    }

for(const key in map)
    {
        console.log(key); // will not give output, map can not be iterated like this
    }

// For each Loop
console.log("For-Each-loop")
arr.forEach( function (item) {console.log(item)})
arr.forEach((item, index, arr)=>{  // item, index, arr all three come as parameter
    // code here
}) 

// Arr of objects are also accessed using forEach Loop