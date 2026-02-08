import { Injectable } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';



@Injectable({
  providedIn: 'root',
})
export class Evento {
  constructor() { }

  getEventos(): IEvent[] {
    return [
      {
        title: 'Concierto eladio carrion',
        image: '/eventoEE.jpg',
        date: '2026-07-04',
        description: 'Concierto de trap en el palau Sant Jordi',
        price: 55,
      },
      {
        title: 'Concierto anuel',
        image: '/eventoA.jpg',
        date: '2026-04-25',
        description: 'Concierto de trap en el Roig Arena',
        price: 60,
      }
    ];

  }


}


