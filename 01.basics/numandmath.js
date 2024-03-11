/*
let number=123
console.log(number); //123

let num=new Number(1234)
console.log(num);   //[Number: 1234]

 num=12.014
 console.log(num.toFixed(2)); //12.00

 num=122.645
 console.log(num.toPrecision(3));  //123
 console.log(num.toPrecision(2));   //1.2e+2

num=1000000;
console.log(num.toLocaleString());  //usa standard
console.log(num.toLocaleString('en-IN')); //indian standard
*/

/*=================================================================================*/
                                 /* math */

let score=1234.768
console.log(Math.round(score));  //round off

console.log(Math.floor(score));   // round of to the lowest value

console.log(Math.ceil(score));   // round of to the highest value

let min=10
let max=20
console.log(Math.round());  // print range between 0 to 1
console.log(Math.floor(Math.random()*(max-min+1)+min));  //print the values between this range
 

