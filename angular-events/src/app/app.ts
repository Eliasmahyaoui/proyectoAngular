import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsShow } from './events-show/events-show';

@Component({
  selector: 'app-root',
  imports: [EventsShow, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-events');
}
