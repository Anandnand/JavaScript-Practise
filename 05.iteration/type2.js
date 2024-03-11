//FOR IN ==>IT WILL WORK FOR OBJECT AND IF WE USE IN ARRAY IT WILL PROVIDE THE INDEX
let user={
name:"pavan",
age:25,
city:"mysore"
}

// for (const key in user) {
//     console.log(` ${key} = ${user[key]}`);
// }


//FOR EACH   ==>IT IS USED FOR OBJECT AND ARRAY. IT WILL RETRIEVE THE DATA INDEX AND ARRAY

// let arr=["pavan","nayan","akash","harsha","appu"]
// arr.forEach( function(value ,INDEX,arr) {
//   console.log(value,INDEX,arr)
// })


//object iteration by for each
let college=[{
    name:"geck",
    city:"kr pete"
},{
    name:"gecr",
    city:"ramnagar"
},{
    name:"geckn",
    city:"kushalnagar"
},{
    name:"pes",
    city:"mandya"
}]

college.forEach((res)=>{
    console.log(`name of the college is ${res.name} and city is ${res.city}`);
})