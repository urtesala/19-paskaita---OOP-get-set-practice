class Person {
  constructor(birthDate, name) {
    this.name = name;
    this.born = birthDate;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    const currAge = currentYear - this.born;
    console.log("currAge ===", currAge);
    return currAge;
  }

  sayHi() {
    console.log(`Hello I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(university, name, wasBorn) {
    // pries naudojan this, turim iskviesti tevines klases konstruktoriu su super()
    super(wasBorn, name);
    this.uni = university;
  }
  // metodo override
  sayHi() {
    console.log(`Hello I am ${this.name} and I study in ${this.uni}`);
  }
}

const p1 = new Person(1956, "James");
p1.age;
p1.sayHi();
const st1 = new Student("KTU", "Mike", 1995);
console.log("st1 ===", st1);
st1.age;
st1.sayHi();
