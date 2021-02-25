class Parent{
    constructor(){
        this.fatherName = "Chowdhury";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    // getFullName(){
    //     return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Nayab");
const baby2 = new Child("Showrav");
console.log(baby);
console.log(baby2);

// console.log(baby.getFullName());