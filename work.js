//for(let i=0;i<30;i++){document.write(`${i},`)}
// let lusenko = [2, 3.2, 6, 7.2, 10, 11.2, 14, 15.2, 18, 19.2, 22, 23.2, 26, 27.2, 30]
// let malko = [3, 4.2, 7, 8.2, 11, 12.2, 15, 16.2, 19, 20.2, 23, 24.2, 27, 28.2,]
// let kryglui = [1.2, 4, 5.2, 8, 9.2, 12, 13.2, 16, 17.2, 20, 21.2, 24, 25.2, 28, 29.2]
// let sinkevich = [1, 2.2, 5, 6.2, 9, 10.2, 13, 14.2, 17, 18.2, 21, 22.2, 25, 26.2, 29, 30.2]

const employees = [
  {
    electrician: "Лысенко П.",
    plumber: "Немченко В.",
    pre: 1.2,
    workingDays: [
      1.2, 4, 5.2, 8, 9.2, 12, 13.2, 16, 17.2, 20, 21.2, 24, 25.2, 28, 29.2,
    ],
  },
  {
    electrician: "Малько B.",
    plumber: "Ничипорчук А.",
    pre: 1.1,
    workingDays: [
      1, 2.2, 5, 6.2, 9, 10.2, 13, 14.2, 17, 18.2, 21, 22.2, 25, 26.2, 29, 30.2,
    ],
  },
  {
    electrician: "Круглый С.В.",
    plumber: "Головченко С.",
    pre: 2,
    workingDays: [
      2, 3.2, 6, 7.2, 10, 11.2, 14, 15.2, 18, 19.2, 22, 23.2, 26, 27.2, 30,
      31.2,
    ],
  },
  {
    electrician: "Синькевич B.",
    plumber: "Литвин",
    pre: function () {
      console.log(isFirstShift);
    },
    workingDays: [
      3, 4.2, 7, 8.2, 11, 12.2, 15, 16.2, 19, 20.2, 23, 24.2, 27, 28.2, 31,
    ],
  },
];

const out = document.querySelector(".out");

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const hour = today.getHours();
const minuts = today.getMinutes();
const datanow = `${year}/${month}/${day}`;
console.log(hour);
console.log(minuts);

// let vasj = malko.filter(el => el == day || el == day2);
// let paha = lusenko.filter(el => el == day2 || el == day);
// let stas = kryglui.filter(el => el == day || el == day2);
// let vital = sinkevich.filter(el => el == day || el == day2);

const isFirstShift = hour >= 7 && minuts <= 59 && hour <= 18 && minuts <= 59;

const day2 = Number(
  `${isFirstShift ? day : hour >= 18 && hour <= 23 ? day : day - 1}.2`
);

const updatedWork = () => {
  return employees.map((employee) => {
    if (employee.workingDays.includes(isFirstShift ? day : day2)) {
      return (out.innerHTML = `<h1 id="i"> Дежурный</h1>
      электрик <span>${employee.electrician}</span> <br> ${
        isFirstShift ? "1" : "2"
      } смена <br>Деж. сантехник ${employee.plumber}`);
    }
  });
};
// let electricians = () => {
//   let o = document.querySelector(".out");
//   console.log(o);

//   o.addEventListener("click", (event) => {
//     if (event.target.tagName == "H1") {
//       return employees.map((el) => {
//         if (el.workingDays.includes(isFirstShift ? day : day2)) {
//           employees[3].pre();
//         }
//       });
//     }
//   });
// };
// electricians();
// const work = () => {
//   if (hour >= 7 && hour < 19 && day == vital) { out.innerHTML = 'Дежурный электрик <span>Синькевич B</span> <br> 1 смена <br>Деж. сантехник Писаренко' }
//   else if (hour >= 19 && day2 == vital) { out.innerHTML = 'Дежурный электрик <span>Синькевич B </span><br>  2 смена <br>Деж. сантехник Писаренко' }
//   else if (hour >= 19 && stas == day2) { out.innerHTML = 'Дежурный электрик <span>Яременко А.</span> 2 смена<br>Деж. сантехник Головченко С.' }
//   else if (hour >= 7 && hour < 19 && day == stas) { out.innerHTML = 'Дежурный электрик <span>Яременко А.</span> <br>1 смена <br>Деж. сантехник Головченко С.' }
//   else if (hour >= 7 && hour < 19 && day == paha) { out.innerHTML = 'Дежурный электрик <span>Лысенко П.</span><br> 1 смена <br>Деж. сантехник Немченко В.' }
//   else if (hour >= 19 && day2 == paha) { out.innerHTML = ' Дежурный электрик<span> Лысенко</span> <br> 2 смена <br>Деж. сантехник Немченко В' }
//   else if (hour >= 7 && hour < 19 && day == vasj) { out.innerHTML = 'Дежурный электрик <span id="vas">Малько B.<span> <br>1 смена <br>Деж. сантехник Ничипорчук А.' }
//   else if (hour >= 19 && day2 == vasj) { out.innerHTML = ' Дежурный электрик<span id="vas"> Малько.В</span> <br> 2 смена <br>Деж. сантехник Ничипорчук А' }
// };

// work();
updatedWork();

document.getElementById("btn").addEventListener("click", my);

function my() {
  let i = document.getElementById("inp").value;

  let b;
  if (i == "Петриченко" || i == 26223) {
    b = arr[0];
  } else if (i == "тригуб" || "Тригуб") {
    b = arr[1];
  } else {
    b = arr[2];
  }
  document.getElementById("ansver").innerHTML += b;
}

let arr = [
  "ремонт кранов (03.03.2022)<br>тельфера(05.03.2022)<br>высота(11.05.2022)<br>группа_эл.безопасности(03.06.2022)<br> заточные_Сверлильные(12.10.2022)",
  "<br> димон<br>где твои удостоверения",
  "неувязочка",
];
let arr2 = ["22.02.2022", "05.03.2022", "11.05.2022", "03.06.2022"];

const date = new Date().toLocaleDateString();
console.log(date);
if (date == "03.03.2022") {
  alert("краны");
}
if (date == "05.03.2022") {
  alert("тельфера");
}
if (date == "11.05.2022") {
  alert("высота");
}
if (date == "03.06.2022") {
  alert("группа Петриченко");
}
