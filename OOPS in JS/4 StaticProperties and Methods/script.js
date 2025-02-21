class User{
    // #age  // private

    constructor(a,b,c){
        this.firstName = a
        this.lastName = b
        this.age = c
    }
    static a = 1112
    
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }

    getFullName(){
        return this.firstName + " " + this.lastName
    }
}

const user1 = new User("Raj","shree",21);