let person = {
    fName: 'Raj',
    lName: 'shree',

    get fullName() {
        return `${this.fName} ${this.lName}`;
    },

    set fullName(value) {
        if (typeof value !== 'string') // Corrected typeof comparison
            throw new Error('Not a String');

        let parts = value.split(' ');
        if (parts.length !== 2) // Added a check for valid input
            throw new Error('Invalid full name format');

        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// Testing the code
try {
    // person.fullName = 7;
    person.fullName = 'Raj kumar'
    console.log(person.fullName); // Outputs: "Raj taj"
} catch (e) {
    // console.error(e.message); // Changed alert to console.error for better debugging

    alert(e)
}
