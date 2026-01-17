import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
@Component({

  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'

})


export class App {
  protected readonly title = signal('Elias Mahyaoui Fellah');

  //Las declaraciones van fuera siempre,


  // 1
  nombre: String = 'Elias Mahyaoui';
  edad: number = 27;
  activo: boolean = true;


  //2
  calcularAreaRectangulo(base: number = 2, altura: number = 5) {
    return base * altura;
  }

  //4

  idType(id: number | string ) {

    return id;
  }

  //5
  arrayNumeros(numeros:[5,3,1,2]){
    return numeros.sort();
  }



  ngOnInit() { //dentro de la funcion solo propiedades y metodos


    //1
    this.nombre;
    this.edad;
    this.activo;
    console.log(`Nombre:${this.nombre}`);
    console.log(`Nombre:${this.edad}`);
    console.log(`Nombre:${this.activo}`);

    //2

    console.log('Resultado = ' + this.calcularAreaRectangulo(2, 5));


    //3
    interface Persona {   //¿Porque va aquí? dentro porque es cmoo un metodo una interface
      nombre: string;
      edad: number;
      correo: string;
    }

    const usuario: Persona = {
      nombre: 'pepe',
      edad: 33,
      correo: 'pepitoeldelospalotes.com'
    }

    console.log(usuario);


    //4
    const mensaje= this.idType(2);
    console.log(mensaje);


    //5
    console.log(this.arrayNumeros([5,3,1,2]));





  }






}
