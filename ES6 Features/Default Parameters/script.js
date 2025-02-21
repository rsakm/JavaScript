function multiply(a,b){
    return a*b;
}

console.log(multiply(2,3));
console.log(multiply(2));  // NAN as the second argument got value as undefined.

function mul(a,b=1){
    return a*b;
}

console.log(mul(2,3));  // a=2,b=3
console.log(mul(2));   // b =1

console.log(mul(3,undefined)); // b = 1
console.log(mul(2,null));


function rollADie(noOfSides=6){
    return Math.floor(Math.random()*noOfSides)+1;
}
