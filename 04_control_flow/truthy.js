for(let x=0; x<5; x++){
    if(x==2){
        continue;
    }
    console.log(x)
}

const useremail=[];
if(useremail){
    console.log("got user Email")
}
else{
    console.log("Dont have user Email")
}

// Falsy Values= 0 ,false,-0,undefined,NaN,Null,BigInt 0n ,""
// Truthy Value ="0","False"," ",[].{},function(){}

// Array checking Rule
if(useremail.length==0){
console.log("Array is Empty");
}

const emptyObject={};
if(Object.keys(emptyObject).length===0){
    console.log("Object is empty")
}

// Nllish Coalescing Operator (??) : Null undefined
let val1;
// val1=5??10
// val1=null??5
// val1=undefined??15
val1=5??null??undefined
console.log(val1)

// Terniary Operator
// condition ? true:false

const IcecreamPrice=100;``
IcecreamPrice <=80 ? console.log("Less than 80") : console.log("More than 80");