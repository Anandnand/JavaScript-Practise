//PROMISE  -The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



promiseThree.then(function(user){
    console.log(user);
})


//PROMISE SYNTAX

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Anand", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



//  const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(function(){
//          let error=false;
//          if(!error){
//             resolve({name:"Pavan",age:24})
//          }else{
//             reject("error: something went wrong")
//          }
//     },10)
// })


// //PROMISE HANDLING THE ASYNC OPERATION USING .THEN AND .CATCH
// promiseOne
// .then(function(user){
//     console.log(user);
//     return user.name
// })
// .then(function(username){
//   console.log(username);
// })
// .catch(function(error){
//     console.log("error");
// })

// //PROMISE HANDLING  THE ASYNC OPERATION USING .THEN AND .CATCH

// async function    consumePromiseTwo(){
//       try {
//         const response= await promiseOne
//       console.log(response);
//       console.log(response.name);
//     }catch (error) {
//         console.log("error");
//       }
//     }

// consumePromiseTwo()



//=================================================================================================================//

// //FETCH() -> LIBRARY/OBJECT THE ASYNC OPERATION USING .THEN AND .CATCH

fetch('https://api.github.com/users/Anandnand')
.then(function(response){
      const output= response.json()
      return output
}).then(function(data){
  console.log(data);
}).catch(function(error){
    console.log("error");
})


async function fetchAll(){
try{
    const output= await fetch('https://api.github.com/users/Anandnand')
    const data= await output.json()
    console.log(data);
}catch(error){
 console.log("error");
}
}


