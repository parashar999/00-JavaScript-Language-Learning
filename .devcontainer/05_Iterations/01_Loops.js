// for loop
let array= [1,2,3,4,5,6,7,8]
for (let index = 0; index < array.length; index++) 
{
    const element = array[index];
    if(element==3) continue
    console.log(element)
    if(element==6) break
}

// while loop 
while(condition)
    {
        // code here
    }

// do-while loops

do {
    // code here
} while (condition);