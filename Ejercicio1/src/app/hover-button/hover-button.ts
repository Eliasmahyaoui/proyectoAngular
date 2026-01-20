import { Component } from '@angular/core';

@Component({
  selector: 'hover-button',
  imports: [],
  templateUrl: './hover-button.html',
  styleUrl: './hover-button.css',
})
export class HoverButton {
  onMouseEnter() {
    console.log('Ratón sobre el botón');
  }

  count = 0;

  increment() {
    this.count++;
  }
}
