import { Component, EventEmitter, Input, Output, output,  } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-event-item',
  imports: [TitleCasePipe, CurrencyPipe, DatePipe,],
  templateUrl: './event-item.html',
  styleUrl: './event-item.css',
})
export class EventItem {

  @Input() event!: IEvent;
  @Output() deleteEvento=  new EventEmitter<void>();


borrar() {

this.deleteEvento.emit();

}






 

}
