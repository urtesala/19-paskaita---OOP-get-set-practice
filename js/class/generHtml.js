class GenHtml {
  static generatePeople(arr, dest) {
    const olEl = document.createElement("ol");
    arr.forEach((wObj) => {
      // validate empleyy or freelancer
      const liEl = document.createElement("li");
      liEl.textContent = `${wObj.fullname} (${wObj.constructor.name})`;
      olEl.append(liEl);
    });
    dest.append(olEl);
  }
}
