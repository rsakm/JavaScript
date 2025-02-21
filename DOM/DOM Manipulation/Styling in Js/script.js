const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

h1.style.color='hotpink';
h1.style.backgroundColor='green';
h1.style.textAlign='center';

const allLinks = document.querySelectorAll('a');

// forEach loop

// allLinks.forEach((link)=>{
//     link.style.color='teal';
//     // link.style.textDecoration='none';
//     link.style.textDecorationLine='none'
//     link.style.fontWeight='600';
//     link.style.fontFamily='cursive';
// })


//OR in case of many properties are to be styled, we can style them as in css as follows: 

allLinks.forEach((link)=>{
    // link.style.cssText=`color:teal;
    // text-decoration-line:none;
    // font-weight:700;
    // font-size:18px;
    // font-family:cursive`;

// Another way is to style it in css file with a class name and set the class name in the js file.

    link.className='link';

    //OR 

    // link.setAttribute('class','link');


    // link.classList.add('wavy-link')
    link.classList.remove('my-link')
    // link.classList.toggle('my-link')
});


//For Of loop

// for(const link of allLinks){
//     link.style.color = 'green';

// }