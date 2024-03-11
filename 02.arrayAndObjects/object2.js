//singleton object  which is built using constructor






















//DE-STRUCTURE OF OBJECT

const customer={
    name:"pavan",
    age:24,
    order:["shoes","shirt","books"],
    price:2000
}
// console.log(customer.order);
// console.log(customer.price);

//DESTRUCTURE OF OBJECT   making shorcut name for object peoperties

const{order:bookings}=customer;
console.log(bookings);

const{price:cost}=customer
console.log(cost);


//API -communication between application and the server which provides the response in JSON format ex:
//1-OBJECT JSON TYPE
// {
//     "name":"anand",
//     "age":24,
//     "place":"mysore"
// }

//2-ARRAY JSON TYPE
[
    {"fullname":
        {"firstname":
        {
         }
        }
    }
]

