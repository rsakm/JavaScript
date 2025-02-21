
console.log(Math);


/* Math object properties*/
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.E);
console.log(Math.LN2);
/**   etc  */

/**Math object methods */

console.log(Math.sqrt(17));
console.log(Math.pow(2,6));
console.log(Math.floor(5.67));
console.log(Math.floor(5.1));
console.log(Math.floor(-5.67));
console.log(Math.floor(-5.1));
console.log(Math.ceil(3.9));
console.log(Math.ceil(-3.9));
console.log(Math.ceil(2.1));
console.log(Math.ceil(-2.1));
console.log(Math.round(2.49));
console.log(Math.round(-2.49));
console.log(Math.round(2.5));
console.log(Math.round(-2.5));

console.log(Math.random());   /** 0 to 1 any random */

console.log(Math.floor(Math.random()*21));
console.log(4/0);
console.log(-9/0);
console.log(0/0);


const width = +prompt("Please Enter Rectangle Width");
const height = +prompt("Please Enter Rectangle Height");

console.log(width * height);
document.write(`Area of Rectangle is: ${width * height}`);