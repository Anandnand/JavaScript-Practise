
//REST OPERATOR  ----TAKES ALL THE INPUT BY SINGLE PARAMETER AND CONVERT INTO ARRAY
function  newSum(...num1){
   return num1
}

console.log(newSum(100,200,300,400));


//PASSING anyOBJECT AS PARAMETER FOR FUNCTION
const mobile={
name:"oppo",
price:15000,
}

function  newObject(getobject){
return `I brought new ${getobject.name} for ${getobject.price}` 
}

console.log(newObject(mobile));

//PASSING anyARRAY AS PARAMETER FOR FUNCTION
const newArr=["oppo","vivo","samsung","iphone"]

function newobj(getarray){
    return  getarray[1]
}
console.log(newobj(newArr));
