let sb051 = document.getElementById("sb051");
sb051.addEventListener("click", Sbrepair);
function Sbrepair() {
  d0 = new Date(2022, 6, 8); //year month day
  d1 = new Date();
  dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24);
  dt = dt += 30;
  console.log(dt);
  sb051.setAttribute("id", "sb");
  sb051.innerHTML =
    "<strong>" +
    Math.round(dt) +
    "</strong>  дней от замены пускателя привода фрезы";
}

let sb833055 = document.getElementById("sb833055");
sb833055.addEventListener("click", Sb833055);
function Sb833055() {
  d0 = new Date(2022, 6, 10); //year month day
  d1 = new Date();
  dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24);
  dt = dt += 30;
  console.log(dt);
  sb833055.setAttribute("id", "sbb");
  dt = Math.round(dt);

  sb833055.innerHTML =
    "вышел со строя блокконтакт на пуск привода фрезы  головки A1 поставили приставку пршло <strong>" +
    dt +
    "<strong/> дней";
}
