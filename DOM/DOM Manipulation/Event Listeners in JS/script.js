
const container = document.querySelector('.container');

function sayHi(){
    console.log(`Hiii`);
}


const heading = document.querySelector('h1');


console.log(heading.onclick);


// heading.onclick = sayHi;

// heading.addEventListener('click', sayHi);

// heading.addEventListener('click', function(){
//     console.log('Second Event');
// });


// document.querySelector('.card').addEventListener('click', ()=>{
//     console.log('Card was Clicked !');
// });


const addCard = document.querySelector('.card');

let count = 1;
// addCard.addEventListener('click',()=>{
//     const newCard = document.createElement('div');
//     newCard.innerText = count++;
//     // count++;
//     newCard.classList.add('card');
//     container.append(newCard);
// });



//Or

addCard.addEventListener('click',()=>{
    const newCard = addCard.cloneNode();
    newCard.innerText = count++;
    // count++;
    newCard.classList.remove('add-card');
    
    container.append(newCard);
});



