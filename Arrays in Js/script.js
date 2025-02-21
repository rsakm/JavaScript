const fruits =['Apple','Banana','Grapes','Dates'];
console.log(fruits);
console.log(typeof fruits); // object
fruits[3]="Mango";

fruits[4] ="Dates";


const array=['Apple','Banana','Grapes','Dates', null, undefined, 32,{
    name:"Raj", age:20
}];  // Arrays can store any type of data(Primitive or referenced)
console.log(array);

fruits[10]="papaya";
console.log(fruits);

// Array Methods
fruits.push('CashewNut'); // Adds element at last of the array, can have any number of parameters

fruits.unshift('Litchi'); // Adds elements in the start of the array 

const evenNumbers = [0,2,4,6,8,10];
evenNumbers.shift(); // deletes the elements from start

evenNumbers.pop(); // Deletes elements from end in the array

const oddNumbers = [1,3,5,7,9];
const concatedArray= evenNumbers.concat(oddNumbers);
// concates the arrays into a new array.
console.log(concatedArray);

console.log(concatedArray.indexOf(11));
console.log(concatedArray.includes(11));
concatedArray.reverse();
console.log(concatedArray);

