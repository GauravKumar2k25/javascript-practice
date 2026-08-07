
let b = 300  // Globaal Scope

if(true){       // Local Scope
    let a=10;
    const b=20;
    console.log("Inner:" , b)
}
console.log("Outer:" ,b)

function one(){
    const username="gaurav";
    function two(){
        const title="Yadav";
        console.log(username);
    }
    two()
}
one()

if(true){
    const username="Gaurav"
    if(username==="Gaurav"){
        const title="Yadav";
        console.log(...username,...title);
    }
}

// ++++++++++++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}


// console.log(addtwo(5))    ❌
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))