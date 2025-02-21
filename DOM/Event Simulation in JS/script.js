const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input');
const form = document.querySelector('form');

let count = 1



setTimeout(()=>{
    input.focus();
},1000)


setTimeout(()=>{
    input.blur();
},3000)

// setTimeout(()=>{
//     form.submit();
// },3000)


addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})


// for(let i = 1; i<= 1000;i++){
//     setInterval(()=>{
//         addCardBtn.click();
//     },10)
// }


//OR

const intervalId = setInterval(()=>{
    if(count > 999){
        clearInterval(intervalId);
    }
    addCardBtn.click();
},50)