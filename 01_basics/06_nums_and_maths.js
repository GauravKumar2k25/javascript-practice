const score=400;
console.log(score)

const newscore = new Number(100);
console.log(newscore)
console.log(newscore.toString().length); 
console.log(newscore.toFixed(2));


const otherNumber=123.7907;
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

const hundreds=10000000;
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(9,7,5,2));
console.log(Math.max(9,7,5,2));

console.log(Math.random());
console.log((Math.random()*10)+1);


const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1)) + min)