

//Global:  Window & script
//Local

//Global:  Window
const name = `Rajshree`;  // script
let age = '21';          // script
var x = 30;              // window

function sum(){         // window 
    const a = 10;       // Local
    const b = 20;       // Local
    console.log(a+b);
}

sum();

function sub(){         // window 
    const a = 10;       // Local
    const b = 20;       // Local
    const c = 19;
    console.log(a - b);
    console.log(name);

    function child(){
        const cNamme = 'Roshan';

        console.log(cNamme);
        console.log(c);
    }

    child();
}



console.log("Program finished !!");  