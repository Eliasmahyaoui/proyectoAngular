import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
protected readonly title = signal('Elias Fellah');

  //Las declaraciones van fuera siempre,
  nombre:String = 'Elias Mahyaoui';
  edad:number= 27;
  activo:boolean= true;
  ngOnInit(){
  //dentro de la funcion solo propiedades y metodos
    this.nombre;
    this.edad;
    this.activo;
    console.log(`Nombre:${this.nombre}`);
    console.log(`Nombre:${this.edad}`);
    console.log(`Nombre:${this.activo}`);







  }



}
