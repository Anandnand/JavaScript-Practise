
function user(username){  // THESE ARE PARAMETERS
    console.log(`${username} is just logged in`);
}

//user("pavan")   // THESE ARE ARGUMENTS
//const name=user("pavan")
//console.log(name);     //undefined beacause it is not returned any value



function add(number1,number2){ 
    return number1+number2
}

// const sum=add(5,6)   //11

//const sum=add(5,"7")  //57  it will consider as string

const sum=add(5,null)   //5
//console.log(sum);   


function  login(name="anand"){   //PASSING DEFAULT NAME
    return `${name} just logged in`
}

console.log(login());


// TWO TRYPES OF DECLARING FUNCTION
//1ST TYPE
console.log(user(5));
function user(num){
    return num+1
}

//2ND TYPE

//CALLED AS EXPRESSION
console.log(user2(6));  // Cannot access 'user2' before initialization  //error
const user2=function(num){
    return num+2
}


