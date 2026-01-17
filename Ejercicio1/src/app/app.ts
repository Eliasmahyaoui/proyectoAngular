import { Component, signal } from '@angular/core';
import { UserProfile } from './user-profile/user-profile';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio1');
}
