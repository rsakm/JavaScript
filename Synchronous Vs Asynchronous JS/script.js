const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {

const xhr = new XMLHttpRequest();

console.log(xhr);

// xhr.responseType = 'json';

xhr.onload=()=>{
    image.src = JSON.parse(xhr.response).message;
    console.log(xhr);
}

xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', 'false');  // false for making the request synchronous
xhr.send();

})


/**     Asynch */


// // setTimeout(()=>{
// //     console.log("Hii");
// // }, 4000);



// alert("Hii This is an alert");

// const startTime = Date.now();
// let currTime = startTime;

// while(startTime + 2000 > currTime){
//     currTime = Date.now();
// }

// const blockingBtn = document.querySelector('.blocking-btn');

// blockingBtn.addEventListener('click',()=>{
//     const startTime = Date.now();
// let currTime = startTime;

// while(startTime + 4000 > currTime){
//     currTime = Date.now();
// }
// })



