function CalcularDia() {
	var campoResultado,
		fechaActual,
		diaActual;

		
		campoResultado = document.getElementById('Resultado');
		//Instanciacion del objeto Date.
		fechaActual = new Date();
		//getDay devuelve de 0 a 6 contabilizando Domingo como 0 y el Sabado como 6
		diaActual = fechaActual.getDay();

		switch(diaActual){

			case 0:
					campoResultado.innerHTML ="Domingo";
					break;
			case 1:
					campoResultado.innerHTML ="Lunes";
					break;
			case 2:
					campoResultado.innerHTML ="Martes";
					break;
			case 3:
					campoResultado.innerHTML ="Miercoles";
					break;
			case 4:
					campoResultado.innerHTML ="Jueves";
					break;
			case 5:
					campoResultado.innerHTML ="Viernes";
					break;
			case 6:
					campoResultado.innerHTML ="Sabado";
					break;
			
		}

}