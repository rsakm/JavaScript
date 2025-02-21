const user1 = {
    firstName:'Rakesh',
    lastName: 'Maurya',
    age:26,
    education:12,
    city:'Patna'
}
console.log(user1);
const user2 = {
    firstName:'Rakesh',
    lastName: 'Maurya',
    age:26,
    education:12,
    city:'Patna'
}
console.log(user2);
console.log(user1==user2);

const username1 = 'raj';
const userName2 = 'raj';
console.log(username1==userName2);

const myName = `Rajshree`
const user ={
    firstName:'Raj',
    'Last-Name':'Maurya',
    'Rajshree':'Developer'
}
console.log(user.firstName);
console.log(user["Last-Name"]);
console.log(user[myName]);
console.log(user["first"+"Name"]);

const user3={
    firstName:'Rakesh',
    lastName: 'Maurya',
    address:{
        city:"Patna",    /// user3.address.city
        pin:800001,
        state:"Bihar"
    }
}
user3.age = 26;  //new property or functionality can be added in a object

user3["is-Student"]=true;
console.log(user3);
delete user3["is-Student"];

Object.seal(user3);
/** seal() prevents deleting or adding new property or functionality in gthe object */
// But still we can change the existing property of an object.
// i.e user3.firstName:"akash";

// object.freeze() is stricter than seal(), it prevents changing the existing property as well as adding or deleting a property

Object.freeze(user3);

/** Check whether a property exists in an object or not */

'mobileNumber' in user3;  // false