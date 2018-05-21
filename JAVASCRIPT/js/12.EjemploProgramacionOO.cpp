class Contacto{
	//Atributos
	public char nombre [30];
	public long telefono;
	//Metodos
	public Contacto(char n[30],long t)
	{
		strcpy(this.nombre,n);
		this.telefono = t;
	}
	public void Escribir()
	{
		printf("Nombre: %s \n Telefono:%ld "this.nombre,this.telefono);
	}
	public void Cambiar(long nt){
		this.telefono =nt;
	}


}
main(){
	Contacto c1;

	c1 = new Contacto("Pepe",645645645);
	//Crear contacto (&c1,"Pepe",645645645)
	c1.Escribir();
	c1.Cambiar(645788788); 

}