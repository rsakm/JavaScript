// const user = {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   };


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));


const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {

  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => {
      image.src = json.message
    })

// const xhr = new XMLHttpRequest();
// console.log(xhr);

})
      
