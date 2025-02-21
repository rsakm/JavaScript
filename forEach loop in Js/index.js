
const fruits = ['Apple', "Guava", "Banana", 'Orange', 'Peach', 'Mango'];

fruits.forEach(function(){
    console.log("Fruit Array")
});

console.log('**********************************')

fruits.forEach(function(fruit){
    console.log(fruit);
});

console.log('**********************************')
// or
fruits.forEach((fruit)=>{
    console.log(fruit);
});

console.log('**********************************')
// We can Pass a named function in forEach loop as well

function abc(ele){
    console.log(ele);
};

fruits.forEach(abc);