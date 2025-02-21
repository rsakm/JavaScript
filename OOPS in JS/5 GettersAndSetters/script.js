const user = {
    fName:"Raj",
    lName:"Shree",

   get fullName(){
        return `${this.fName} ${this.lName}`
    },

    set fullName(value){
        const splitted = value.split(' ')

        this.fName = splitted[0]
        this.lName = splitted[1]
    }
}