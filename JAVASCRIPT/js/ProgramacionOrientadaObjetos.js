class Contacto
{
    // Creación del constructor
    //   -n: Nombre, t: Teléfono
    constructor(n,t)
    {
    	this.nombre = n;
    	this.telefono = t;
    }

    Escribir()
    {
    	var resultado;

    	resultado = document.getElementById('Resultado');
    	resultado.innerHTML = 
    	   "Nombre: "   + this.nombre + "<br>" + 
    	   "Teléfono: " + this.telefono + "<br>";
    }

    Cambiar(nuevoN,nuevoT)
    {   
    	this.nombre = nuevoN;
        this.telefono = nuevoT;
    }
}

function MostrarContactos() 
{
	/*var c =  Array(10),
        c[0] = new Contacto("Pepe",784569877),
	    c[1] = new Contacto("Ana",679548789),
        c[2] = new Contacto("Luis",645788657);
   
        for(int i = 0 ; i<10 ; i++){
	           c[i].Escribir();*/
    }
    var    c1= new Contacto("List",123456789);
    c1.Escribir();
}

function CambiarContacto(){
            var n,t;

                n=document.getElementById('nuevoN');
                t=document.getElementById('nuevoT');
                
                c1.Cambiar(n,t);
}
function AñadirContacto(){
            var n,t;

                n=document.getElementById('nuevoN');
                t=document.getElementById('nuevoT');

            var c2 = new Contacto(n,t);

                c1.Escribir();
                c2.Escribir();
}