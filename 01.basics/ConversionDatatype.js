//let score=100
// console.log(typeof score)

// let StringScore=String(score)
// console.log(typeof StringScore);

// let BooleanScore=Boolean(score)
// console.log( BooleanScore);
// console.log(typeof BooleanScore);

/*======================================================================*/

// let marks=null
// console.log(typeof marks);

// let  IntegerMarks=Number(marks)
// console.log(IntegerMarks);  
// console.log(typeof IntegerMarks);

/*=====================================================================*/
// let grades="333abc"
// let NumberGrades=Number(grades)
// console.log(NumberGrades)  /* NaN-->not a number */

//Boolean conversion
// 1=>true , 0=>false


//TAKING INPUT FROM USER AS STRING AND CONVERTING INTO A NUMBER
let id=parseInt(document.getById('text').value)
console.log(id);



//COLLECTING INPUT FROM SERVER AND CONVERTING INTO JSON TYPE
const output= await fetch('https://api.github.com/users/Anandnand')
const data= await output.json()
