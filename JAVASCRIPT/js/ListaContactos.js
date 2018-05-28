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
    	
        var nombres;
    	
        nombres = document .getElementById('Nombres') ; 
        
        nombres.innerHTML +=  this.nombre + " "; 
    }
    EscribirTodo(){
        var resultado;
        resultado = document.getElementById('Resultado');
        resultado.innerHTML = 
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

class Lista
{
    // Creación del constructor
    //   -contador ;numero contactos -lista:lista contactos
    constructor()
    {
        this.contador = 0;
        this.lista = new Array();//Crea una tabla de x elementos
    }

    InsertarContacto(n,t,d){

            var c = new Contacto(n,t,d)
            this.lista[this.contador] = c;
            this.nContactos ++;
    }
    EscribirNombres(elementoHTML){

        for (var i = 0 ; i < contador ;i++){
        this.lista.Escribir(elementoHTML);

        }
    }
}
var miLista = new Lista();

function InsertarContactosLista(){

    var n,t,d;

          n=document.getElementById('N').value;
          t=document.getElementById('T').value;
          d=document.getElementById('D').value;

            miLista.InsertarContacto(n,t,d);
            miLista.EscribirNombres('Nombres');
}