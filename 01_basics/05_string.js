const Name="Gaurav";
const Id=8690;
// console.log(Name +' '+Id+' '+'Data')   ❌ Not a good Practice i.e old practice

 console.log(`Hello My name is ${Name} and my Id Is ${Id}`)  //  ✔️ Right practice i.e new practice

//  2nd way to Declare string.String is a object. i.e key value pair
const name=new String('gaurav yadav')
console.log(name);
console.log(name[0]);
console.log(name.__proto__); 
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(2));
console.log(name.indexOf('u'));

const newString=(name.substr(0,4)); // 0 = start , 4 = length
// console.log(newString);

const newString2= name.slice(-12,4)
// console.log(newString2)

const myName="   gauravYadav  "
// console.log(myName);
// console.log(myName.trim());

const url="http://gaurav.com//gaurav%20yadav";
// console.log(url.replace('%20' , '-'));
// console.log(url.includes('gaurav'));
// console.log(url.includes('kumar'));
// console.log(name.split('_'))

let numStr="1,2,3,4,5";
let numArray=numStr.split(",");
// console.log(numArray);
let numArray2=numStr.split("2");
// console.log(numArray2);