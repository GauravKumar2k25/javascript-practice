// if
const temperature=41
if(temperature===40){
    console.log("Temperatue is Less than 40")
} else{
    console.log("Temperature is above 40")
}

// <, >, <=, >=, ==, !=, ===, !==
if(3=="2"){
    console.log("Executed")
}

const score=200
if(score>100){
    let power="fly";
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`); ❌

const balance = 1000;
// if(balance>500) console.log("test") , console.log("test2"); // Not A GOOD CODE

if(balance<500){
    console.log("Balance is less than 500");
} 
else if(balance<750){
    console.log("Balance is less than 750");
}
else if(balance<900){
    console.log("Balance is less than 900");
}

else{
    console.log("Balance is less than 1200")
}

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=false

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to Buy the Course");
}
else if(userLoggedIn && debitCard){
    console.log("You are Welcome")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
} 
else if(userLoggedIn || loggedInFromEmail){
    console.log("Hey You Successfully Enrolled in a course");
}