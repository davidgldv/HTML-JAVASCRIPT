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
 var    c1= new Contacto("List",123456789);

function MostrarContactos() 
{
	/*var c =  Array(10),
        c[0] = new Contacto("Pepe",784569877),
	    c[1] = new Contacto("Ana",679548789),
        c[2] = new Contacto("Luis",645788657);
   
        for(int i = 0 ; i<10 ; i++){
	           c[i].Escribir();}*/
    
   
    c1.Escribir();
}

function CambiarContacto(){
            var campoN,campoT,n,t;

                campoN=document.getElementById('nuevoN');
                campoT=document.getElementById('nuevoT');
                n=campoN.value;
                t=campot.value;

                c1.Cambiar(n,t);
}
function AñadirContacto(){
            var campoN,campoT,n,t;

                campoN=document.getElementById('nuevoN');
                campoT=document.getElementById('nuevoT');
                n=campoN.value;
                t=campot.value;

            var c2 = new Contacto(n,t);

                c1.Escribir();
                c2.Escribir();
}