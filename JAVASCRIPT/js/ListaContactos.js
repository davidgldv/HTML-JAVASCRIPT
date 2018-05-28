class Contacto
{
    // Creación del constructor
    //   -n: Nombre, t: Teléfono
    constructor(n,t,d) {
    	this.nombre = n;
    	this.telefono = t;
        this.direccion = d;
    }
    Escribir(elementoHTML)   {
        var nombres;
        nombres = document .getElementById(elementoHTML) ; 
        nombres.innerHTML +=  this.nombre + " "; 
    }
    EscribirTodo(elementoHTML){
        var resultado;
        resultado = document.getElementById(elementoHTML);
        resultado.innerHTML = 
           "Nombre: "   + this.nombre + "<br>" + 
           "Teléfono: " + this.telefono + "<br>"+
           "Dirección:" + this.direccion + "<br>";
    }
    Cambiar(nuevoN,nuevoT,nuevaD){   
    	this.nombre = nuevoN;
        this.telefono = nuevoT;
        this.direccion = nuevaD;
    }
}

class Lista
{
    // Creación del constructor
    //   -contador ;numero contactos -lista:lista contactos
    constructor() {
        this.contador = 0;
        this.lista = new Array();//Crea una tabla de x elementos
    }

    InsertarContacto(n,t,d){

            var c = new Contacto(n,t,d)
            this.lista[this.contador] = c;
            this.contador ++;
    }
    EscribirNombres(elementoHTML){
        var resultado = document.getElementById(elementoHTML);
            resultado.innerHTML = "";
        for (var i = 0 ; i < this.contador ;i++){
         this.lista[i].Escribir('Nombres');
        }
    }
    EscribirDetalle(n,elementoHTML){
        var resultado = document.getElementById(elementoHTML);
            resultado.innerHTML = "";

         this.lista[n].EscribirTodo('Resultado');
    }
    CambiarContacto(n,t,d,sel){
           this.lista[sel-1].Cambiar(n,t,d);
    }
}
var miLista = new Lista();

function AñadirContacto(){

    var n,t,d;

          n=document.getElementById('N').value;
          t=document.getElementById('T').value;
          d=document.getElementById('D').value;

            miLista.InsertarContacto(n,t,d);
            miLista.EscribirNombres('Nombres');
}
function CambiarContacto(){
     var n,t,d,sel;

            n=document.getElementById('N').value;
            t=document.getElementById('T').value;
            d=document.getElementById('D').value;
            sel=document.getElementById('Selector').value;
            miLista.CambiarContacto(n,t,d,sel);
            miLista.EscribirNombres('Nombres');
}

function BuscarContacto() {
       var bus=document.getElementById("Buscador").value;
         for(var i = 0 ; i<miLista.contador ; i++){
            if (miLista.lista[i].nombre== bus){
                miLista.EscribirDetalle(i,'Resultado');
            }
            
       }
       
}