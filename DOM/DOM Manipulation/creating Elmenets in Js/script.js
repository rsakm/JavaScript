

const h1 = document.querySelector('h1')
const container = document.querySelector(".container")

// const image = document.querySelector('img');

// for(let i =2;i<=100;i++){
//     const newImage = image.cloneNode();
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     container.appendChild(newImage);
// }


// Creating an element and adding it to the page

// const p = document.createElement('p');
// container.appendChild(p);
// p.innerText = 'Hi';
// p.classList.add('mypara');
//p.id = 'para';

const image = document.createElement('IMG');
container.append(image);
image.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;

for(let i = 2;i<=900;i++){
    const image = document.createElement('img');
    image.classList.add('images')
    image.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    image.alt=`pocoman image${i}`
    container.appendChild(image);
}