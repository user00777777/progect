// let Mal = ([] = count(4, 2));

// let Paha = ([] = count(4, 3));
// let Sin = ([] = count(4, 0));
// let Krugluii = ([] = count(4, 1));
let PahaLusenko = ([] = changeAr(count(4, 0), count(4, 1)));
let Malko = ([] = changeAr(count(4, 1), count(4, 2)));
let Sinkevish = ([] = changeAr(count(4, 3), count(4, 0)));
let Kruglui = ([] = changeAr(count(4, 2), count(4, 3)));
function changeAr(numb, str) {
  let strAr = ([] = str.map((el) => el + ""));
  let x = ([] = numb.concat(strAr));
  return x.sort((a, b) => a - b);
}
// console.log(Malko, PahaLusenko, Sinkevish);

let dates = new Date();
let month = dates.getMonth() + 1;
let date = dates.getDate();
let minute = dates.getMinutes();
let hour = dates.getHours();
date;
month;

let isFirstShift =
  hour < 19 && minute < 59 && hour > 7 && minute < 59 ? true : false;
function count(a, b) {
  let x = [];
  for (let i = 1; i <= 31; i++) {
    if (i % a == b) {
      x.push(i);
    }
  }
  return x;
}
let strday2 = isFirstShift ? date : date + "";

let allDuty = [
  {
    shift: Malko,
    duty: "Малько",
    nextOne: isFirstShift ? "Лисенко" : "Сінкевич",
  },
  {
    shift: Sinkevish,
    duty: "Сінкевич",
    nextOne: isFirstShift ? "Круглий" : "Малько",
  },
  {
    shift: PahaLusenko,
    duty: "Лисенко",
    nextOne: isFirstShift ? "Сінкевич" : "Круглий",
  },
  {
    shift: Kruglui,
    duty: "Круглий",
    nextOne: isFirstShift ? "Малько" : "Малько",
  },
];

strday2;

function outDuty(duty) {
  let rr = duty.reduce(
    (acc, el) => {
      function cN(n) {
        if (n) return n;
      }
      if (el.shift.includes(strday2)) {
        return (acc = { one: cN(el.duty), two: cN(el.nextOne) });
      }
      return acc;
    },
    0,
    {}
  );

  let { one: Now_Shift, two: Next_Shift } = rr;
  Now_Shift;
  Next_Shift;
  return {
    first: () => {
      return isFirstShift
        ? `Зараз на первій зміні ${Now_Shift} `
        : `Зараз на другій зміні ${Now_Shift}`;
    },
    second: () => {
      return `Наступний діжурный ${Next_Shift}`;
    },
  };
}

let c = outDuty(allDuty);

// console.log(c.first());
// console.log(c.second());
// console.log();
let out = (document.querySelector(".out").innerHTML = c.first());
let ds = (document.querySelector("#three").innerHTML = c.second());
console.log(ds);
