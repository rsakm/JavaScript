const input = document.querySelector('#userName');
const paragraph = document.querySelector('p');


let inputValue ;

// input.addEventListener('input',(e)=>{
    // console.log(e);
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

// console.log(inputValue);

// input.addEventListener('change',(e)=>{
//     console.log(e);
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

// input.addEventListener('focus',(e)=>{
//     // console.log(e);
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });


// input.addEventListener('blur',(e)=>{
//     // console.log(e);
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// });

form.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e);
    // console.log('From Clicked');
})


const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    console.log(e);
    // e.preventDefault()
    //     console.log('From Submitted');
})