const yearOutput = document.querySelector('#copy_year');
const now = new Date();
const getYear = now.getFullYear();
yearOutput.innerHTML = getYear;
// console.log(getYear);
