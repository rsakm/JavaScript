const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {

const xhr = new XMLHttpRequest();

// xhr.responseType = 'json';

// xhr.addEventListener('load',()=>{
//     console.log(JSON.parse(xhr.response));
//     image.src = JSON.parse(xhr.response).message;
//     console.log(xhr);
// })

xhr.onload=()=>{
    image.src = JSON.parse(xhr.response).message;
    console.log(xhr);
}

xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
xhr.send();

})