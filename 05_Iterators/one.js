// For
for(let i=0; i<=10;i++){
    let num=i;
    if(num===5){
        // console.log("5 is a Unique")
        
    }
    // console.log(num);
}

for(let i=1; i<=2; i++){
   // console.log(`Outer Loop Value:${i}`);
    for(let j=1; j<=10; j++){
       // console.log(`Inner Loop Value: ${j}`);
        //console.log(i+ '*' + j + '=' + i*j);
    }
}

const myArray=["Batsman", "superman" ,"Flash"]
console.log(myArray.length);
for(let index=0; index<myArray.length; index++){
    const element=myArray[index];
    console.log(element);
}


//  for (let index = 1; index <= 20; index++) { 
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

