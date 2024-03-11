/* primitive datatype --- Non-reference datatype */
//1- Number ,
let num=100
console.log(typeof num);  //number

//2-String ,
let str="pavan"
console.log(typeof str); // string

//3-Boolean ,
let isValid=true
console.log(typeof isValid);  //boolean

//4-null ,
let isFull=null
console.log(typeof isFull);  //object

//5-Undefined, 
let course;
console.log(typeof course);  //undefined

//6-BigInt
let bigNum=673673622687669n
console.log(typeof bigNum);     //bigint

//7-Symbol [ for making unique values ] 
let number=Symbol(100)  
console.log(typeof number);     //symbol



/* non-primitive datatype  ---reference datatype */
//1-Array
let arr=["pavan","anand","harsha"]
console.log(typeof arr);   //object

//2-Objects
let obj={
    id:1,
    name:"pavan"
}
console.log(typeof obj);  //object

//3-Functions
let Fun=function(){
console.log("");
}
console.log(typeof Fun);  //function


