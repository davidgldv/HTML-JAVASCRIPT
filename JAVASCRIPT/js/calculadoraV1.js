function ObtenerDato1(){

var miResultado;
var miDato1;

	miResultado = document.getElementById('Resultado1');
	miDato1 = document.getElementById('Dato1').value;
	miResultado.innerHTML = 
	" El valor del dato1 es " + miDato1;
}
function ObtenerDato2(){

var miResultado2;
var miDato2;

	miResultado2 = document.getElementById('Resultado2');
	miDato2 = document.getElementById('Dato2');
	miResultado2.innerHTML = 
	" El valor del dato2 es " + miDato2.value;
}

function Suma(){
var miResultado;
var miDato1;
var miDato2;

	miResultado = document.getElementById('Resultado3');
	miDato1 = parseInt(document.getElementById('Dato1').value);
	miDato2 = parseInt(document.getElementById('Dato2').value);
	miResultado.innerHTML = 
	" El resultado de la suma  es " + (miDato1+miDato2);
}
function Resta(){}
function Multiplicacion(){}
function Division(){}
function DarResultado(){


}