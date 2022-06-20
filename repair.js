let s = "&nbsp";
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
let data = `${year}${month}${day}  `;
console.log(year);
let dates = [{ datesYear: [2022, 2023, 2024, 2025] }];
let tel795 = document.getElementById("telf_795");
let tel798 = document.querySelector("#telf_798");
tel795.addEventListener("click", telChange795);
tel798.addEventListener("click", telChange798);
function telChange798() {
  tel798.setAttribute("id", "t");
  d0 = new Date(2022, 7, 1); //year month day

  d1 = new Date();
  dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24);
  dt = dt += 30;
  console.log(dt);
  dt = Math.round(dt);

  tel798.innerHTML = `трансмиссия заменена полностью(муфты иупругое тело) прошло${s}${dt}${s}дней`;
}
function telChange795() {
  tel795.setAttribute("id", "t795");
  d0 = new Date(2022, 6, 15); //year month day
  d1 = new Date();
  dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24);
  dt = dt += 30;
  console.log(dt);
  dt = Math.round(dt);
  tel795.setAttribute("id", "t");
  tel795.innerHTML = `Замена полумуфт на двигателе редукторе 9.06.22 прошло ${s} ${dt} ${s} дней `;
}
