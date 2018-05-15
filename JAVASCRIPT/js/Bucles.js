function   EscribirNumeros()
{
	var campoResultado,
		campoNumero,
		Max;
			

		campoResultado = document.getElementById('Resultado');
		campoNumero = document.getElementById('Numero');
		Max = campoNumero.value;

		
		numero = 0;

		while(numero < Max){
			campoResultado.innerHTML += " " + (numero + 1) ;
			numero++;
		}
}

function   EscribirNumerosDo()
{
	var campoResultado,
		campoNumero,
		Max;
			

		campoResultado = document.getElementById('Resultado1');
		campoNumero = document.getElementById('Numero1');
		Max = campoNumero.value;

		
		numero = 0;

		do{
			campoResultado.innerHTML += " " + (numero + 1) ;
			numero++;
		}
		while(numero < Max)
}