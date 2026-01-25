import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-events-show',
  imports: [TitleCasePipe, CurrencyPipe, DatePipe, EventFilterPipe, FormsModule],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
filterBy: string = '';

orderDate() {
    this.filterBy = '';
    this.events.sort((a, b) =>
      a.date.getTime() - b.date.getTime()
    );
  }

orderPrice() {
    this.filterBy = '';
    this.events.sort((a, b) =>
      a.price - b.price
    );
  }


events: IEvent[]=[
  {
      title: 'Concierto eladio carrion',
      image: '/eventoEE.jpg',
      date: new Date,
      description: 'Concierto de trap en el palau Sant Jordi',
      price: 55,

  },
  {
      title: 'Concierto anuel ',
      image:'/eventoA.jpg',
      date:new Date,
      description: 'Concierto de trap en el Roig Arena ',
      price: 60,


  },
]


}




