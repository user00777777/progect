let l = "lore";
let kran2 = document.querySelector("#kran2");
kran2.addEventListener("click", (event) => {
  let span = document.querySelector("#k2");
  let kNum2 = event.target.dataset.krannumber2;
  console.log(kNum2);
  let br = "&nbsp";
  if (kNum2 == "kran2") {
    span.setAttribute("id", "new_k2");
    d0 = new Date(2022, 7, 5); //year month day
    d1 = new Date();
    dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24);
    dt = dt += 30;
    console.log(dt);
    dt = Math.round(dt);
    span.innerHTML = `Замена пускателя на ход моста-слева направо 3-й пусктель хода моста прошло
    ${br} ${dt} ${br} дней
    `;
  } else if (kNum2 !== "kran2") {
    return false;
  }

  // if (event.target.tagName == "SPAN") {
  //   span.setAttribute("id", "new_k2");
  //   span.innerHTML =
  //     "Замена пускателя на ход моста-слева направо 3 пусктель хода моста";
  // }
  // else if (event.target.tagName !== "SPAN") {
  // }

  console.log(span);

  // function f1() {
  //   let y = kran2.getAttribute("data-kran2");
  //   let yy = kran2.dataset.kran2;
  //   console.log(y);
  //   console.log(yy);
  // }
  // f1();
});
