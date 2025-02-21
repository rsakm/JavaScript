function user(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age

}

user.prototype.getBirthYear = ()=> new Date().getFullYear() - this.age;

const user1 = new user("Raj", "Shree", 21);