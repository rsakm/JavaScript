// console.log('Namaste');

// function sync(){
//     console.log('Hi');
// }
// sync();
// console.log('synchronous code ends here');


setTimeout(() => {
    console.log('Asynchronous code')
}, 3000);

function sync(){
    console.log('Synchronous code')
};

sync();
console.log('Khatam Tata Bye Bye !!');

