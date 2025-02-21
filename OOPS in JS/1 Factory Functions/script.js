const user = {
    firstName : 'Raj',
    lastName : 'Shree',
    age: 21,

    getBirthYear: function(){
        return new Date().getFullYear() - user.age;
    },
    
}