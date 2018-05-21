class Contacto
{
    // Creación del constructor
    //   -n: Nombre, t: Teléfono
    constructor(n,t,d)
    {
    	this.nombre = n;
    	this.telefono = t;
        this.direccion = d;
    }


    Escribir()
    {
    	var resultado;

    	resultado = document.getElementById('Resultado');
    	resultado.innerHTML += 
    	   "Nombre: "   + this.nombre + "<br>" + 
    	   "Teléfono: " + this.telefono + "<br>"+
           "Dirección:" + this.direccion + "<br>";
    }

    Cambiar(nuevoN,nuevoT,nuevaD)
    {   
    	this.nombre = nuevoN;
        this.telefono = nuevoT;
        this.direccion = nuevaD;
    }
}
 var    c = new  Array();
        c[0] = new Contacto("Maria",123456780,"RioNervion");
        c[1] = new Contacto("Benito",456780124 ,"Portugalete");
        c[2] = new Contacto("David",777888999, "GarciaNoblejas");
        c[3] = new Contacto("Pepe",999888777,"ArturoSoria");


function MostrarContactos() 
{
         for(var i = 0 ; i<c.length ; i++){
	       c[i].Escribir();
       }
       
}

function CambiarContacto(){
         var n,t,d,sel;

            n=document.getElementById('N').value;
            t=document.getElementById('T').value;
            d=document.getElementById('D').value;
            sel=document.getElementById('selector').value;
            c[sel-1].Cambiar(n,t,d);

        for(var i = 0 ; i<c.length ; i++){
           c[i].Escribir();
        }
             
}

function AñadirContacto(){
            var n,t,d;

                n=document.getElementById('N').value;
                t=document.getElementById('T').value;
                d=document.getElementById('D').value;

                c[4] = new Contacto(n,t,d);
              for(var i = 0 ; i<c.length ; i++){
                    c[i].Escribir();
              }
             
}