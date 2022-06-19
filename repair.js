var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
let data = `${year}${month}${day}  `;
console.log(data);
const oldDay = 9;
const oldMonth = 6;
const oldYear = 2022;

function countMonth(month, oldMonth) {
  let resultMonth = month + oldMonth - 12;
  return resultMonth;
}
let r = countMonth(month, oldMonth);

console.log(r);
let tel795 = document.getElementById("telf_795");
tel795.addEventListener("click", telChange);
function telChange() {
  tel795.innerHTML = `Замена полумуфты на двигателе 9.06.22 прошло ${r}месяцев `;

  tel795.setAttribute("class", "t");
}
