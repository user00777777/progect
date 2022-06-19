var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
let data = `${year}${month}${day}  `;
console.log(year);

let tel795 = document.getElementById("telf_795");
tel795.addEventListener("click", telChange);
function telChange() {
  const oldDay = 9;
  const oldMonth = 6;
  const oldYear = 2022;
  tel795.setAttribute("class", "t");

  function count(month) {
    let resultMonth;
    switch (year) {
      case 2022:
        resultMonth = month + oldMonth - 12;
        break;
      case 2023:
        resultMonth = month + 6;
        break;
      case 2024:
        resultMonth = month + 12 + 6;

        break;
      case 2025:
        resultMonth = month + 6 + 12 + 12;
        break;

      default:
        resultMonth =
          "Счетчик остановился полумуфта свое отработала(больше чем 3 года и дохрена)";
    }
    return resultMonth;
  }
  let r = count(month);
  // let resultMonth = count(month);
  //console.log(resultMonth, resultYear);

  tel795.innerHTML = `Замена полумуфты на двигателе 9.06.22 прошло  ${r}месяцев `;
}
