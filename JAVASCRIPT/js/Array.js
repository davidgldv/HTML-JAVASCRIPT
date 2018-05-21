function CrearElemento() {
	//Creacion de un array de 5 
	var miTabla = new Array(5);
	var resultado;

	miTabla[0]="Pepe";
	miTabla[1]="Pedro";
	miTabla[2]="Marc";
	miTabla[3]="Rossi";
	miTabla[4]="Pau";

resultado = document.getElementById('Resultado');
	for (var i = 0 ; i < miTabla.length; i++) {
		resultado.innerHTML += " " +miTabla[i] + " "; 
	}
}