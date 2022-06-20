let sb051 = document
  .getElementById("sb051")
  .addEventListener("click", Sbrepair);
function Sbrepair() {
  d0 = new Date(2022, 6, 15); //year month day
  d1 = new Date();
  dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24);
  document.write(
    "<strong>" +
      Math.round(dt) +
      "</strong> - столько дне прошло с начала 2013-го года..."
  );
}
