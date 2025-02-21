const resolveBtn = document.querySelector('#resolve-btn');
const rejectBtn = document.querySelector('#reject-btn');


const promise = new Promise((resolve,reject)=>{
    // resolve('Rajshree')

    // reject('Promise rejected')

    // setTimeout(() => {
    //     resolve('Rajshree')
    // }, 8000);

    resolveBtn.addEventListener('click',()=>{
        resolve('Promise resolved.')
    })

    rejectBtn.addEventListener('click',()=>{
        reject('Promise rejected.')
    })
})

promise.then((data)=>{
    console.log(data)
}).catch((error)=>{
console.log(error)
})