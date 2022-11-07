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
    this.projects.push(job);
  }
}
