import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';


@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

events: IEvent[]=[
  {
      title: 'Concierto Eladio Carrion',
      image: '',
      date: new Date('2026-07-03'),
      description: 'Concierto de trap en la plaza de toros',
      price: 25
  },
  {
      title: 'Concierto Anuel AA',
      image:'',
      date:new Date('2026-10-03'),
      description: 'Concierto de trap en el Roig Arena ',
      price: 35
  },
];


}




