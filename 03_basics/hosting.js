// Hosting ek aisa process hai jo variable decleration hai or jo function declaration hai use shift kar deta to the top in their scope.

SayMyName("Gaurav")  //is case mai function automatically compilation se pahle top par shift ho gaya ho ga.Entire function upar shift ho jata hai

function SayMyName(Name){
    console.log(Name)
}
// SayMyName("Gaurav")

// *******************************************VARIABLE HOSTING************************************************************************

console.log(age); // iska o/p-undefined aayega kyuki variable ki declaration top par move karta hai value nahi.
var age=25;
// console.log(age);

//********************************************USING LET AND CONST KEYWORD*************************************************************

//  YE DONO KEYWORD INITIALIZATION HONE KE BAAD HI PRINT KAR SAKTE HAI PAHLE NAHI.


// sayHello() -Function Expression wale case mai pahle call karne par error de dega.❌

    let sayHello=function(){
        console.log("Gaurav Yadav");
    }
    sayHello()   //✔️

// ************************& check class level hosting i.e not pssible &**************************************************************

  //const object1=new Human();     //class se pahle object banane ki kosis kare to error dega
    class Human{

    }
const object1=new Human();




