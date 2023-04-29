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

document.querySelector(".b").addEventListener("click", displayText);

function displayText(event) {
  let inputElement = document.querySelector(".myInput");
  let textOutputElement = document.querySelector("#out");
  let text = inputElement.value;
  fNums(text);

  // Create an "li" node:
  const node = document.createElement("li");

  // Create a text node:
  const textnode = document.createTextNode(text);

  // Append the text node to the "li" node:
  node.appendChild(textnode);

  // Append the "li" node to the list:
  document.getElementById("myList").appendChild(node);
  inputElement.value = "";
}

let = num = "";
let str_ing = "";
let tr = document.querySelectorAll("[data-id]");
let ar = [];
function fNums(num) {
  for (let i = 0; i < tr.length; i++) {
    let result = findUniqueNumber(num, tr[i].dataset.id);
    // let r = result.filter((el) => {
    //   return el !== undefined;
    // });
    // console.log(result);

    if (tr[i].dataset.id == "Стена") {
      tr[i].textContent = "Стена";
      tr[i].style.fontSize = "50px";
    }
    if (tr[i].dataset.id == "Окна") {
      tr[i].textContent = "Окна";
      tr[i].style.fontSize = "50px";
    }
    if (tr[i].dataset.id == "Средние-ряды") {
      tr[i].textContent = "Средние-ряды";
      tr[i].style.fontSize = "50px";
    }
    if (tr[i].dataset.id == result) {
      tr[i].style.color = "red";
      tr[i].style.background = "aqua";
      tr[i].style.fontSize = "40px";
      tr[i].style.fontWeight = "700";
    } else {
      tr[i].style.color = "black";

      // tr[i].setAttribute("class", "otherTelfers");
    }
  }
}
// console.log(str_ing);

// console.log(num);

function findUniqueNumber(num, data) {
  let arr = new Array(data);

  let arrEnd = arr.filter((el) => {
    return el.toString().trim().endsWith(num);
  });
  console.log(arrEnd);

  if (arrEnd.length == 1) {
    console.log(1);

    let b = arrEnd[0];
    console.log(b);

    return b;
  } else {
    false;
  }
}
