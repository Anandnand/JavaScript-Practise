//IF AND ELSE 
let score=10
if (score>10) {
    console.log(`score is less than ${score}`);
}else if(score >10){
    console.log(`score is greater than ${score}`);
}else{
console.log(`score is equal to ${score}`);
}


//SWITCH
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter a month (1-12): ', (month) => {
// switch (parseInt(month)) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//        break;
//     case 3:
//         console.log("march")
//         break;
//     default:
//         console.log("other days");
//         break;
// }
// rl.close()
// })

//TERNARY OPERATOR
let age=18
age>=20?console.log(false):console.log(true);

//false,0,-0,Bigint- 0n,"",null,undefined,Nan   ===>false values

//"0",'false',[],{},function(){ }, " "   ===>true values


//nullish  coalescing operator(??):null defined  ====>to get the other values except null value and undefined

// let num=10 ?? 20
// console.log(num);

// let num1=null ?? 30
// console.log(num1);