let sym=Symbol("my101")

//LITERALS OBJECT-
const obj={
    name:"pavan",
    age:23,
    location:"mysore",
    salary:null,
     [sym]:"my102"
}
//TO ACCESS OBJECT FULL PROPERTIES
console.log(obj);

// 1st TYPE OF ACCESSING OBJECT PARAMETERS
//console.log(obj.age);
//2nd  ACCESSING OBJECT PARAMETERS
//console.log(obj["location"]);  

//TO ACCESS  OBJECT SYMBOL 
//console.log(typeof obj.symbol);   //it will treat as  string instead of symbol 
//console.log( typeof obj[sym]);

obj.name="harsha"
console.log(obj.name);


//TO NOT ALLOW FOR CHANGING ANY PARAMETERS VALUE
//Object.freeze(obj)  
// obj.name="chandu"
// console.log(obj.name);




// TO DEFINE FUNCTION INSIDE OBJECT
obj.fun = function(){
    console.log(`Good morning ${obj.name}`);
}
console.log(obj.fun());   //Good morning harsha