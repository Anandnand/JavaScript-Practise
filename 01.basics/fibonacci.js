let num1=0
let num2=1
for(let i=2;i<10;i++){
   let nextNo=num1+num2
   num1=num2
   num2=nextNo
   console.log(nextNo);
}

