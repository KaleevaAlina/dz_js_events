"use strict"

function butt(){
	console.log('Задание 1:' , 'Привет!');
};
	but1.addEventListener("click" ,  butt);

//Задача 2
function fbut(){
	alert('Привет!');
};
	but2.addEventListener("mousemove",fbut );

//Задача 3
 function fbut1(){
	console.log( 'Задание 3:' , 'Привет!');
};
	but3.addEventListener("dblclick",fbut1 );
	
//Задача 4
function fbut3(){
	alert(  'Привет!');
}
	but4.addEventListener("mouseout", fbut3 );

//Задача 5
function fbut4(){
	alert('Ку-ку');		
}
	but5.addEventListener("click",  fbut4 );


//Задача 6
function button6click () {
	let but6 = document.getElementById('input6');
	but6.value = 'Поменял текст';
}
   but6.addEventListener('click',button6click);

//Задача 7
function button7click() {
	let but7 = document.getElementById('img');
	but7.src = 'img/2.jpg' ;		
  }
  but7.addEventListener("click",button7click);

//Задача 8
function button8Click(elem) {
	alert(elem.value);
}

//Задача 9
function button9Click(elem) {
	elem.value = 'Поменяла текст!';
}

//Задача 10
function button10Click(elem) {
	elem.value = 'Поменяла текст!';
}
function mode(elem) {
	elem.value = ' Еще раз поменяла текст!';
}

//Задача 11
function button11Click(elem) {
	elem.value = 'Ку-ку';
}

//Задача 12
function button12Click(elem) {
	let inpn = document.getElementById('inp12');
	inpn.disabled = true; 
	elem.value = 'О, теперь на меня больше не нажать!';
}

//Задача 13
function button13Click(elem){
	elem.src = 'img/2.jpg';
}

function button133Click(elem){
	elem.src = 'img/1.jpg';
}


//Задача 14
function button14Click() {
	let input = document.getElementById('input14');
	input.style.color = 'red';
	input.style.width = '200px';
}


//Задача 15
function button15Click() {
	let input15 = document.getElementById('input15');
	input15.style.display = 'none';
}
function button15CClick() {
	let iinput15 = document.getElementById('input15');
	iinput15.style.display = 'inline-block';
}


//Задача 16
function button16Click() {
	let input16 = document.getElementById('input16');
	input16.style.color = 'red';
	input16.style.height = '50px';
	input16.style.width = '300px';
	input16.value = 'Ой,  я поменял свой текст';
	input16.style.display = 'block';
	input16.style.margin = '10px ';
	let input16n = document.getElementById('input16n');
	input16n.style.margin = '10px';
}

//Задача 17
function button17Click() {
	let inpn17 = document.getElementById('inp17');
	inpn17.disabled = true; 
	inpn17.value = 'О, теперь на меня больше не нажать!';
	input17.style.margin = '10px ';
}
function button17CClick() {
	let inpp17 = document.getElementById('inp17');
	inpp17.style.display = 'none';
}

//Задача 18
function but18(elem) {
	//let but18 = document.getElementById('but18');
	elem.value++;	  
}

//Задача 19
function button19Click() {
	let inp19 = document.getElementById('but19');
	inp19.style.float = 'left';
	inp19.style.width = '200px';
	let inpp19 = document.getElementById('input19');
	inpp19.value= 'Теперь я плавая справа';
	inpp19.style.width = '250px';
}

//Задача 20
function button20Click() {
	let a= 'eee';
	let b= 'www';
	let c= 'ddd';
	let inp20 = document.getElementById('input20');
	inp20.value = 'Мои css классы: ' + `${a } ` + `${b } ` + `${c } `;
}

//Задача 21
function buttonClick() {
	let input1 = document.getElementById('input1');
	let input2 = document.getElementById('input2');
	let input1Value = input1.value;
	let input2Value = input2.value;
	input1.value = input2Value;
	input2.value = input1Value;
}
//Задача 22
function button22Click() {
	let iinput22 = document.getElementById('inp22');
	let input22 = document.getElementById('input22');
	let number = Number(inp22.value);
	let square = number*number; 
	input22.value = square;
	input22.disabled = true;
}

//Задача 23
function button23Click() {
	let iinput23 = document.getElementById('inp23');
	let input23 = document.getElementById('input23');
	let number = Number(inp23.value);
	if(typeof input23 == 'number'){
		let square = number*number;
		input23.value = square;
	} else if (typeof input23 != 'number') {
		input23.value = 'Error';
	}
	input23.disabled = true;
}

//Задача 24
function butt24(elem) {
	elem.style.cursor = 'not-allowed';
	elem.disabled = true; 
}


