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

this.events = this.events.filter((e)=> e.title !== eventToDelete.title);


}

  filterBy: string = '';
  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  addEvent() {
    this.events.push({ ...this.newEvent });

    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: '',
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result as string;
    });
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





