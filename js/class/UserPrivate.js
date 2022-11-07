"use strict";
console.log("User.js");
class UserPrivate {
  // User psiaudo private property
  // private id
  #id;
  constructor(argId, argName, argTown) {
    this.#id = argId;
    this.name = argName;
    this.town = argTown;
  }

  // geteris
  get id() {
    return `${this.name} id is ${this.#id}`;
  }

  // setteris
  set id(value) {
    console.log("not alowed");
    return;
    // this.#id = value;
  }
}

// tureti id, name, town
const u1 = new UserPrivate(123, "James", "Vilnius");
// u1.#id = 500;
console.log("u1 ===", u1);
console.log("u1.id ===", u1.id);
