import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';
import { EventItem } from "../event-item/event-item";
import { EventAdd } from "../event-add/event-add";



@Component({
  selector: 'app-events-show',
  imports: [EventFilterPipe, FormsModule, EventItem, EventAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

  deleteEvent(eventToDelete: IEvent) {

    this.events = this.events.filter((e) => e.title !== eventToDelete.title);


  }

  filterBy: string = '';

  addEvent(nuevoEvento: IEvent) {
  this.events = [...this.events, nuevoEvento];
}



  events: IEvent[] = [
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

  get filteredEvents(): IEvent[] {
    if (!this.filterBy) {
      return this.events;
    }

    const filter = this.filterBy.toLowerCase();
    return this.events.filter(event =>
      event.title.toLowerCase().includes(filter)
    );
  }

  orderDate() {
    this.filterBy = '';
    this.events.sort((a, b) => {
      let fechaA = new Date(a.date);
      let fechaB = new Date(b.date);
      return fechaA.getTime() - fechaB.getTime();
    });
  }

  orderPrice() {
    this.filterBy = '';
    this.events.sort((a, b) =>
      a.price - b.price
    );
  }


}





