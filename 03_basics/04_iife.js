// IIFE=Immedietly Invoked Function(Global Scope ke pollution se problem hoti hai kai bar  to us global scope ke jo variable hai ya
//   phir koi Declaration uske pollution ko hatane ke liye hamne IIFE ka use Kia.) 

(function chai(){
    // Name IIFE
     console.log(`Welcome Gaurav`)
})();
// ********************************

(()=>{
    console.log("Gaurav Yadav")
})();

// ***********************************

(function(){
    console.log(`Welcome to New World`)
}());

// *******************************************
((name)=> {
    console.log(`My name is ${name}`)
})("Gaurav Yadav")
