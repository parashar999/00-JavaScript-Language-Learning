// forEach loop do not return any value that is why filter is used

const myobj=
{
    js: "javascript",
    exe: "extension",
    cpp : "C++",
}

const arr=[1,2,3,4,5,6]
const newarr= arr.filter((num)=> num>4)
console.log(newarr)

// implementation using forEach loop
const newNums = []
arr.forEach((num)=>
    {
        if(num>4)
            {
                newNums.push(num)
            }
    })

console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  // map() method :- also a callback function

  const mynum=[1,2,3,4,5,6,7,8]
  console.log(mynum.map((num)=> num=num+10))
  console.log(mynum.map((num)=>num*10).map((num) => num+1).filter((num)=> num>=40))


// reduce() method 
const inst=1

console.log(mynum.reduce((acc,currval)=> (acc+currval),inst ))