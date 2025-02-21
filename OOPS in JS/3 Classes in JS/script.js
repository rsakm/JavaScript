class User{

    constructor(a,b,c){
        this.firstName = a
        this.lastName = b
        this.age = c
    }

    getBirthYear(){
        return new Date().getFullYear() - this.age
    }

    getFullName(){
        return this.firstName + " " + this/this.lastName
    }
}

const user1 = new User("Raj","shree",21);