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