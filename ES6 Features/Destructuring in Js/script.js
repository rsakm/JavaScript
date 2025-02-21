
//Destructuring an Array

const colors = ['Pink','Red','Green','Black','Yellow'];

// const color1 = colors[0];
// const color2 = color1[1];

const [color1] = colors;
console.log(color1); // Pink

// const [color1,color2,color3]=colors;
// //color1 = Pink, color2 = Red, color3 = Green

// const [ color1,color2,color3,color4,color5,color6]=colors;

// //color1 = Pink, color2=Red, color3=Green, color4=Black,color5=Yellow, color6 = undefined;


const [,,color3] = colors;
console.log(color3);


// Destructuring an Object

const user = {
    name : 'Rajshree',
    age : 20,
    address : {
        city : 'Patna',
        state : 'Bihar',
    },
}

// const age = user.age;
// const name = user.name;

const {name,age} = user;
console.log(name+" "+age);

const {userAge} = user;
console.log(userAge);  // Undefined as userAge is not defined in the object user
//If we want age as userAge:

const {name:userName, age:userkiAAyu}=user;
console.log(userName+" : "+userkiAAyu);

const {address} = user;
console.log(address)  // A variable with name address has been created which is an object(as address is an inner object in user)


//Multilevel Destructuring
const {address:{city,state}} = user;
console.log("Address : "+city, state); // In this case there is no variable with name address but a variable with name city has been created & it has been assigned a value 'Patna'. 
//Also a variable with name state


// We know array is also an object so the elements are in key value pair of index:value.
//So we can randomly access an element by destructuring as:
const {3:color4} = colors;
console.log(color4);


//Destructuring Parameters of a function

function intro(userObj){
    console.log(userObj);
}

intro(user);

function nameAge({age, name}){
    console.log(name , age)
}
nameAge(user);

function printColors(colorsArray){
    console.log(colorsArray)
}
console.log(colors);  // without destructuring

//After destructuring
function colorsPrint([color1,color2,,color4]){
    console.log([color1,color2,color4])
}

colorsPrint(colors);