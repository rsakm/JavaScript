
const fruits = ['Apple', 'Banana', 'Grapes', 'Mango','Peach'];

for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// Here i is initialized with let which is the best of all. i.e in case of const, it will give error as i is being updated. Also if we initialize i with var then it will be accessible in the globe which will not let the last value of i deleted automatically even it is not in use.

console.log('********************************');

for(const fruit of fruits){
    console.log(fruit);
}

// Here fruit is initialized(declared) with const. we can use let also but var will again let the last value of fruit accessible even after the loop ends and the variable is not in use i.e the memory allocation won't be deleted.


const myName = 'Rajshree';
for(const letter of myName){
    console.log(letter);
}

// i.e for of can be used over iterables
// It can't be used over object, as object is not iterable

const person = {
    firstName:'Rahul',
    lastANme: 'Maurya',
    age : 21,
    city: 'Patna'
}

// for(const letter of person){  // Error: PErson is not iterable
//     console.log(letter);
// }


// so for this, for in loop is there for us

for(const key in person){
    console.log(key,":",person[key]);
}


 // but we can use this in more faster way as:
 const personKeys = Object.keys(person);
 for(const key of personKeys){
    console.log(person[key]);
 }

 const personValues = Object.values(person);
 const personEnteries = Object.entries(person);
 console.log(personEnteries);