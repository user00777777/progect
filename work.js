//for(let i=0;i<30;i++){document.write(`${i},`)}
let lusenko=[1.1,2.2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18.2,21,22.2,25,26.2,29,30.2,]
let malko=[1,2.2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19.2,22,23.2,26,27.2,30,31.2 ]
let kryglui=[1,2.2,3,4,5,6,7,8,9,10,11,12,13,14,15,16.2,19,20.2,23,24.2,27,28.2,31]
let sinkevich=[1,2.2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17.2,20,21.2,24,25.2,26,27.2,30,31.2]
let out=document.querySelector('.out');






const today=new Date()
const day= today.getDate()
const month=today.getMonth()+1;
const year=today.getFullYear();
let hour=today.getHours()
let minuts=parseFloat('59')
const datanow=`${year}/${month}/${day}`;
console.log(hour);
let day2=parseFloat( day +`${'.2'}`)
console.log(minuts);

let vasj=parseFloat(malko.filter(  el=>el==day||el==day2));
let paha=parseFloat( lusenko.filter(el=>el==day2||el==day));
let stas=parseFloat( kryglui.filter(el=>el==day|| el==day2) );
let vital=parseFloat( sinkevich.filter(el=>el==day||el==day2));              


//console.log(paha,day)

let works= function work (){ 
  if(hour>=7&&hour<19&&day==vital)  {   out.innerHTML='Дежурный электрик <span>Синькевич B</span> <br> 1 смена <br>Деж. сантехник Писаренко'}

   
else    if (hour>=19&&day2==vital){ out.innerHTML='Дежурный электрик <span>Синькевич B </span><br>  2 смена <br>Деж. сантехник Писаренко'}
 
else  if (hour>=19&&stas==day2) {out.innerHTML='Дежурный электрик <span>Круглый C.</span> 2 смена<br>Деж. сантехник Головченко С.'}
else if (hour>=7&&hour<19&&day==stas) {out.innerHTML='Дежурный электрик <span>Круглый C.</span> <br>1 смена <br>Деж. сантехник Головченко С.'}
else if(hour>=0&&hour<19&&day==paha)  {out.innerHTML='Дежурный электрик <span>Лысенко П.</span><br> 1 смена <br>Деж. сантехник Немченко В.'     }

   
else  if (hour>=19&&day2==paha){out.innerHTML=' Дежурный электрик<span> Лысенко</span> <br> 2 смена <br>Деж. сантехник Немченко В'}
else if(hour>=7&&hour<19&&day==vasj)  {   out.innerHTML='Дежурный электрик <span id="vas">Малько B.<span> <br>1 смена <br>Деж. сантехник Ничипорчук А.'}

   
 else  if (hour>=19&&day2==vasj){ out.innerHTML=' Дежурный электрик<span id="vas"> Малько.В</span> <br> 2 смена <br>Деж. сантехник Ничипорчук А'}


      
                                };


works();


  


   
      






document.getElementById('btn').addEventListener('click',my);


function my(){
let i=document.getElementById('inp').value;


let b;
if(i=='Петриченко'||i==26223){b=arr[0]}
else if(i=='тригуб'||'Тригуб'){b=arr[1]
}

else {(b=arr[2])
};
document.getElementById('ansver').innerHTML+=b;
}


let arr=['ремонт кранов (03.03.2022)<br>тельфера(05.03.2022)<br>высота(11.05.2022)<br>группа_эл.безопасности(03.06.2022)<br> заточные_Сверлильные(12.10.2022)','<br> димон<br>где твои удостоверения','неувязочка']
let arr2=[ '22.02.2022','05.03.2022','11.05.2022','03.06.2022' ]



const date = (new Date()).toLocaleDateString();
console.log(date);
if(date=='03.03.2022'){alert('краны')};
if(date=='05.03.2022'){alert ('тельфера')};
if(date=='11.05.2022'){alert('высота'   )   };
if(date=='03.06.2022'){alert('группа Петриченко')}




