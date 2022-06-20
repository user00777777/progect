let sb051 = document.getElementById("sb051");
sb051.addEventListener("click", Sbrepair);
function Sbrepair() {
  d0 = new Date(2022, 6, 8); //year month day
  d1 = new Date();
  dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24);
  dt = dt += 30;
  console.log(dt);
  sb051.innerHTML =
    "<strong>" +
    Math.round(dt) +
    "</strong>  дней от замены пускателя привода фрезы";
}
