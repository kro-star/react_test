import { nanoid } from 'nanoid';
import React, { useState } from 'react';

function App() {
	
  //Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. 
  //По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.
  //Модифицируйте предыдущую задачу так, чтобы по умолчанию в инпутах стояла текущая дата.
  let nowDate = new Date();
  let datestr = String(nowDate.getFullYear()) + '-' + String(nowDate.getMonth()+1) + '-' + String(nowDate.getDate());
  
  const [value1, setValue1] = useState(datestr);
  const [value2, setValue2] = useState(datestr);
  const [result, setResult] = useState(0);

 function getDateforArray (date){
  let arrDate = [];
  arrDate = date.split('-');
  return arrDate;
 }
 function multiDate(val1, val2){
 let arrDate2 = getDateforArray(val2);
 let arrDate1 = getDateforArray(val1);
 console.log(arrDate1);
 console.log(arrDate2);
 let date1 = new Date(Date.UTC(Number(arrDate1[0]), Number(arrDate1[1]) - 1, Number(arrDate1[2]), 0, 0, 0));
 let date2 = new Date(Date.UTC(Number(arrDate2[0]), Number(arrDate2[1]) - 1, Number(arrDate2[2]), 0, 0, 0));
 console.log(date1);
 console.log(date2);
 console.log((date2.getTime() - date1.getTime()));
 return Math.abs(date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24;
 }

	
	return <div>
		<input value={value1} onChange={(event) => {setValue1(event.target.value)}} />
		<input value={value2} onChange={(event) => {setValue2(event.target.value)}} />
    <button onClick={() => {setResult(multiDate(value1, value2))}}>sum</button>
    <p>{result}</p>
	</div>;
  
}

export default App;
