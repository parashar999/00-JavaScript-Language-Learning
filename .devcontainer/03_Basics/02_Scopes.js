// var will have global scope
// let,const will have scope of brackets in which it is declared
// if a value is declared outside brackets then change in brackets will not affect after bracket end

// when function is declared normally it can be used above and below the decleration

addit(56) // allowed

function addit(num)
{
    return num+1
}

addit(5) // allowed

// when function is declared in this way it can be only used below the function decleration

addtwo(5) // Not allowed will give an error

const addtwo =function(num)
{
    return  num+1
}

addtwo(5) // allowed