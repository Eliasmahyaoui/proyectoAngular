import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  imports: [],
  templateUrl: './ejercicios.html',
  styleUrl: './ejercicios.css',
})
export class Ejercicios implements OnInit {

  nombre= "elias mahyaoui";

  numero: number = 0;

  duplicar(numero: number): number {
    return numero * 2;
  }

  ngOnInit() {

    this.numero = this.duplicar(4);
    console.log(`Número: ${this.numero}`)

  }

}
