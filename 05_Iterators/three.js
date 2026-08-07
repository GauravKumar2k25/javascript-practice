//  For of 
// ["", "". ""]
// [{} , {} , {}]

const arr=[2,4,6,8]
for (const num  of arr) {
    // console.log(num);
}

const greetings="Hello World"
for (const greet of greetings) {
    if(greet==" "){
        continue;
    }
   // console.log(`each char is : ${greet}`)
}

// MAP
const map = new Map()
map.set('In' , 'India')
map.set('Fr' , 'France')
map.set('RS' , 'Russia')
// console.log(map)


for (const [key , value] of map) {
    console.log(key , ':-' ,value )
    
}

const myobj={
    game1:"NFS",
    game2:"BGMI"

}

// for (const [key,value] of myobj) {            ❌
//     // console.log(key , ':-' , value);       ❌
    
// }                                             ❌
