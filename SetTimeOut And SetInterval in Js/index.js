
// setTimeout('console.log("Rajshree")',2000);


const timer1 = setTimeout('console.log("Hi-1")',1000);
const timer2 = setTimeout('console.log("Hi-2")',2000);
const timer3 = setTimeout('console.log("Hi-3")',3000)

const timer4 = setTimeout(a,4000);
const timer5 = setTimeout(a(),5000);  //a() returns undefined

// clearTimeout(timer2);

function a(){
    console.log("Namaste");
}



setTimeout(() => {
    console.log("Hello ji")
});