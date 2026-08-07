const user={
    username:"Gaurav",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,Welcome to website.`)  //Jab bhi ham cureent context(current value) ko refer kar rahe hote hai to 
        // THIS keyword ka
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Yadav";
// user.welcomeMessage();
 console.log(this);//o/p={}abhi ham node environment ke andar hai to hamara THIS empty object ko refer kar raha hai.bcoz global ke andar koi context nahi hai. 
// Ques-Browser ke andar jo global object hai wo window object hai.

// *************2nd method function declaration***************
//function chai (){
     // let username="Gaurav";
   // console.log(this.username) 
//}
//chai()

const chai=function(){
     let username="Gaurav";
    console.log(this.username) //object ke andar hi context use kar pa rahe  function ke andar nahi kar pa rahe hai.
}
chai();

// ***********************Arrow Function*********************************
const code=() => {
   let username="Gaurav";
    console.log(this) 
}
code();

// Explicit Return Isme Return Keyword lagana hota hai.
const addtwo=(num1,num2) => {
return num1+num2;
}
console.log(addtwo(3,4));

// Implicit return =Isme return likhne ki jarurat nahi hoti hai.

//  const addthree=(num1,num2,num3) => num1+num2+num3
//  console.log(addthree(2,5,8));
 const addthree=(num1,num2,num3) => (num1+num2+num3)
 console.log(addthree(2,5,8));

//  Object Return
const name=() => ({username:"Gaurav"})
console.log(name());



// const myArray=[2,4,8,12];
// myArray.forEach()

