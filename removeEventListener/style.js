function eventFunction(){
    console.log('Document is clicked');
}

// document.addEventListener('click',eventFunction);
// document.removeEventListener('click',eventFunction);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// })

let links = document.querySelectorAll('a');

links[1].addEventListener('click' ,function(event){
    event.preventDefault();
    console.log('Ullu Banaya, Bada Maza Aaya')
})