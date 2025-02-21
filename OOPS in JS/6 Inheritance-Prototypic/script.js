class User {
   constructor(firstName, lastName, age){
    this.firstName =firstName
    this.lastName = lastName
    this.age = age
   }

   getBirthyear(){
    return new Date().getFullYear() - this.age
   }

   get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value){
        const splitted = value.split(' ')

        this.firstName = splitted[0]
        this.lastName = splitted[1]
    }
}
const user1 = new User("Raj","shree",21)
const user2 = new User("Priyaranjana","jha",22)

class Student extends User{
    constructor(firstName, lastName, age,standard){
        super(firstName,lastName,age)
        this.standard = standard
    }
  
}

const student1 = new Student("Raj","shree",21,'Btech')
const student2 = new Student("Priyaranjana","jha",22, 'Bsc')

class Employee extends User{
    constructor(firstName,lastName,age,designation){
        super(firstName,lastName,age)
        this.designation = designation;
    }
}

const employee1 = new Employee("Raj","shree",21,"front-end developer");