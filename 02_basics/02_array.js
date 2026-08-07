const marvel_heroes=["Thor" ,"Raftar" ,"spiderman"];
const dc_heroes=["Superman" ,"Flash" ,"Batman"];
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
console.log(marvel_heroes[3][2]);
const all_heroes=marvel_heroes.concat(dc_heroes);
console.log(all_heroes);
// Concat or spread operator
const all_New_heroes=[...marvel_heroes,...dc_heroes];
console.log(all_New_heroes);


const another_array=[1,2,3,4,[5,6,7,8,9],10,11,12,13];

// ye jitna bhi depth mai ja kar element print karwana chahe print kar dega;
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Gaurav"));

// Iske Andar Kaisa bhi Value denge Array bana Dega .object bhi de sakte hai ,string bhi de sakte kuch bhi de sakte hai;
console.log(Array.from("Gaurav"));


//Isme Batana hoga ki kiska Array Banana Hai key ka ya phir value .Agar nahi batyenge to empty dega;
console.log(Object.keys({name: "gaurav"}));
console.log(Object.values({name: "gaurav"}));



let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


// ● Array Destructuring:
// <!-- end list -->
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
console.log(red); // Outputs: 255
console.log(green); // Outputs: 128

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8]

const number = [1, 2, 3, 4, 5, 6];
const evens = number.filter(n => n % 2 === 0);
console.log(evens); // Outputs: [2, 4, 6]

const one = [1, 2, 3, 4];
const sum = one.reduce((accumulator, currentValue) => accumulator
+ currentValue, 0);
// The '0' is the initial value of the accumulator
console.log(sum); // Outputs: 10
