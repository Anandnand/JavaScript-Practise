
// console.log(1>2); /* there is no problem in single datatype comparison */
// console.log(2==2);
// console.log(5<=8);


/*  In different datatype comparison it leads confusion */
console.log("2">1);  // it converts datatype
console.log(null >0); // sometimes it converts to NAN
console.log(null ==0);
console.log(null <=0); // sometimes it converts to 0


/* comparing the datatype */
console.log("45" === 45); // it will not convert datatype it will directly compare



