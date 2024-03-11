let a=1;
let b=30;
for (let i= a; i<=b; i++) {
    let count=0;
    for (let j=1;j<=i;j++){
         if(i%j==0){
           count++;
         }
        }
        if(count==2){
            console.log(i);
          }
}

