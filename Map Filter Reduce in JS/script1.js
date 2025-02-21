const fruits = ['Mango','Banana','Apple','Orange','Grapes'];

fruits.forEach((fruit,index)=>{
    console.log(index+1, fruit);
});

console.log("***************************");

fruits.map((fruit)=>{
    console.log(fruit);
})

console.log("***************************");

fruits.forEach((fruit)=>{
    console.log(fruit);
    return fruit.toUpperCase();
});

console.log("***************************");

const FruitsCapitalized = fruits.map((fruit,index,array)=>{
    console.log(index+1, fruit);
    // console.log(array);
    return fruit.toUpperCase();
})

console.log(FruitsCapitalized);

console.log("***************************");

// Filter method

const filteredFruits = fruits.filter((fruit,index,array)=>{
    console.log(index+1, fruit);
    return fruit.length <= 5;
})
console.log(filteredFruits);

console.log("***************************");

const filteredFruits2 = fruits.filter((fruit,index,array)=>{
    console.log(index+1, fruit);
    return fruit.toLocaleLowerCase().includes('o');
})

console.log(filteredFruits2);

console.log("***************************");

const students = [
    {
        name:"Raj",
        age : 21
    },
    {
        name:"Priyaranjana",
        age: 20
    },
    {
        name:"Ashesh",
        age:18
    },
    {
        name:"Aarti",
        age:15
    },
    {name:"Milan",
        age:17
    }
]

// const filteredStudents = students.filter((student)=>{
//     return student.age>=18
// })
// console.log(filteredStudents);

// const adultStudentsName = filteredStudents.map((student)=>{
//     return student.name;
// })
// console.log(adultStudentsName);

const adultStudentsName =students.filter((student)=>{
    return student.age>=18
}).map((student)=>{
    return student.name;
})
console.log(adultStudentsName);