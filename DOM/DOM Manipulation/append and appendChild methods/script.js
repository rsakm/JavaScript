const container = document.querySelector(".container")
const card = document.querySelector('.card')

const h1 = document.querySelector('h1');

// container.appendChild(h1);

// container.appendChild(h1.cloneNode(true));

// container.appendChild(h1.cloneNode())



container.appendChild(card.cloneNode(true));
// container.appendChild(card.cloneNode());

// function append(){
//     for(let i = 2;i<=100;i++){
//         const newCard = card.cloneNode();
//         newCard.innerText = i;
//         container.appendChild(newCard);
//     }
// }

// append();

for(let i = 2;i<=100;i++){
    const newCard = card.cloneNode();
    newCard.innerText = i;
    container.appendChild(newCard);
}