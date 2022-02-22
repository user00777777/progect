

document.getElementById('btn').addEventListener('click',my);


function my(){
let i=document.getElementById('inp').value;


let b;
if(i=='петриченко'||i==26223){b=arr[0]}
else if(i=='тригуб'||'Тригуб'){b=arr[1]
}

else {document.write('ошибочка')
};
document.getElementById('ansver').innerHTML+=b;
}


let arr=['ремонт кранов (03.03.2022)<br>тельфера(05.03.2022)<br>высота(11.05.2022)<br>группа_эл.безопасности(03.06.2022)<br> заточные_Сверлильные(12.10.2022)','<br> димон<br>где твои удостоверения']
let arr2=[ '22.02.2022','05.03.2022','11.05.2022','03.06.2022' ]



const date = (new Date()).toLocaleDateString();
console.log(date);
if(date=='03.03.2022'){alert('краны')};
if(date=='05.03.2022'){alert ('тельфера')};
if(date=='11.05.2022'){alert('высота'   )   };
if(date=='03.06.2022'){alert('группа Петриченко')}





