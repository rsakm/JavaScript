// try{
//     console.log(a)
// }catch(errr){
//     console.log(errr)
// };

// console.log(11);

async function makeRequest(){
    try{
       const response = await fetch('https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000')
       const data = await response.json()
       console.log(data);

    }catch(errr){
        console.log(errr)
    }
}

makeRequest();