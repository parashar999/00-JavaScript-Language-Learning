const course =
{
    coursename: "js course",
    price : "1000",
    courseInstructor: "Tarun"
}

// Object Destructuring

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor:Instructor} = course
console.log(Instructor)

// giving destructured element in place of prop.element

const navbar = ({company}) => 
    {

    }
navbar(company = "mine")