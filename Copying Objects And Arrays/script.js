const fruits =['Apple','Banana','Mango','Orange'];
const myFruits = fruits;

myFruits.push('Grapes');
myFruits.push('Dates');

console.log(myFruits);

console.log(fruits); // After assigning the fruits to myfruits, changes in myfruits cause changes in the original Array as well.

// The same happens in the case of Objects.    like:

const user1 = {
    firstName:'Raj',
    lastName:'Maurya'
};

const user2 = user1;
user2.lastName='Verma';

console.log(user2);
console.log(user1);
// The original object property also gets change.


const userName = "Raj";
let myName = userName;


/*      So the right ways of copying an object/ duplicating an object are:  */

// Method 1

const copiedUser1 = {};
Object.assign(copiedUser1, user1);
copiedUser1.city = 'Patna';
console.log(copiedUser1);
console.log(user1);


// Method 2 : Using Spread operator

const copiedUser2 = {...user2};
copiedUser2.city = `Patna`;
console.log(user2);
console.log(copiedUser2);

// Similarly in case of Arrays, we can use above methods
// As array is also an object, so we can use Object.assign().

const copiedFruits = [];
Object.assign(copiedFruits, fruits);

// We can  use Spread operator here as well
// Spread operators had been introduced in Es6, so the assign() method is not popular now a days.

const copiedarray = [...fruits];

// we can use concat Method as well to copy arrays

const copyArray = [].concat(fruits);
copyArray.push('Guava');
console.log(fruits);
console.log(copyArray);


// We know that slice() operator also creates a new array, so we can use this method to copy array

const copiedArray = fruits.slice();