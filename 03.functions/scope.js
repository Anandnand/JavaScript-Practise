 
//let c=300   //GLOBAL SCOPE   //GLOBAL SCOPE SHOULD BE ACCESIBLE TO BLOCK SCOPE

if (true) {
    let a=10
    const b=20   //BLOCK SCOPE SHOULD  NOT BE ACCESIBLE TO GLOBAL SCOPE
    var c=30   
}

//console.log(a);  //it is not accessible outside the block scope
//console.log(b);     //it is not accessible outside the block scope
console.log(c);   //it is accessible and it leads to confusion


function parent(){
  const username="pavan"
  function child(){
const website="youtube"
      console.log(username+" will use "+website);  // child can access parent variables
  }
 // console.log(website);  // it is not accessible because it is inside child function
  child()
}
parent()



