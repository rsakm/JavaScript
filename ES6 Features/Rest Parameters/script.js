const nums1 = [1,2,3,4,5];

function add(...nums){
   // console.log(nums);
   let sum = 0;
   for(let i =0;i<nums.length;i++){
    sum += nums[i];
   }
   return sum;
}

console.log(add(1,2,3,4));
console.log(add(...nums1));

function sum(...nums){
  return nums.reduce((acc,current)=>acc+current);
}

// arguments can be converted in array as:

//[...arguments]

function addition(){
  return [...arguments].reduce((acc,current)=>acc+current)
}

//Or  : Array.from(arguments)

function summation(){
   return Array.from(arguments).reduce((acc,current)=>acc+current);
}