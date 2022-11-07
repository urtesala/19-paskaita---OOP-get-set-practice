class Employee extends WorkingPerson {
  constructor(argName, argLastName, argHourlyPay) {
    super(argName, argLastName);
    this.hourlyPay = argHourlyPay;
    // darbo valandoms apskaityti reiksme
    this.hoursWorked = 0;
  }

  work(howManyHours) {
    console.log(`${this.firsName} worked for ${howManyHours} hours`);
    this.hoursWorked += howManyHours;
  }

  calcPay() {
    // skirtas atvaizduoti dabartini atlyginima ir nunuliti valadas
    const pay = this.hoursWorked * this.hourlyPay;
    // console.log(`${this.firsName} salary is ${pay}`);
    this.hoursWorked = 0;
    return pay;
  }
}

// const em1 = new Employee('James', 'Bond', 10);
// const em2 = new Employee('Hana', 'Smith', 15);
// console.log('em1 ===', em1);
// em2.work(10);
// em2.work(100);
// em1.work(10);
// em1.work(50);
// console.log('em1.hoursWorked ===', em1.hoursWorked);
// console.log('em2.hoursWorked ===', em2.hoursWorked);

// console.log('em1.calcPay() ===', em1.calcPay());
// console.log('em2.calcPay() ===', em2.calcPay());
