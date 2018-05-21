class Contacto
{
		// Creacion del constructor
		constructor(n,t){

			this.nombre = n;
			this.telefono = t;
		}
		Escribir(){
			var resultado:
			resultado = document.getElementById('Resultado');
			resultado.innerHTML += "Nombre: " + this.nombre + "<br>" +"Telefono: " + this.telefono + "<br>";

		}

		Cambiar(nt){

			this.telefono = nt;
		}

}

function CrearContacto(){
		var c1 = new Contacto("Pepe",645799733);
		var c2 = new Contacto("Ana",745799733);

		c1.Escribir();
		//c2.Escribir();

}