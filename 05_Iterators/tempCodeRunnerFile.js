const coding=["Cpp" , "python" , "javascript" , "Java" , "Python" , "Java" , "swift" ]
coding.forEach(function(val){
//console.log(val);
})

coding.forEach( (char)=>{
// console.log(char)
})

function printme(item){
//console.log(item)
}
coding.forEach(printme)


coding.forEach((item,index,arr)=>{
    //console.log(item , index , arr)
})

const mycoding=[{
    language:"Javascript",
    languagetype:"js"
    },
    {
    language:"python",
    languagetype:"py"
    },
    {
    language:"c++",
    languagetype:"cpp"

    }
]
mycoding.forEach((item)=>{
    console.log(item.language)
})