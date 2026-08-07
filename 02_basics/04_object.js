// const tinderUser=new Object(); // Ye Ek Singletone Object Hai
// console.log(tinderUser)


const tinderUser = {} // Or Ye Non Singletone object hai. tideruser1,tinderuser2 is type se hm value declare nahi kar sakte;

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true
// console.log(tinderUser)

// Isme Jitna Bhi Nesting Karna chahe Kar Sakte hai.
const Anotheruser={
    Name:"gaurav",
    email:"gaurav123",
    Fullname:{
        Firstname:"gaurav",
        lastName:"Yadav",
        Address:{
            Home:"Rambagh Purnea"
         }
    }
}
// console.log( Anotheruser.Fullname.Address);

//Object concetination
const User1={1:"a", 2:"b" , 3:"c"}
const User2={4:"d", 5:"e" , 6:"f"}
// const User3={User1,User2} // Not A Good Method or Practice
// const User3=Object.assign({},User1,User2).
const User3={...User1,...User2}
// console.log(User3)

// Array Objects

const user=[
    {
        Name:"gaurav",
        Email:"Gauarv123@gmail.com"
    },
    {
    },
    {
    }
]
user[1].Email
console.log(tinderUser)
console.log(Object.keys(tinderUser)) 
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(Object.hasOwnProperty('name'))
console.log(Object.hasOwnProperty('isLoggedIn'))



const course={
    courseName:"javascript",
    coursePrice:1999,
    courseInstructor:"Hitesh"

}

// Object Destructuring;

const {courseInstructor:instructor} = course;
// console.log(courseInstructor)
console.log(instructor)


// Ye Json Format Mai Hai .  ye Jitna Bhi Api hai Json Format  hi hai;


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]






