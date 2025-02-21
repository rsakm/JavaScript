const container = document.querySelector('.container');

// const imgContainer = document.createElement('div');
// imgContainer.classList.add('img-container');

// const newImage = document.createElement('img');
// newImage.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png';

// const p = document.createElement('p');
// p.innerText = 2;

// imgContainer.append(newImage, p);
// container.append(imgContainer);



// for(let i = 1;i<=100;i++){
//     const imgContainer = document.createElement('div')
//     imgContainer.classList.add('img-container');

//     const myHtml = `
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"> 
//     <p>${i}</P>
//     `;

//     imgContainer.innerHTML=myHtml;
//     container.append(imgContainer);
// }




//OR

// for(let i = 1; i <= 100; i++) {
//     const imgContainer = document.createElement('div')
//     imgContainer.classList.add('img-container')

//     const newImage = document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     const paragraph = document.createElement('p')
//     paragraph.innerText = i

//     imgContainer.append(newImage, paragraph)
//     container.append(imgContainer)
// }


//OR Approach 3
let myHTML = ``

for (let i = 1; i <= 100; i++) {
  myHTML += `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
        <p>${i}</p>
    </div>
    `
}

container.innerHTML = myHTML

