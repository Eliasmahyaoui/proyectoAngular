import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-events-show',
  imports: [TitleCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

events: IEvent[]=[
  {
      title: 'Concierto eladio carrion',
      image: '/eventoEE.jpg',
      date: new Date,
      description: 'Concierto de trap en el palau Sant Jordi',
      price: 55
  },
  {
      title: 'Concierto anuel ',
      image:'/eventoA.jpg',
      date:new Date,
      description: 'Concierto de trap en el Roig Arena ',
      price: 60
  },
]


}




