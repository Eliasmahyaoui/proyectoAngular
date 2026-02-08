import { Routes } from '@angular/router';
import { EventsShow } from './events-show/events-show';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventsShow },
];
