class Freelancer extends WorkingPerson {
  projects = [];
  constructor(name, surname) {
    super(name, surname);
  }

  /**
   * Adds a job to freelanrers job list
   * @param job - instance of Job
   */
  addProject(job) {
    // patikrinti ar darbas sukurtas pagal JOB klase
    if (job instanceof Job) {
      this.projects.push(job);
    } else {
      throw new Error("Not valid job");
    }
  }

  finishProject(job) {
    if (job instanceof Job) {
      // pabaigti darba
      job.completeJob();
    } else {
      throw new Error("Not valid job");
    }
  }

  calcPay() {
    // surasti visus pabaigtus darbus
    const comletedJobs = this.projects.filter((job) => job.isDone);
    // console.log('comletedJobs ===', comletedJobs);
    // sudeti pabaigtu darbu kainas
    const doneJobPay = comletedJobs.reduce(
      (total, job) => total + job.price,
      0
    );
    // console.log('doneJobPay ===', doneJobPay);
    // istrinti pabaigtus is projects masyvo
    this.projects = this.projects.filter((job) => !job.isDone);
    // console.log('this.projects ===', this.projects);
    // grazinti moketina suma
    return doneJobPay;
  }
}
