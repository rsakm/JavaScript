
function a1(a2){
    // console.log(a2);
    console.log(typeof a2);
    console.dir(a2);

    a2();
}

// a1('Hii');
// a1({name:"Rajshree", age:21});
// a1([1,2,4,6]);

function greet(){  // callback function
    console.log("Welcome");
}

a1(greet);


function b(b2){
    console.log('Another function');
    b2();
}

b(function(){          //Anonymous function    callback function
    console.log("Hello");
})




//jab kisi function ko kisi dusre function me pass karte hai to pass kiya jane vala function call back function kahlata hai 
// Aur jisme pass kiya jata hai use higher order function kahte hain....!!!!
