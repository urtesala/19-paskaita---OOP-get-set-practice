"use strict";
console.log("User.js");
class User {
  // User psiaudo private property
  _id;
  constructor(argId, argName, argTown) {
    this._id = argId;
    this.name = argName;
    this.town = argTown;
  }

  // geteris
  get id() {
    return `${this.name} id is ${this._id}`;
  }

  // setteris
  set id(value) {
    console.log("not alowed");
    return;
    // this._id = value;
  }
}

// tureti id, name, town
const u1 = new User(123, "James", "London");
u1.id = 500;
console.log("u1 ===", u1);
console.log("u1.id ===", u1.id);
