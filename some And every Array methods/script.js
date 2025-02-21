
const evenNumbers = [0,2,4,6,8];

console.log(evenNumbers.some((num,index,array)=>{
    console.log(num);
    return num >4;
}))

const numbers = [10,2,4,6,7];
console.log(numbers.some((num)=>{
    return num >8;
}))

const evenNums =[0,2,4,6,8,10,12,89];
const result = evenNums.some((num,index)=>{
    if(num % 2 === 1)
        console.log(index);
    return num % 2 ===1 ;
})

