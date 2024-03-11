const arr=[4,5,7,6,9,8,3]
//console.log(arr);

arr.push(10)   //ADD THE ELEMENT
//console.log(arr);

arr.pop()     // DELETE THE LAST ELEMNT
//console.log(arr);

arr.unshift(2)   // ADD THE NEW ELEMENT AND SHIST THE REMAINING ARRAY ELEMENT TO NEXT INDEX
//console.log(arr);

arr.shift()  // REMOVE THE ADDED ELEMENT FROM FIRST SHIFT BACK NEXT ELEMENTS TO BACKWORDS
//console.log(arr);

arr.sort()
//console.log(arr);  //SORT THE ELEMENT

const arr3=arr.join()  //IT WILL CONVERT TO STRING TYPE 3,4,5,6,7,8,9
console.log(arr3);

const arr1=arr.slice(1,3)  // SLICE WILL PROVIDE THE ELEMENTS BETWEEN THE RANGES BUT  IT WILL NOT INCLUDE RANGE
//console.log("A-",arr); // AND IT WILL NOT AFFECT THE ORIGINAL ARRAY    A [3, 4, 5, 6, 7, 8, 9]
//console.log(arr1);   //[  4, 5 ]


const arr2=arr.splice(1,3) // SPLICE WILL PROVIDE THE ELEMENT BETWEEN RANGES BY INCULDING RANGES
//console.log("B-", arr); // AND IT WILL AFFECT THE ORIGINAL ARRAY AS LIKE THIS  B [ 3, 7, 8, 9 ] 
//console.log(arr2); //[  4, 5, 6]
