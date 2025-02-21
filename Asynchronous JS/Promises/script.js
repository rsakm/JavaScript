// let meraPromise1= new Promise(function(resolve,reject){
//     // console.log('Promise');
//     // resolve(1998);

//     setTimeout(()=>
//         console.log('Inside Promise 1')
//     ,5000);

//     resolve(2);
//     // resolve(2000);

//     // reject(new Error('Error aa gaya yrrr!!!'))
// });
// meraPromise1.then((value)=>console.log(value));

// let meraPromise2= new Promise(function(resolve,reject){
//     // console.log('Promise');
//     // resolve(1998);

//     setTimeout(()=>
//         console.log('Inside Promise 2')
//     ,3000);
//     // resolve(2000);

//     reject(new Error('Error aa gaya yrrr!!!'))
// });

// meraPromise2.catch((e)=>console.log(e));
// // console.log('First');



let firstPromise = new Promise((resolve, reject) => { setTimeout(()=>console.log('SetTimeout 1 started'),2000)
    resolve(true);
});

firstPromise.then(()=>{
    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('SetTimeOut 2 started')
        },3000)
        resolve('Promise 2 resolved')
    });

    return promise2;
}).then((value)=>console.log(value));