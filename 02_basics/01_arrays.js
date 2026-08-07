// Arrays

const myArr=[1,2,3,4,5];
const myHeors=["shaktiman","Devil"]

const myArr2 = new Array(2,6.8,10);
 console.log(myArr[4]);

// ye value ko add karta hai array mai

 myArr.push(9);
 console.log(myArr);

//  ye value ko remove karta hai;
myArr.pop();
 console.log(myArr);

//  Ye Value ko 1st Index par set karta hai
myArr.unshift(8);
 console.log(myArr);

//  Ye unshift value ko remove karta hai;
myArr.shift();
 console.log(myArr);

//  Ye value ko Check karta hai arrays maim available hai ki nahi Or Boolean Output Deta hai;
console.log(myArr.includes(9));
console.log(myArr.includes(5));

//Ye Index Batata hai.
console.log(myArr.indexOf(5));
console.log(myArr.indexOf(9));


// Adds all the Elements in a string and seperate by specified seperator;
const myNewArr=myArr.join();
console.log(myArr);
console.log(myNewArr);
console.log(typeof(myNewArr));

// slice and splice 
// slice-The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end 
// of the array. For example, -2 refers to the second to last element of the array.


console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

// original array manipulate ho jata hai;
console.log("C ", myArr);
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
