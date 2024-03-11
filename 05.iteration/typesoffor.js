
//FOR OF ===>IT WILL WORK ONLY FOR ARRAYS AND MAPS. IT WILL NOT WORK FOR OBJECTS

let arr=[2,3,4,5,6,7,8,9]
// for (const i of arr) {
//     console.log(i);
// }

let map=new Map()
map.set("karnataka","bangalore")
map.set("tamilnadu","chennai")
map.set("andhra pradesh","vishakapatnam")

for (const [key,value] of map) {    //special syntax for iterating map
    console.log(`${key} => ${value}`);
}


