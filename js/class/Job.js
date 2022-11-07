class Job {
  static jobCount = 0;
  // #id;
  #done;
  #title;
  #price;

  constructor(argTitle, argPrice) {
    this.#title = argTitle;
    this.#price = argPrice;
    this.#done = false;
    this.#id = `j_${++Job.jobCount}`;
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
