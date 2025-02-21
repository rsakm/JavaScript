const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')
const allLinks = document.querySelectorAll('a')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

h1.style.color = 'hotpink'
h1.style.backgroundColor = 'skyblue'

// for (let i = 0; i < allLinks.length; i++) {
//   allLinks[i].style.color = 'teal'
// }


for (const link of allLinks) {
    // link.style.color = 'teal'
    // link.style.textDecorationLine = 'none'
    // link.style.fontWeight = '700'
    // link.style.fontFamily = 'cursive'
    // link.style.fontSize = '18px'

    // link.style.cssText = `
    //     color: teal;
    //     text-decoration-line: none;
    //     font-weight: 700;
    //     font-family: cursive;
    //     font-size: 18px;
    // `

    // link.className = 'green-link'
    // link.setAttribute('class', 'green-link')

    link.classList.add('green-link')
    link.classList.remove('my-link')
    // link.classList.toggle('my-link')
}

const firstLink =document.querySelector("body > p:nth-child(3) > a:nth-child(2)");


firstLink.parentElement;

firstLink.children;

firstLink.parentElement.parentElement.parentElement.children;

firstLink.nextElementSibling

firstLink.nextElementSibling.nextElementSibling

firstLink.nextElementSibling.nextElementSibling.nextElementSibling;  //null


firstLink.previousElementSibling    //<b>Frontend  development</b>

firstLink.previousElementSibling .previousElementSibling    // null

firstLink.nextSibling    //"of a website, through the use of"

console.log(typeof firstLink.nextSibling);

console.dir(firstLink.nextSibling)


firstLink.previousSibling;

console.log(firstLink.previousSibling);
console.dir(firstLink.previousSibling);
