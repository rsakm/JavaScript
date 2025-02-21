async function abcd(params) {
    return 7;    
}

console.log(abcd());

async function weather() {
    let PatnaWeather = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Patna me Bhot Thandi hai!!");
        },2000)
    });
    
    
    let DelhiWeather = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("delhi me v Kafi Thandi hai!!");
        },4000)
    });
    let patnaMausam = await PatnaWeather;
let delhiWeather =await DelhiWeather;
return(patnaMausam,delhiWeather);
};

