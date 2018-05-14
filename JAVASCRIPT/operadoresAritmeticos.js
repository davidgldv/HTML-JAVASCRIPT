function CalcularOperadores (){

//Esta funcion realiza operaciones aritmeticas con elementos del documento

var miParrafo;
var valor = 22.65; /* Tipo de datos: Number */

	miParrafo = document.getElementById('Resultado');
	valor = 20 + 12;
	miParrafo.innerHTML +=
	"Sumando los numeros 12 y 20 =" + valor + "<br>"  ;
	valor = 20 - 12;
	miParrafo.innerHTML +=
	"Restando los numeros 20 y 12 =" + valor + "<br>"  ;
	valor = 20 * 3;
	miParrafo.innerHTML +=
	"Multiplicando los numero 20 y 3 =" + valor + "<br>";
	valor = 20 / 5;
	miParrafo.innerHTML +=
	"Dividir  el numero  20 entre 5 =" + valor + "<br>";
	valor = 8;  
	miParrafo.innerHTML +=
	"Incrementar valor =" + (valor++) + "<br>";  
	valor = 8;  
	miParrafo.innerHTML +=
	"Incrementar valor =" + (++valor) + "<br>";  

}