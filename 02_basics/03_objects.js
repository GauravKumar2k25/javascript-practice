// Singleton=Koi bhi constructor jis se  ap banate hai tab  singleton ek object banta  hai yaniki apne tarah ka ek object hai.
// jab bhi actually mai literals ke tarah declare karte hai  to singleton nahi banta hai.
// constructor se agar banega to hamesha singleton banega.



// object Literals-ye object declare karne ka tarika hai.

// Object Declare

// Question= object mai symbol kaise declare kia jata hai ? = 
//  Answer=Simply Ek symbol lekar pahle use declare karna hai. uske baad usko key tarah act karna hai and then print karna hai.

const mySym=Symbol("key1")

const jsUser={
    Name:"Gaurav",
    "Full Name":"Gaurav Yadav",
     [mySym]:"mykey1",
    // mySym:"mykey1",
    Location:"Delhi",
    Age:21,
    email:"gaurav@123#",
    IsLoggedin:false,
    LastLoggedinDays:["Monday","Tuesday"]
}

// Object Declare

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Location"]);
console.log(jsUser["Full Name"])
console.log(jsUser[mySym]);
console.log(jsUser);

jsUser.email="gauravvxy@gmail.xcom"
// Object.freeze(jsUser)
jsUser.email="gaurav568@gmail.xcom"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js User");
}
// console.log(jsUser.greeting());

// String Interpolation
jsUser.greetingTwo=function(){
    // Ham Jise Refrence Kar rahe Hai Jis Js user Ko object  uske andar kya kya properties hai usko pata karne ke liye hm this lete hai.
    console.log(`Hello js User ,${this.Name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());