function CalcularEtapa() 
{
	var campoEdad,
	    campoResultado,
	    valorEdad;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = campoEdad.value;


	switch(valorEdad){

		case 12:
	  			campoResultado.innerHTML = "Adolescente";
				break;
		case 33:
				campoResultado.innerHTML = "Adulto";
				break;
		case 69:
				campoResultado.innerHTML = "Jubilado";
				break;

	}
}/*Este ejemplo para el switch no es muy bueno por el tema de los rangos*/