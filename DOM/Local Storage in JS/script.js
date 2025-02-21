

const myname = document.querySelector('.myName');
const nameInput = document.querySelector('.name');
const myAge = document.querySelector('.myAge');
const ageInput = document.querySelector('.age');


// myname.innerText = localStorage.myName;  // OR
// myname.innerText= localStorage.getItem('Name');

// nameInput.addEventListener('input',(e)=>{
//     localStorage.myName = e.target.value;
//     myname.innerText = localStorage.myName;
// });


// nameInput.addEventListener('input',(e)=>{
//     localStorage.setItem('Name', e.target.value);
//     myname.innerText = localStorage.getItem('Name');
// });

// localStorage.removeItem('myNAme');


// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem('Age', e.target.value);
//     myAge.innerText = localStorage.getItem('Age');
// });

// myAge.innerText = localStorage.getItem('Age');


// const myData = {
//     name : '',
//     age: ''
// };

// Storing Object in localStorage using Json.stringify

const myData = JSON.parse(localStorage.getItem('myData')) || {};

nameInput.addEventListener('input',(e)=>{
    myData.name = e.target.value;

    localStorage.setItem('myData', JSON.stringify(myData));
    myname.innerText = e.target.value;
})


ageInput.addEventListener('input',(e)=>{
    myData.age = e.target.value;
    localStorage.setItem("myData", JSON.stringify(myData));
    myAge.innerText = e.target.value;
})

if(myData.name){
    myname.innerText = myData.name;
}
if(myData.age){
    myAge.innerText = myData.age;
};

const clearMyData = document.querySelector('.deletAll');

clearMyData.addEventListener('mousedown',()=>{
    localStorage.removeItem('myData');
})