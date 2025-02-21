//Adding 100 para

// const t1 = performance.now();
// for(let i = 1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent='This ia a para';

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log(t2-t1);


// //Optimising a bit
// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for(let i =1;i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent='This is a para';

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log(t4-t3);


// Fragments in JS

// let t5 = performance.now();
// let fragment = document.createDocumentFragment();
// for(let i =1;i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent= 'This is a para;'

//     fragment.appendChild(element);
// }

// document.body.appendChild(fragment);
// let t6 = performance.now();

// console.log(t6-t5);


// --> Single Threading

function addpara(){
    let para = document.createElement('p');
    para.textContent= 'This is a para';
    document.body.appendChild(para);
}

function appendNewmsg(){
    let para = document.createElement('p');
    para.textContent = 'This is another para';
    document.body.appendChild(para);
}

addpara();
appendNewmsg();

