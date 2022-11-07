class Job {
  #id;
  #done;
  #title;
  #price;

  constructor(argTitle, argPrice) {
    this.#title = argTitle;
    this.#price = argPrice;
    this.#done = false;
  }

  get price() {
    return this.#price;
  }

  get isDone() {
    return this.#done;
  }

  completeJob() {
    this.#done = true;
  }
}
