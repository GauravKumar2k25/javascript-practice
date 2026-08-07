function SayMyName (){
    // console.log("G")
    // console.log("a")
    // console.log("u")
    // console.log("r")
    // console.log("a")
    // console.log("v")
}

// SayMyName()

function addTwonumber(number1,number2){  //  Jab ham function ki Defination banate hai uske andar jo bhi inputs lete hai
//  use Kaha jata hai PARAMETERS';
    //console.log(number1+number2)
}

addTwonumber(3,4) // Jab function ko call karte hai tab jo uske andar value pass karte hai ARGUMENTS;

//###############################################################################################################################

function addTwonumber(number1,number2){  
    //let result=number1+number2;
    //return result;
    return number1+number2;
}

const result=addTwonumber(3,5)
//console.log("Result:" ,result);

function loginUserMessage(username="yadav"){
    if(!username){
console.log("Enter user Name:")
    }
    else{
        true;
    }
    return `${username} just Logged In:`
}
//console.log(loginUserMessage("Gaurav"))
console.log(loginUserMessage("gaurav"))


//function calculatecartPrice(...number1){
function calculatecartPrice(val1,val2,...number1){
return number1;
}
console.log(calculatecartPrice(2 ,10 , 20 , 80))

const user={
    username:"Gaurav",
    price:199
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and user Id is ${anyobject.price}`)
} 

// handleObject(user)

handleObject({
    username:"Yadav",
    price:499
})
const myArray=[200,400,600,800]
function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myArray))
console.log(returnSecondvalue([200,400,600,800]))
