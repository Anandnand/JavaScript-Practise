let newdate=new Date()
// console.log(newdate); //2024-01-22T16:39:27.090Z

// console.log(newdate.toString()); //Mon Jan 22 2024 22:10:15 GMT+0530 (India Standard Time)

// console.log(newdate.toLocaleString()); //22/1/2024, 10:10:45 

//console.log(newdate.toLocaleDateString()); //22/1/2024

let dt=new Date(2024,0,22,8,55)
//console.log(dt.toLocaleString()); //22/1/2024, 8:55:00 am
 
//console.log(dt.getTime()); //1705893900000   // to get the mention time in milli seconds 

let newdt=Date.now()  //for comparison pf dates we will use
//console.log(newdt); // counting of time till now in milliseconds


let d=new Date(2024,0,21,8,30,55)   //we will use date and time in string interpolation like this
console.log(`rohith sharma scored is ${100} on ${d.toLocaleString()} against afghanistan`)
