//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Reference (Non primitive)

// Array, Objects, Functions

// Object:
const person = {firstName:"John", lastName:"Doe"};

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "gaurav",
    age: 22, }

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

const myFunction = function(){
    console.log("Hello world");
}


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// *********************************************************************************************************************************

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

let myName="Gaurav";
let mySurname=myName

mySurname="Yadav"

console.log(myName);
console.log(mySurname)

let userOne={
    emailId:"123@MediaList.com",
    UPIid:"hgfgd@ybl.com"
}

let userTwo=userOne;

userTwo.emailId="nightOwl@mail.com"

console.log(userOne.emailId)
console.log(userTwo.emailId)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
