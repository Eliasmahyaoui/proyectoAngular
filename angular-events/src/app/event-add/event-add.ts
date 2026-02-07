import { Component, EventEmitter, Output, output } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-add',
  imports: [FormsModule],
  templateUrl: './event-add.html',
  styleUrl: './event-add.css',
})
export class EventAdd {


newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };


@Output() addEvento= new EventEmitter<IEvent>();


changeImage(fileInput: HTMLInputElement) {

 if (!fileInput.files || fileInput.files.length === 0) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.onloadend = () => {
      this.newEvent.image = reader.result as string;
    };

}
addEvent() {

this.addEvento.emit({ ...this.newEvent });


this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: '',
    };

}

}
