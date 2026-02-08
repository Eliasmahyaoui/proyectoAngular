import { Component, signal } from '@angular/core';
import { UserProfile } from './user-profile/user-profile';
import { CurrencyPipe, NgClass } from '@angular/common';
import { TextStyle } from './text-style/text-style';
import { StatusRow } from './status-row/status-row';
import { HoverButton } from './hover-button/hover-button';
import { SearchBox } from './search-box/search-box';
import { PriceView } from './price-view/price-view';
import { NoticeList } from "./notice-list/notice-list";
import { NoticeItem } from "./notice-item/notice-item";
@Component({
  selector: 'app-root',
  imports: [UserProfile, TextStyle, StatusRow, HoverButton, SearchBox, PriceView, NoticeList, NoticeItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Ejercicio1');
}
