const marvel=["thor","ironman","captain","natasha"]
const dc=["superman","batman","aquaman"]

//marvel.push(dc)
//console.log(marvel);  //it will push adc as one of the element   ['thor','ironman','captain','natasha',[ 'superman', 'batman', 'aquaman' ]]
 

let all=dc.concat(marvel)
//console.log(all);

let arr=[1,2,3,4,[5,6,7],8,9,[10,11,12,[13,14]]]
let arr1=arr.flat(Infinity)  //IT WILL MERGE ALL ARRAY
//console.log(arr1); //[    1,  2, 3,  4,  5,  6, 7,  8, 9, 10, 11, 12, 13, 14]


//console.log(Array.from("pavan")); //PROVIDE THE ARRAY FROM INPUT

let a=100
let b=200
let c=300
console.log(Array.of(a,b,c));   //it will make as array



