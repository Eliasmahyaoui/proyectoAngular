import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';
import { EventItem } from "../event-item/event-item";
import { EventAdd } from "../event-add/event-add";
import { Evento } from '../services/evento';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-events-show',
  imports: [EventFilterPipe, FormsModule, EventItem, EventAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

  filterBy: string = '';
  events: IEvent[] = [];

  constructor(private eventoService: Evento) {}

  ngOnInit() {
    this.eventoService.getEventos().subscribe({
      next: (data) => this.events = data,
      error: (err) => console.error(err)
    });
  }

  deleteEvent(eventToDelete: IEvent) {
    this.events = this.events.filter(e => e.id !== eventToDelete.id);
  }

  addEvent(nuevoEvento: IEvent) {
    this.events = [...this.events, nuevoEvento];
  }

  orderDate() {
    this.filterBy = '';
    this.events.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  orderPrice() {
    this.filterBy = '';
    this.events.sort((a, b) => a.price - b.price);
  }
}






