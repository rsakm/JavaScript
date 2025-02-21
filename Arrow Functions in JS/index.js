
//  // Function Declaration
// function square(a){
//     return a*a;
// }


// // // Function Expression

// const square = function(a){
//     return a*a;
// }

// // Arrow Function Expression

// const square = (a)=>{
//     return a*a;
// }

// or

const square = (a)=> a*a;
// const square = a=> a*a;

const sum = (a,b)=> a+b;

const subtract = (a,b)=> a-b;

setTimeout(()=>{
    console.log('Hii')
},3000);

const random = ()=>Math.random();

const randomNum = ()=>(Math.floor(Math.random()*10)+1);