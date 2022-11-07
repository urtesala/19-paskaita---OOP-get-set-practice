"use strict";
console.log("main.js");

const w1 = new WorkingPerson("Jane", "Doe");
console.log("w1.email ===", w1.email);

const fr1 = new Freelancer("Serbentautas", "Bordiuras");
console.log("fr1 ===", fr1);

// sukuriam darba
const workArr = [new Job("Footer Layout", 200), new Job("Header Layout", 300)];

// priskirti pr1 darba fr1 zmogui
fr1.addProject(workArr[0]);
fr1.addProject(workArr[1]);
// fr1.addProject({ name: 'Mobile layout', pay: 500 });

// uzbaigti pirmaji darba
fr1.finishProject(workArr[0]);
