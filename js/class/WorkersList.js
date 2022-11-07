class WorkersList {
  #list = [];

  addWorker(workerObj) {
    // if (workerObj instanceof Employee || workerObj instanceof Freelancer) {
    //   this.list.push(workerObj);
    // } else {
    //   throw new Error('Only valid workers please');
    // }

    // exit clause
    if (
      !(workerObj instanceof Employee) &&
      !(workerObj instanceof Freelancer)
    ) {
      throw new Error("Only valid workers please");
    }
    this.#list.push(workerObj);
  }

  addWorkerList(arr) {
    arr.forEach((w) => this.addWorker(w));
  }

  get list() {
    return this.#list;
  }
}
