import { Component, Input } from '@angular/core';

@Component({
  selector: 'notice-item',
  imports: [],
  templateUrl: './notice-item.html',
  styleUrl: './notice-item.css',
})
export class NoticeItem {

@Input() texto: string='Este es un aviso importante';


}
