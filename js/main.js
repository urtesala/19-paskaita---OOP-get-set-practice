"use strict";
console.log("main.js");
const ulEl1 = document.getElementById("ul1");

// const w1 = new WorkingPerson('Jane', 'Doe');
// console.log('w1.email ===', w1.email);

// darbuotoju masyvas
const workersArr = [
  new Employee("James", "Bond", 10), // 0
  new Employee("Hana", "Smith", 15), // 1
  new Employee("Mike", "Tyson", 25), // 2
  new Freelancer("Serbentautas", "Bordiuras"), // 3
  new Freelancer("Lenteja", "Ceses"), // 4
];

// sukuriam darba
const workArr = [
  new Job("Footer Layout", 200), // 0
  new Job("Header Layout", 300), // 1
  new Job("Mobile Layout", 700), // 2
  new Job("Navigation", 100), // 3
  new Job("Navigation mobile", 200), // 4
];

const workList = new WorkersList();
// workList.addWorker({ name: 'Mike', surname: 'Till' });
workList.addWorkerList(workersArr);
console.log("workList.list ===", workList.list);
{
  // priskirti freelanceriam darbus
  // workersArr[3].addProject(workArr[0]);
  // workersArr[3].addProject(workArr[1]);
  // workersArr[4].addProject(workArr[2]);
  // workersArr[4].addProject(workArr[3]);
  // workersArr[4].addProject(workArr[4]);
  // fr1.addProject({ name: 'Mobile layout', pay: 500 });
  // uzbaigti pirmaji darba
  // workersArr[3].finishProject(workArr[0]);
  // workersArr[3].finishProject(workArr[1]);
  // workersArr[4].finishProject(workArr[2]);
  // workersArr[4].finishProject(workArr[3]);
  // darbus dirba employee
  // workersArr[0].work(100);
  // workersArr[1].work(160);
  // workersArr[2].work(180);
  // skaiciuojam algalapius
  // workersArr.forEach((worker) => {
  //   const workerName = worker.email;
  //   const pay = worker.calcPay();
  //   console.log(`${workerName} to be payed ${pay} eur`);
  // workersArr.forEach((worker) => {
  //   const workerName = worker.fullName;
  //   const pay = worker.calcPay();
  //   console.log(`${workerName} to be payed ${pay} eur`);
  //   generateAndAddLi(workerName, pay);
  // });
  // function generateAndAddLi(email, pay) {
  //   const liEl = document.createElement("li");
  //   liEl.textContent = `${email} to be payed ${pay} eur`;
  //   ulEl1.append(liEl);
  // }
  // workersArr.forEach(console.log);
}
