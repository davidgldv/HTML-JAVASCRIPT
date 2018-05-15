function CambiarTexto()
{
	/* Cambiar el texto de un elemento 
	   con id = "Resultado" del documento
	   HTML
	*/
	var miParrafo;
	var precio = 22.65; /* Tipo de datos: Number */

	miParrafo = document.getElementById('Resultado');
	precio = precio + 10;
	miParrafo.innerHTML += 
	   "<br>" + 
	   "Tipo de datos: Number" + "<br>" + 
	   "El precio es " + precio + "<br>" +
	   "El doble del precio es " + (precio*2) + "<br>";

    /* Cambiamos el tipo de datos de precio */
    precio = 'Muy caro'; /* Tipo de datos: String */
	miParrafo.innerHTML += 
	   "Tipo de datos: String" + "<br>" + 
	   "El precio es " + precio + "<br>" +
	   "El doble del precio es " + (precio*2) + "<br>";



}