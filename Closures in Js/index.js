function parent(){
    const a = 4;
    const b = 6;
    return function add(){
        console.log(a+b);
    }
}
const add1 = parent();
console.log(add1);
console.dir(add1);