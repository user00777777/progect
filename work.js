
//for(let i=0;i<30;i++){document.write(`${i},`)}
let lusenko=[1.1,2.2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18.2,21,22.2,25,26.2,29,30.2,]
let malko=[1,2.2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19.2,22,23.2,26,27.2,30,31.2 ]
let kryglui=[1,2.2,3,4,5,6,7,8,9,10,11,12,13,14,15,16.2,19,20.2,23,24.2,27,28.2,31]
let sinkevich=[1,2.2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17.2,20,21.2,24,25.2,26,27.2,30,31.2]
let out=document.querySelector('.out');
let out2=document.querySelector('.out2')




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


console.log(paha,day)

switch (vital,stas,paha) {
   case day:if(hour>=7&&hour<19&&day==vital)  {   out.innerHTML='Синькевич 1 смена'};

   
   case  day2: if (hour>19&&day2==vital) out.innerHTML='Синькевичь  2 смена';

   case day2:if (hour>=19&&stas==day2) {out2.innerHTML='Круглый 2 смена';//out2.style.add='out3'
      
   }
   case day:if (hour>=7&&hour<19&&day==stas) {out.innerHTML='Круглый 1 смена';}
   case day:if(hour>=7&&hour<19&&day==paha)  {out2.innerHTML='Лысенко 1 смена';     };

   
   case  day2: if (hour>19&&day2==paha) out.innerHTML='Лысенко  2 смена';
   case day:if(hour>7&&hour<19&&day==vasj)  {   out.innerHTML='Малько 1 смена'};

   
   case  day2: if (hour>19&&day2==vasj) out.innerHTML='Малько  2 смена';


      
   }
  


   
      






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





