import { Component } from '@angular/core';
import { NoticeItem } from "../notice-item/notice-item";

@Component({
  selector: 'notice-list',
  imports: [NoticeItem],
  templateUrl: './notice-list.html',
  styleUrl: './notice-list.css',
})
export class NoticeList {

  avisos = [
    'Este es un aviso importante',
    'Este es un aviso importante',
    'Este es un aviso importante',

  ];

}
