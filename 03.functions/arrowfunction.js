const user={
    username:"pavan",
    age:25,                     //THIS KEYWORD WILL PRINT CURRENT CONTEXT DATA INSIDE THE OBJECT
    printmessage:function(){
    console.log(`${this.username} welcome to website`);
   // console.log(this);   //{ username: 'pavan', age: 25, printmessage: [Function: printmessage] }
}
}

//user.printmessage()
//NODE ENVIRONMENT
//console.log(this);   //{}  it will print empty object in node

//BROWSER ENVIRONMENT
//console.log(this);   //  it will print windows object in browser


function chai(){
  const username="pavan"
  //console.log(this.username);   //this keyword for accessing variables is not work in function
   console.log(this);  
    /*<ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    navigator: [Getter],
    fetch: [Function: fetch],
    crypto: [Getter]
  }  output for this ketword inside the function*/  
}

//chai()



//ARROW FUNCTION

const res=(num1,num2) => {
  return num1+num2
}                     //arrow function mainly used in react classes         

console.log(res(4,7));

//OR
//IMPLICIT ARROW FUNCTION
const res1=(num1,num2) =>(num1+num2)  
console.log(res1(7,7));   //IF WE MENTION WITHIN PARANTESIS WE SHOULD NOT MENTION RETURN 

const res2=() =>({username:"pavan"})   //for returning object we should mention within curly bracis
console.log(res2());