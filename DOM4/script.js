// setTimeout(function(){
//     console.log('first')
// },3000);


// function sync(){
//     console.log('second');
// }
// sync();
// console.log('third');

// API - Application Programming Interface

// Connection between frontEnd and Backend 


// Establishes a communication between two software components.

              // Promises ///

// Used for parallel execution in background. It is an async code.

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{console.log('I am a Promise 1');

//     },5000);
    
//     resolve(2000);
//     // reject('Promise Reject ho gaya re !!!!');
// });

// promise1.then((value)=>{
//     console.log(value);
// })


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{console.log('I am a Promise 2');

//     },3000);
    
//     // resolve(2000);
//     reject('Promise 2 Reject ho gaya re !!!!');
// });

// promise2.catch((error)=>{
//     console.log(error);
// })

// console.log('Outside promise');


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('SetTime Out started');
//     },2000);

//     resolve(true);
// }).then(()=>{
//     let promise2 = new Promise((resolve,reject)=>{
//         resolve('Promise 2 resolved');
//     });
//     return promise2;
// }).then((value)=>{
//     console.log(value)
// })

// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();

//     console.log(output);
// }

// utility();






