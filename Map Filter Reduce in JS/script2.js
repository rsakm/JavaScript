
//reduce() method

const nums = [1,2,3,4];
const sumArrayElements = nums.reduce((accumulator,current,index,array)=>{
    console.log(accumulator,current);
    return accumulator+current;
},0);   // Here 0 is the starting value of the accumulator, if we don't write anything here the first value of the original array will be the starting value of the accumulator.
console.log(sumArrayElements);