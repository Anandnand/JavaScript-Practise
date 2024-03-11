//IIFE=>IMMEDIALTELY INVOKED FUNCTION EXPRESSION

//IIFEs prevent pollution of the global JS scope. In a traditional function, 
//if you create a variable within the function, it is accessible in the global object. 
//If you define a variable in an IIFE, it is accessible only directly within the function.

 //NAMED IIFE
(function  chai(){
    console.log("good morning");
})();  //to end  one iife we should mention semicolon


//UNNAMED IIFE
//PASSING PARAMETER THROUGH ARROW FUNCTION
( (name) => console.log((`good morning ${name}`)))('Anand');

