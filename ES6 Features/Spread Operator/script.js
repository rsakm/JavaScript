const nums1 = [1,2,3,4,5];

const nums2= [6,7,8,9,]

const conCatedNums = nums1.concat(nums2);
console.log(conCatedNums);

const joinedArray = [...nums1, ...nums2];
console.log(joinedArray);

const myNAme = 'Raj';
const joinedArrays = [...nums1, ...myNAme];
console.log(joinedArrays);


const user = {
    name:"Raj",
    age : 20
}

const updatedUser = {...user, city:'Patna'}
console.log(updatedUser);


function add(){
    let sum =0;
    for(let i =0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(add(...nums1))

const firstNAme = 'Raj';
const lastNAme = 'Shree';
console.log(add(...firstNAme, ...lastNAme));