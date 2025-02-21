const user = {
    firstName: "Raj",
    lastName: "Shree",
    age: 21,
    address:{
        city:"Patna",
        pin:800001
    },
    // getFullName : function(){
    //     return user.firstName + user.lastName
    // }
  }

//   console.log(user.address && user.address.city );

console.log(user.address?.city);

const a = 'city'
// console.log(user.address?.[a]);

// console.log(user.getFullName())

console.log(user.getFullName?.());

