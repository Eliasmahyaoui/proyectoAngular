import { Component , OnInit} from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';
import { EventItem } from "../event-item/event-item";
import { EventAdd } from "../event-add/event-add";
import { Evento } from '../services/evento';



@Component({
  selector: 'app-events-show',
  imports: [EventFilterPipe, FormsModule, EventItem, EventAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  filterBy: string = '';


  events: IEvent[]=[];
  constructor(private Evento: Evento){}

  ngOnInit(){
    this.events= this.Evento.getEventos();
  }







  deleteEvent(eventToDelete: IEvent) {
    this.events = this.events.filter((e) => e.title !== eventToDelete.title);
  }

  addEvent(nuevoEvento: IEvent) {
  this.events = [...this.events, nuevoEvento];
}





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





