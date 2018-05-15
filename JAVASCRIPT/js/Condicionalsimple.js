function CalcularEtapa() 
{
	var campoEdad,
	    campoResultado,
	    valorEdad;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = campoEdad.value;

	if ( (valorEdad >= 0) && (valorEdad<=12) ) 
	{
	  campoResultado.innerHTML = "Infancia";
	}
	else if ( (valorEdad >= 13) && (valorEdad<=16) ) 
	  {
	    campoResultado.innerHTML = "Adolescencia";
	  }
	else if ( (valorEdad >= 17) && (valorEdad<=22) ) 
	    {
	      campoResultado.innerHTML = "Juventud";
	    }
	 else 
	    
	      campoResultado.innerHTML = "Adulto";
	    
	  
	
}