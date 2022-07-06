let kran2 = document.querySelector("#kran2");
kran2.addEventListener("click", (event) => {
  let span = document.querySelector("#k2");
  if (event.target.tagName == "SPAN") {
    span.setAttribute("id", "new_k2");
    span.innerHTML =
      "Замена пускателя на ход моста-слева направо 3 пусктель хода моста";
  } else if (event.target.tagName !== "SPAN") {
  }
});
